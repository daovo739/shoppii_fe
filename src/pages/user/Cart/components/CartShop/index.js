import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'
import './index.css'
import { Checkbox, Chip } from '@mui/material'
import { Store } from '@mui/icons-material'
import CartProduct from '../CartProduct'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

function CartShop() {
    return (
        <div className="cart-shop mb-5">
            <Container fluid="md">
                <Row>
                    <Col
                        md={12}
                        className="d-flex align-items-center"
                        style={{
                            height: '5rem',
                            borderBottom: '3px solid #fafafa',
                            backgroundColor: 'white',
                        }}
                    >
                        <Checkbox
                            sx={{
                                '& .MuiSvgIcon-root': { fontSize: 25 },
                                marginRight: '7px',
                            }}
                        />
                        <h4 className="pt-2">Tên cửa hàng gì đó</h4>
                        <Store
                            sx={{
                                fontSize: '20px',
                                color: '#2877ee',
                                marginLeft: '7px',
                            }}
                        />
                    </Col>
                </Row>
                {[0, 1, 2].map(item => (
                    <Row key={item}>
                        <Col
                            md={12}
                            className="d-flex align-items-center py-4"
                            style={{
                                height: 'auto',
                                borderBottom: '3px solid #fafafa',
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
                            <CartProduct />
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    )
}

export default CartShop