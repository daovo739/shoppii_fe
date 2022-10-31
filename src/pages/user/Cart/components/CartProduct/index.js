import { useState, useMemo } from 'react'
import ProductImage from '../../../../../assets/images/bd2e86e454da37f2e6c9a128c8e9a2b8.png'
import { Container, Row, Col } from 'react-bootstrap'
import './index.css'
import {
    AddCircleOutline,
    RemoveCircleOutline,
    DeleteForeverOutlined,
} from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { formatPrice } from '../../../../../utils/format'
import { put } from '../../../../../utils/httprequest'
import { handleFormData } from '../../../../../utils/handleForm'
import { useAuth } from '../../../../../hooks/useAuth'

function CartProduct({ product, getData }) {
    const { user } = useAuth()
    const [quantity, setQuantity] = useState(1)

    const totalPrice = useMemo(() => {
        return formatPrice(product?.cartQuantity * product?.price)
    }, [product])

    const decreaseQuantity = async id => {
        const newQuantity = product.cartQuantity - 1
        const formData = handleFormData({
            userId: user.userId,
            quantity: newQuantity,
            productId: id,
        })
        console.log({
            userId: user.userId,
            quantity: newQuantity,
            productId: id,
        })
        const res = await put('cart', formData)
        const data = await res.json()
        getData()
    }

    const increaseQuantity = id => {
        setQuantity(quantity => {
            if (quantity < product.quantity) {
                return quantity + 1
            }
            return quantity
        })
    }

    const handleQuantity = (e, id) => {
        console.log(id)
        if (quantity > product.quantity) {
            setQuantity(product.quantity)
        } else if (quantity < 1) {
            setQuantity(1)
        } else {
            setQuantity(e.target.value)
        }
    }

    return (
        <div className="cart-product w-100">
            <Container fluid="md">
                <Row>
                    <Col md={6}>
                        <div className="cart-product-info d-flex">
                            <img src={ProductImage} alt="img" />
                            <div className="pt-3 ms-3">
                                <h3 className="mb-2">{product?.productName}</h3>
                                <h4
                                    style={{
                                        color: 'gray',
                                    }}
                                >
                                    {formatPrice(product?.price)}
                                </h4>
                                {/* <h4 style={{ color: 'var(--main-red)' }}>
                                    Sản phẩm này đã hết hàng
                                </h4> */}
                            </div>
                        </div>
                    </Col>
                    <Col md={3} className="d-flex align-items-center">
                        <div>
                            <IconButton
                                onClick={() =>
                                    increaseQuantity(product.productId)
                                }
                            >
                                <AddCircleOutline
                                    sx={{
                                        fontSize: '24px',
                                        color: 'var(--main-blue)',
                                    }}
                                />
                            </IconButton>
                            <input
                                className="quantity-input"
                                type="number"
                                value={product?.cartQuantity}
                                onChange={e =>
                                    handleQuantity(e, product.productId)
                                }
                                // disabled
                            />
                            <IconButton
                                onClick={() =>
                                    decreaseQuantity(product.productId)
                                }
                            >
                                <RemoveCircleOutline
                                    sx={{
                                        fontSize: '24px',
                                        color: 'var(--main-blue)',
                                    }}
                                />
                            </IconButton>
                        </div>
                    </Col>
                    <Col md={2} className="d-flex align-items-center">
                        <div
                            className="fs-3"
                            style={{ color: 'var(--main-blue)' }}
                        >
                            {totalPrice}
                        </div>
                    </Col>
                    <Col md={1} className="d-flex align-items-center">
                        <div className="d-block">
                            <DeleteForeverOutlined
                                sx={{
                                    fontSize: '25px',
                                    color: 'var(--main-red)',
                                }}
                            />
                            <div style={{ color: 'var(--main-red)' }}>Xóa</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CartProduct
