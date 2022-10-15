import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from '@mui/material'

function SendTo() {
    return (
        <div className="sendto py-4">
            <Container
                fluid="md"
                className="py-4 px-3"
                style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                }}
            >
                <Row>
                    <Col md={12} className="d-flex justify-content-between">
                        <h3 style={{ color: 'gray' }}>Giao tới</h3>
                        <Button sx={{ fontSize: '1.2rem' }}>Thay đổi</Button>
                    </Col>
                </Row>
                <Row>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                        <span className="me-2">Tên người nhận</span>
                        <span
                            className="fs-2 fw-light"
                            style={{ color: 'gray' }}
                        >
                            |
                        </span>
                        <span className="ms-2">0459877568</span>
                    </div>
                </Row>
                <Row>
                    <span style={{ color: 'gray', fontSize: '1.4rem' }}>
                        56 kiệt 150 Lê Văn Hiến, Quận Ngũ Hành Sơn, Thành phố Đà
                        Nẵng
                    </span>
                </Row>
            </Container>
        </div>
    )
}

export default SendTo
