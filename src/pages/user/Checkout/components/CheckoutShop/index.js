import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Store } from '@mui/icons-material'
import CheckoutProduct from '../CheckoutProduct'
import {Button} from '@mui/material';

function CheckoutShop() {
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
                                <h4 className="pt-2 me-2">
                                    Tên cửa hàng gì đó
                                </h4>
                                <div style={{ color: 'gray' }}>|</div>
                                <div
                                    style={{
                                        marginLeft: '7px',
                                        fontSize: '1.2rem',
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
                        {[0, 1].map(item => (
                            <Row>
                                <Col md={12}>
                                    <CheckoutProduct key={item} />
                                </Col>
                            </Row>
                        ))}
                    </Container>
                </Row>
                <Row style={{padding: '1rem', backgroundColor: '#e6eef7', marginTop: '2px', borderRadius: '8px'}}>
                    <Container fluid='md'>
                        <Row className="py-3">
                            <Col md={2}>
                                <div style={{color: '#7ca5b8'}}>Đơn vị vận chuyển</div>
                            </Col>
                            <Col md={6}>
                                <div className="delivery-info">
                                    <h3 className="fw-bold">Standard Express</h3>
                                    <div className="note fs-5" style={{color: 'gray'}}>(Do ảnh hưởng bởi Covid19, thời gian giao hàng quốc tế có thể kéo dài hơn dự kiến)</div>
                                </div>
                            </Col>
                            <Col md={2}>
                                <Button sx={{ fontSize: '1.5rem', fontWeight: 'bold'}}>THAY ĐỔI</Button>
                            </Col>
                            <Col md={2}>
                                <div style={{textAlign: 'right'}}>15.000₫</div>
                            </Col>
                        </Row>
                        <Row style={{ borderTop: '2px dashed #fafafa'}} className="pt-3">
                            <Col md={12} style={{ textAlign: 'right'}}>
                                <span className="fs-4 me-3" style={{color: 'gray'}}>Tổng số tiền : </span>
                                <span className="fs-1 me-3" style={{color: '#ff424e'}}>204.000₫</span>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </div>
    )
}

export default CheckoutShop
