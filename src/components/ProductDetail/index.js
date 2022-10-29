import React from 'react'
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
} from '@mui/icons-material'
import { Link as LinkRouter } from 'react-router-dom'
import { formatPrice } from '../../utils/format'
import ImageGallery from '../ImageGallery'

const ProductDetail = ({ product }) => {
    console.log(product)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumbs
                            aria-label="breadcrumb"
                            className="breadcrumbs-product"
                        >
                            <LinkRouter
                                underline="hover"
                                color="inherit"
                                to="/"
                            >
                                HomePage
                            </LinkRouter>
                            <Link underline="hover" color="inherit">
                                Shop
                            </Link>
                            <Typography
                                color="text.primary"
                                className="bread-active"
                            >
                                Product
                            </Typography>
                        </Breadcrumbs>
                    </div>
                </div>

                <div className="row page-box">
                    <div className="col-xs-12 col-sm-6">
                        {/* <div className="product-images">
                            <div
                                id="imagesCarousel"
                                className="carousel slide"
                                data-bs-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src={ProductImage}
                                            alt="img1"
                                        ></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={ProductImage}
                                            alt="img1"
                                        ></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={ProductImage}
                                            alt="img1"
                                        ></img>
                                    </div>
                                </div>

                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#imagesCarousel"
                                    data-bs-slide="prev"
                                >
                                    <ArrowBackIos
                                        fontSize="medium"
                                        className="text-dark next-prev-icon"
                                    ></ArrowBackIos>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#imagesCarousel"
                                    data-bs-slide="next"
                                >
                                    <ArrowForwardIos
                                        fontSize="medium"
                                        className="text-dark next-prev-icon"
                                    ></ArrowForwardIos>
                                </button>
                            </div>
                        </div>

                        <div className="small-images">
                            <img src={ProductImage} alt="img1"></img>
                            <img src={ProductImage} alt="img1"></img>
                            <img src={ProductImage} alt="img1"></img>
                            <img src={ProductImage} alt="img1"></img>
                        </div> */}

                        <ImageGallery isDelete={false} />
                    </div>

                    <div className="col-xs-12 col-sm-6">
                        <div className="detail">
                            <p>{product.name}</p>
                            <Chip
                                label={product?.category?.category_name}
                                className="catalog"
                            />
                            <p>{formatPrice(product.price)}</p>
                            <div className="quantity">
                                <IconButton>
                                    <Add fontSize="large" />
                                </IconButton>
                                <input
                                    type="number"
                                    min="1"
                                    defaultValue={1}
                                    style={{
                                        padding: '0',
                                        textAlign: 'center',
                                        outline: 'none',
                                    }}
                                />
                                <IconButton>
                                    <Remove fontSize="large" />
                                </IconButton>
                            </div>
                        </div>
                        <Button
                            variant="outlined"
                            startIcon={<AddShoppingCart fontSize="large" />}
                            className="add-cart-btn ms-5"
                        >
                            Thêm vào giỏ hàng
                        </Button>
                    </div>
                </div>

                {/* <hr></hr> */}

                <div className="row page-box">
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

                <div className="row page-box">
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

export default ProductDetail
