import { Container, Row, Col } from 'react-bootstrap'
import { useState, memo } from 'react'
import './index.css'
import { Checkbox, Chip } from '@mui/material'
import { Store } from '@mui/icons-material'
import CartProduct from '../CartProduct'
import { Link } from 'react-router-dom'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

function CartShop({
    item,
    getData,
    handleOpenModalDelete,
    selectedCheckout,
    setSelectedCheckout,
}) {
    const { shopId, products } = item
    const [productsChecked, setProductsChecked] = useState([])

    console.log(productsChecked)
    const handleSelectProduct = product => {
        if (
            productsChecked.some(
                productChecked =>
                    productChecked.productId === product.productId,
            )
        ) {
            setProductsChecked(
                productsChecked.filter(
                    productChecked =>
                        productChecked.productId !== product.productId,
                ),
            )
        } else {
            setProductsChecked([...productsChecked, product])
        }
    }

    const handleSelectAllProduct = () => {
        if (productsChecked.length === products.length) {
            setProductsChecked([])
        } else {
            setProductsChecked(products)
        }
    }

    return (
        <div className="cart-shop mb-5">
            <Container fluid="md">
                <Row>
                    <Col
                        md={12}
                        className="d-flex align-items-center"
                        style={{
                            height: '5rem',
                            borderBottom: '3px solid var(--box-color)',
                            backgroundColor: 'white',
                        }}
                    >
                        <Checkbox
                            sx={{
                                '& .MuiSvgIcon-root': { fontSize: 25 },
                                marginRight: '7px',
                            }}
                            checked={productsChecked.length === products.length}
                            onChange={() => handleSelectAllProduct()}
                            indeterminate={
                                productsChecked.length > 0 &&
                                productsChecked.length < products.length
                            }
                        />
                        <h4 className="pt-2 me-2">{item?.shopName}</h4>
                        <div style={{ color: 'gray' }}>|</div>
                        <Link
                            style={{
                                marginLeft: '7px',
                                fontSize: '1.5rem',
                                color: 'var(--main-green)',
                            }}
                            to={`/viewshop/${item?.shopId}`}
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
                {item?.products?.map(product => (
                    <Row key={product.productId}>
                        <Col
                            md={12}
                            className="d-flex align-items-center py-4"
                            style={{
                                height: 'auto',
                                borderBottom: '3px solid var(--box-color)',
                                backgroundColor: 'white',
                            }}
                        >
                            <Checkbox
                                checked={productsChecked.some(
                                    productChecked =>
                                        product.productId ===
                                        productChecked.productId,
                                )}
                                sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 22 },
                                    marginRight: '7px',
                                }}
                                onChange={() => handleSelectProduct(product)}
                            />
                            {/* <Chip size="small" label="Hết hàng" disabled/> */}
                            <CartProduct
                                product={product}
                                getData={getData}
                                handleOpenModalDelete={handleOpenModalDelete}
                            />
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    )
}

export default memo(CartShop)
