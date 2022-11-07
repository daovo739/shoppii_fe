import { useEffect, useState, useMemo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import CheckoutShop from './components/CheckoutShop'
import PaymentMethods from './components/PaymentMethods'
import SendTo from './components/SendTo'
import Bill from './components/Bill'
import useStore from '../../../store/hooks'
import { shippingUnit } from './components/CheckoutShop/ShippingUnitData'
import PaypalButton from '../../../components/PaypalButton'
import ModalNotification from '../../../components/ModalNotification/index'
import { post } from '../../../utils/httprequest'
import { handleFormData } from '../../../utils/handleForm'
import { useAuth } from '../../../hooks/useAuth'

function Checkout() {
    const { user } = useAuth()
    const { addresses, getAddresses, getTotalCart } = useStore()
    const { state } = useLocation()
    const [selectedAddress, setSelectedAddress] = useState(
        addresses.find(address => address.isDefault),
    )
    const [paymentMethod, setPaymentMethod] = useState('paypal')
    const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false)
    const [typeCheckout, setTypeCheckout] = useState('success')

    useEffect(() => {
        if (!state) {
            navigate('/cart', { replace: true })
        }
    }, [])

    useEffect(() => {
        setTotalCheckout(updateCheckout())
    }, [state])

    const updateCheckout = () => {
        if (!state) return []
        return state?.map(item => {
            const totalProduct = item.products.reduce((total, product) => {
                return total + product.cartQuantity * product.price
            }, 0)
            const deliveryFee = parseInt(shippingUnit[0].price)
            return {
                ...item,
                checkout: {
                    deliveryMethod: shippingUnit[0],
                    deliveryFee,
                    totalProduct,
                    total: totalProduct + deliveryFee,
                },
            }
        })
    }

    const [totalCheckout, setTotalCheckout] = useState(updateCheckout())

    const infoCheckout = useMemo(() => {
        return {
            ...totalCheckout,
            totalPrice: totalCheckout?.reduce((total, item) => {
                return total + item.checkout.total
            }, 0),
            selectedAddress,
            paymentMethod,
        }
    }, [totalCheckout, selectedAddress, paymentMethod])

    const handleCheckoutCash = async () => {
        console.log({
            orderJson: JSON.stringify(totalCheckout),
            addressId: selectedAddress.addressId,
            paymentMethod,
            userId: user.userId,
        })
        const formData = handleFormData({
            orders: JSON.stringify(totalCheckout),
            addressId: selectedAddress.addressId,
            paymentMethod,
            userId: user.userId,
        })
        const res = await post('order', formData)
        const data = await res.json()
        if (res.status === 201) {
            setTypeCheckout('success')
        } else {
            setTypeCheckout('failure')
        }
        console.log(res)
        console.log(data)
        setIsCheckoutSuccess(true)
        getTotalCart()
    }

    const handleCheckoutPaypal = async type => {
        if (type === 'success') {
            console.log({
                orderJson: JSON.stringify(totalCheckout),
                addressId: selectedAddress.addressId,
                paymentMethod,
                userId: user.userId,
            })
            const formData = handleFormData({
                orders: JSON.stringify(totalCheckout),
                addressId: selectedAddress.addressId,
                paymentMethod,
                userId: user.userId,
            })
            const res = await post('order', formData)
            const data = await res.json()
            if (res.status === 500) {
                setTypeCheckout('failure')
            } else {
                setTypeCheckout('success')
            }
            setIsCheckoutSuccess(true)
            console.log(res)
            console.log(data)
            getTotalCart()
        } else {
            setTypeCheckout(type)
        }
    }

    return (
        <Container fluid="md">
            {!isCheckoutSuccess ? (
                <Row>
                    <Col md={9}>
                        <Container fluid="md">
                            {totalCheckout?.map(shop => {
                                return (
                                    <Row key={shop.shopId}>
                                        <CheckoutShop
                                            shop={shop}
                                            setTotalCheckout={setTotalCheckout}
                                            totalCheckout={totalCheckout}
                                        />
                                    </Row>
                                )
                            })}
                            <Row>
                                <PaymentMethods
                                    setPaymentMethod={setPaymentMethod}
                                />
                            </Row>
                        </Container>
                    </Col>
                    <Col md={3}>
                        <Container fluid="md">
                            <Row>
                                <SendTo
                                    addresses={addresses}
                                    selectedAddress={selectedAddress}
                                    setSelectedAddress={setSelectedAddress}
                                    getAddresses={getAddresses}
                                />
                            </Row>
                            <Row className="d-flex flex-column">
                                <Bill totalCheckout={totalCheckout} />

                                {paymentMethod === 'cash' && (
                                    <Button
                                        sx={{
                                            backgroundColor: 'var(--main-red)',
                                            color: 'white',
                                            fontSize: '1.5rem',
                                            border: '2px solid var(--main-red)',
                                        }}
                                        className="checkout-btn"
                                        onClick={handleCheckoutCash}
                                    >
                                        Đặt hàng
                                    </Button>
                                )}
                                {paymentMethod === 'paypal' && (
                                    <PaypalButton
                                        infoCheckout={infoCheckout}
                                        handleCheckoutPaypal={
                                            handleCheckoutPaypal
                                        }
                                    />
                                )}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            ) : (
                <ModalNotification type={typeCheckout} />
            )}
        </Container>
    )
}

export default Checkout
