import React from 'react'
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
                        style={{ textAlign: 'right', color: '#00ab56' }}
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
                        style={{ textAlign: 'right', color: '#00ab56' }}
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
                            color: '#ff424e',
                            fontSize: '2.3rem',
                        }}
                    >
                        293.000₫
                    </Col>
                </Row>
                <Row className="px-4">
                    <Button
                        sx={{
                            backgroundColor: '#ff424e',
                            color: 'white',
                            fontSize: '1.5rem',
                            marginTop: '2rem',
                        }}
                    >
                        Đặt hàng
                    </Button>
                </Row>
            </Container>
        </div>
    )
}

export default Bill
