import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Store } from '@mui/icons-material'
import CheckoutProduct from '../CheckoutProduct'

function CheckoutShop() {
    return (
        <div className="checkout-shop">
            <Container fluid="md">
                <Row className="mb-3">
                    <Col md={12} className="d-flex">
                        <h4 className="pt-2 me-2">Tên cửa hàng gì đó</h4>
                        <div style={{ color: 'gray' }}>|</div>
                        <div
                            style={{
                                marginLeft: '7px',
                                fontSize: '1.5rem',
                                color: '#7ca5b8',
                            }}
                        >
                            <Store
                                sx={{
                                    fontSize: '22px',
                                    color: '#7ca5b8',
                                    marginRight: '5px',
                                }}
                            />
                            Xem cửa hàng
                        </div>
                    </Col>
                </Row>
                {[0,1].map(item => <CheckoutProduct key={item}/>)}
            </Container>
        </div>
    )
}

export default CheckoutShop
