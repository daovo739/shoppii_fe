import { useState, useMemo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Store } from '@mui/icons-material'
import CheckoutProduct from '../CheckoutProduct'
import ShippingUnitModal from '../ShippingUnitModal'
import { shippingUnit } from '../CheckoutShop/ShippingUnitData'
import { formatPrice } from '../../../../../utils/format'

function CheckoutShop({ shop }) {
    const [selectedUnit, setSelectedUnit] = useState(shippingUnit[0])

    const getSelectedUnit = index => {
        setSelectedUnit(shippingUnit[index])
    }

    const totalPrice = useMemo(() => {
        return (
            shop.products.reduce((total, product) => {
                return total + product.cartQuantity * product.price
            }, 0) +
            Number(selectedUnit.price) +
            parseInt(selectedUnit.price.replace('.', ''))
        )
    }, [shop])

    return (
        <div className="checkout-shop py-4 px-3">
            <Container fluid="md">
                <Row>
                    <Container
                        fluid="md"
                        className="py-4 px-3"
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            borderBottom: '4px dashed #fafafa',
                        }}
                    >
                        <Row className="mb-3">
                            <Col md={12} className="d-flex">
                                <h4 className="pt-2 me-2 text-capitalize">
                                    {shop.shopName}
                                </h4>
                                <div
                                    style={{
                                        color: 'gray',
                                        marginRight: '7px',
                                    }}
                                >
                                    |
                                </div>
                                <Link
                                    style={{
                                        margin: 'auto 0',
                                        fontSize: '1.2rem',
                                        color: '#7ca5b8',
                                    }}
                                    to={`/viewshop/${shop.shopId}`}
                                >
                                    <Store
                                        sx={{
                                            fontSize: '22px',
                                            color: 'var(--main-green)',
                                            marginRight: '5px',
                                        }}
                                    />
                                    Xem cửa hàng
                                </Link>
                            </Col>
                        </Row>
                        {shop?.products?.map(product => (
                            <Row key={product.productId}>
                                <Col md={12}>
                                    <CheckoutProduct product={product} />
                                </Col>
                            </Row>
                        ))}
                    </Container>
                </Row>
                <Row
                    style={{
                        padding: '1rem',
                        backgroundColor: 'var(--light-blue)',
                        marginTop: '2px',
                        borderRadius: '8px',
                    }}
                >
                    <Container fluid="md">
                        <Row className="py-3">
                            <Col md={2}>
                                <div style={{ color: 'var(--main-green)' }}>
                                    Đơn vị vận chuyển
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="delivery-info">
                                    <h3 className="fw-bold">
                                        {selectedUnit.name}
                                    </h3>
                                    <div
                                        className="note fs-5"
                                        style={{ color: 'gray' }}
                                    >
                                        (Do ảnh hưởng bởi Covid19, thời gian
                                        giao hàng quốc tế có thể kéo dài hơn dự
                                        kiến)
                                    </div>
                                </div>
                            </Col>
                            <Col md={2}>
                                <ShippingUnitModal onClick={getSelectedUnit} />
                            </Col>
                            <Col md={2}>
                                <div style={{ textAlign: 'right' }}>
                                    {selectedUnit.price}
                                </div>
                            </Col>
                        </Row>
                        <Row
                            style={{ borderTop: '2px dashed #fafafa' }}
                            className="pt-3"
                        >
                            <Col md={12} style={{ textAlign: 'right' }}>
                                <span
                                    className="fs-4 me-3"
                                    style={{ color: 'gray' }}
                                >
                                    Tổng số tiền :{' '}
                                </span>
                                <span
                                    className="fs-1 me-3"
                                    style={{ color: 'var(--main-red)' }}
                                >
                                    {formatPrice(totalPrice)}
                                </span>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </div>
    )
}

export default CheckoutShop
