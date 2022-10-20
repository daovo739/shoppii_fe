import React from 'react'
import './index.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from '@mui/material'

function Bill() {
    return (
        <div className="bill py-4">
            <Container
                fluid="md"
                className="py-4 px-3"
                style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                }}
            >
                <Row style={{ borderBottom: '3px solid #fafafa' }}>
                    <h2 className="fw-bold pb-4">Đơn hàng</h2>
                </Row>
                <Row style={{ paddingTop: '2rem' }}>
                    <Col md={6} style={{ color: 'gray' }}>
                        Tạm tính
                    </Col>
                    <Col
                        md={6}
                        style={{ textAlign: 'right', color: 'var(--main-green)' }}
                    >
                        293.000đ
                    </Col>
                </Row>
                <Row style={{ borderBottom: '3px solid #fafafa', paddingBottom: '2rem' }}>
                    <Col md={6} style={{ color: 'gray' }}>
                        Phí vận chuyển
                    </Col>
                    <Col
                        md={6}
                        style={{ textAlign: 'right', color: 'var(--main-green)' }}
                    >
                        32.000đ
                    </Col>
                </Row>
                <Row style={{ paddingTop: '2rem' }}>
                    <Col md={6}>Tổng tiền</Col>
                    <Col
                        md={6}
                        style={{
                            textAlign: 'right',
                            color: 'var(--main-red)',
                            fontSize: '2.3rem',
                        }}
                    >
                        293.000₫
                    </Col>
                </Row>
                <Row className="px-4">
                    <Button
                        sx={{
                            backgroundColor: 'var(--main-red)',
                            color: 'white',
                            fontSize: '1.5rem',
                            marginTop: '2rem',
                            border: '2px solid var(--main-red)'
                        }}
                        className="checkout-btn"
                    >
                        Đặt hàng
                    </Button>
                </Row>
            </Container>
        </div>
    )
}

export default Bill
