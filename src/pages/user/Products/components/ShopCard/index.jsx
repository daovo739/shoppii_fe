import { memo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Avatar } from '@mui/material'
import { LocationOn, Circle } from '@mui/icons-material'
import './index.css'

function ShopCard({ shop }) {
    return (
        <div className="shop-card w-100 p-4 rounded-3">
            <Container fluid="md">
                <Row>
                    <Col md={2}>
                        <Avatar
                            alt="shop1"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 100, height: 100 }}
                        />
                    </Col>
                    <Col md={10}>
                        <Container fluid="md" className="ms-3">
                            <Row className="d-flex justify-content-between w-100 align-items-center">
                                <Col md={6} className="ps-0 pt-3">
                                    <h3>{shop?.name}</h3>
                                </Col>
                                <Col md={6}>
                                    {shop?.status ? (
                                        <div style={{ textAlign: 'end' }}>
                                            <Circle
                                                sx={{
                                                    fontSize: '15px',
                                                    color: '#31a24c',
                                                }}
                                            />
                                            <span
                                                className="fs-4 ms-2"
                                                style={{ color: '#31a24c' }}
                                            >
                                                Đang mở bán
                                            </span>
                                        </div>
                                    ) : (
                                        <div style={{ textAlign: 'end' }}>
                                            <Circle
                                                sx={{
                                                    fontSize: '15px',
                                                    color: 'gray',
                                                }}
                                            />
                                            <span
                                                className="fs-4 ms-2"
                                                style={{ color: 'gray' }}
                                            >
                                                Đã đóng cửa
                                            </span>
                                        </div>
                                    )}
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} className="ps-0">
                                    <div className="d-flex align-items-start">
                                        <LocationOn
                                            sx={{
                                                fontSize: '24px',
                                                color: 'red',
                                            }}
                                        />
                                        <p className="fs-4 ms-1">
                                            {shop?.address}
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default memo(ShopCard)
