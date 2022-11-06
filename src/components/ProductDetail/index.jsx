import { memo, useState } from 'react'
import './index.css'
import ProductImage from '../../assets/images/bd2e86e454da37f2e6c9a128c8e9a2b8.png'
import {
    IconButton,
    Button,
    Chip,
    Typography,
    Breadcrumbs,
    Link,
} from '@mui/material'
import {
    Storefront,
    Add,
    Remove,
    AddShoppingCart,
    LocationOn,
    NavigateNext,
} from '@mui/icons-material'
import { Link as LinkRouter } from 'react-router-dom'
import { formatPrice } from '../../utils/format'
import ImageGallery from '../ImageGallery'
import { useAuth } from '../../hooks/useAuth'
import { handleFormData } from '../../utils/handleForm'
import { toast } from 'react-toastify'
import { post } from '../../utils/httprequest'
import useStore from '../../store/hooks'

const ProductDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(1)
    const { user } = useAuth()
    const { cartTotal, setCartTotal } = useStore()
    console.log(product)
    const handleAddToCart = async (e, id) => {
        if (!user) {
            toast('Đăng nhập để trải nghiệm mua hàng')
            return
        }
        e.preventDefault()
        const formData = handleFormData({
            productId: id,
            quantity: quantity,
            userId: user.userId,
        })
        const res = await post('cart', formData)
        const data = await res.json()
        if (res.status > 200 && res.status < 300) {
            toast.success('Thêm vào giỏ hàng thành công')
        } else {
            toast.error('Có lỗi xảy ra! Thử lại sau')
        }
    }

    const decreaseQuantity = () => {
        if (!user) {
            toast('Đăng nhập để trải nghiệm mua hàng')
            return
        }
        setQuantity(quantity => {
            if (quantity > 1) {
                return quantity - 1
            }
            return quantity
        })
    }

    const increaseQuantity = () => {
        if (!user) {
            toast('Đăng nhập để trải nghiệm mua hàng')
            return
        }
        setQuantity(quantity => {
            if (quantity < product.quantity) {
                return quantity + 1
            }
            return quantity
        })
    }

    const handleQuantity = e => {
        if (!user) {
            toast('Đăng nhập để trải nghiệm mua hàng')
            return
        }
        if (quantity > product.quantity) {
            setQuantity(product.quantity)
        } else if (quantity < 1) {
            setQuantity(1)
        } else {
            setQuantity(e.target.value)
        }
    }

    return (
        <>
            <div className="container">
                <div
                    className="row mb-3 ps-3"
                    style={{
                        backgroundColor: 'white',
                        boxShadow: 'var(--box-shadow-main)',
                    }}
                >
                    <div className="col-12">
                        <Breadcrumbs
                            aria-label="breadcrumb"
                            className="breadcrumbs-product"
                            separator={<NavigateNext fontSize="medium" />}
                        >
                            <LinkRouter
                                underline="hover"
                                color="inherit"
                                to="/"
                            >
                                <strong style={{ fontSize: '1.6rem' }}>
                                    Trang chủ
                                </strong>
                            </LinkRouter>
                            <Link underline="hover" color="inherit">
                                <div style={{ fontSize: '1.6rem' }}>
                                    Cửa hàng
                                </div>
                            </Link>
                            <Typography
                                color="text.primary"
                                className="bread-active"
                            >
                                <div style={{ fontSize: '1.6rem' }}>
                                    Sản phẩm
                                </div>
                            </Typography>
                        </Breadcrumbs>
                    </div>
                </div>

                <div
                    className="row page-box"
                    style={{ backgroundColor: 'white' }}
                >
                    <div className="col-xs-12 col-sm-6">
                        <ImageGallery
                            isDelete={false}
                            images={product?.images?.map(img => {
                                return {
                                    image: img,
                                }
                            })}
                        />
                    </div>

                    <div className="col-xs-12 col-sm-6">
                        <div className="detail">
                            <p>{product.name}</p>
                            <Chip
                                label={product?.category?.category_name}
                                className="catalog"
                            />
                            <div
                                style={{
                                    fontSize: '3rem',
                                    backgroundColor: '#fafafa',
                                    paddingLeft: '1rem',
                                    color: 'var(--main-red)',
                                }}
                                className="my-3 py-2"
                            >
                                {formatPrice(product.price)}
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="quantity">
                                    <IconButton onClick={increaseQuantity}>
                                        <Add fontSize="large" />
                                    </IconButton>
                                    <input
                                        type="number"
                                        min="1"
                                        max={product.quantity}
                                        value={quantity}
                                        style={{
                                            textAlign: 'center',
                                            outline: 'none',
                                            width: '50px',
                                        }}
                                        onChange={handleQuantity}
                                    />
                                    <IconButton onClick={decreaseQuantity}>
                                        <Remove fontSize="large" />
                                    </IconButton>
                                </div>
                                <p
                                    style={{
                                        fontSize: '1.2rem',
                                        margin: '0',
                                        marginLeft: '20px',
                                    }}
                                >
                                    Còn lại <strong>{product.quantity}</strong>{' '}
                                    sản phẩm
                                </p>
                            </div>
                        </div>
                        <Button
                            variant="contained"
                            startIcon={<AddShoppingCart fontSize="large" />}
                            className="add-cart-btn ms-5"
                            onClick={e => {
                                handleAddToCart(e, product.productId)
                                setCartTotal(cartTotal + 1)
                            }}
                        >
                            Thêm vào giỏ hàng
                        </Button>
                    </div>
                </div>

                {/* <hr></hr> */}

                <div
                    className="row page-box"
                    style={{ backgroundColor: 'white' }}
                >
                    <div className="col-12">
                        <div className="shop">
                            <div className="shop-image">
                                <img src={ProductImage} alt="img1"></img>
                            </div>
                            <div className="shop-info">
                                <p style={{ marginBottom: 0 }}>
                                    {product?.shop?.name}
                                </p>
                                <div className="d-flex">
                                    <LocationOn />
                                    <p style={{ fontSize: '1.2rem' }}>
                                        {product?.shop?.address}
                                    </p>
                                </div>
                                <Button
                                    variant="outlined"
                                    startIcon={<Storefront fontSize="medium" />}
                                    className="view-shop-btn"
                                    component={LinkRouter}
                                    to={`/viewshop/${product?.shop?.shopId}`}
                                >
                                    Xem cửa hàng
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="row page-box"
                    style={{ backgroundColor: 'white' }}
                >
                    <div className="col-xs-12 col-xs-8">
                        <div className="product-decs">
                            <p>Mô tả sản phẩm</p>
                            <div className="product-decs-detail">
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(ProductDetail)
