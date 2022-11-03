import { useState, useMemo, memo } from 'react'
import ProductImage from '../../../../../assets/images/bd2e86e454da37f2e6c9a128c8e9a2b8.png'
import { Container, Row, Col } from 'react-bootstrap'
import './index.css'
import {
    AddCircleOutline,
    RemoveCircleOutline,
    DeleteForeverOutlined,
} from '@mui/icons-material'
import { Icon, IconButton } from '@mui/material'
import { formatPrice } from '../../../../../utils/format'
import { put, _delete } from '../../../../../utils/httprequest'
import { handleFormData } from '../../../../../utils/handleForm'
import { useAuth } from '../../../../../hooks/useAuth'

function CartProduct({
    product,
    getData,
    handleOpenModalDelete,
    productsChecked,
    setProductsChecked,
}) {
    const { user } = useAuth()
    const [quantity, setQuantity] = useState(product.cartQuantity)

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
        const res = await put('cart', formData)
        const data = await res.json()
        handleCheckIsChecked(id, newQuantity)
        setQuantity(newQuantity)
        getData()
    }

    const increaseQuantity = async id => {
        const newQuantity = product.cartQuantity + 1
        const formData = handleFormData({
            userId: user.userId,
            quantity: newQuantity,
            productId: id,
        })
        const res = await put('cart', formData)
        const data = await res.json()
        handleCheckIsChecked(id, newQuantity)
        setQuantity(newQuantity)
        getData()
    }

    const handleQuantity = (e, id) => {
        const newQuantity = e.target.value
        if (newQuantity > product.quantity) {
            setQuantity(product.quantity)
            return
        }
        setQuantity(newQuantity)
    }

    const handleInputBlur = async (e, id) => {
        const value = e.target.value
        if (!value) {
            setQuantity(product.cartQuantity)
            return
        } else {
            const formData = handleFormData({
                userId: user.userId,
                quantity: value,
                productId: id,
            })
            const res = await put('cart', formData)
            const data = await res.json()
            handleCheckIsChecked(id, value)
            setQuantity(value)
            getData()
        }
    }

    const handleCheckIsChecked = (id, newQuantity) => {
        const isExist = productsChecked.find(item => item.productId === id)
        if (isExist) {
            setProductsChecked(prev => [
                ...prev.filter(item => item.productId !== id),
                { ...isExist, cartQuantity: newQuantity },
            ])
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
                                {product?.products?.quantity < 1 && (
                                    <h4 style={{ color: 'var(--main-red)' }}>
                                        Sản phẩm này đã hết hàng
                                    </h4>
                                )}
                            </div>
                        </div>
                    </Col>
                    <Col
                        md={3}
                        className="d-flex flex-column align-items-center"
                    >
                        <div>
                            <IconButton
                                onClick={() =>
                                    decreaseQuantity(product.productId)
                                }
                                disabled={product?.products?.quantity < 1}
                            >
                                <RemoveCircleOutline
                                    sx={{
                                        fontSize: '24px',
                                        color: 'var(--main-blue)',
                                    }}
                                />
                            </IconButton>
                            <input
                                className="quantity-input"
                                type="number"
                                min={0}
                                max={product?.quantity}
                                value={quantity}
                                onChange={e =>
                                    handleQuantity(e, product.productId)
                                }
                                onBlur={e =>
                                    handleInputBlur(e, product.productId)
                                }
                                disabled={product?.quantity < 1}
                            />
                            <IconButton
                                onClick={() =>
                                    increaseQuantity(product.productId)
                                }
                                disabled={
                                    product?.quantity < 1 ||
                                    product?.cartQuantity >= product?.quantity
                                }
                            >
                                <AddCircleOutline
                                    sx={{
                                        fontSize: '24px',
                                        color: 'var(--main-blue)',
                                    }}
                                />
                            </IconButton>
                        </div>
                        <p
                            style={{
                                fontSize: '1.1rem',
                                marginTop: '3px',
                            }}
                        >
                            Còn lại <strong>{product.quantity}</strong> sản phẩm
                        </p>
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
                            <IconButton
                                className="d-flex flex-column"
                                onClick={() =>
                                    handleOpenModalDelete(product?.productId)
                                }
                            >
                                <DeleteForeverOutlined
                                    sx={{
                                        fontSize: '25px',
                                        color: 'var(--main-red)',
                                    }}
                                />
                                <div style={{ color: 'var(--main-red)' }}>
                                    Xóa
                                </div>
                            </IconButton>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default memo(CartProduct)
