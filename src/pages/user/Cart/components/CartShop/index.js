import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'
import './index.css'
import { Checkbox, Chip } from '@mui/material'
import { Store } from '@mui/icons-material'
import CartProduct from '../CartProduct'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

function CartShop({ item }) {
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
                        />
                        <h4 className="pt-2 me-2">{item?.shopName}</h4>
                        <div style={{ color: 'gray' }}>|</div>
                        <div
                            style={{
                                marginLeft: '7px',
                                fontSize: '1.5rem',
                                color: 'var(--main-green)',
                            }}
                        >
                            <Store
                                sx={{
                                    fontSize: '22px',
                                    color: 'var(--main-green)',
                                    marginRight: '5px',
                                }}
                            />
                            Xem cửa hàng
                        </div>
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
                                sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 22 },
                                    marginRight: '7px',
                                }}
                            />
                            {/* <Chip size="small" label="Hết hàng" disabled/> */}
                            <CartProduct product={product} />
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    )
}

export default CartShop
