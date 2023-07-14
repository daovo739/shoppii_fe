import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Avatar } from '@mui/material'
import {
    Circle,
    Check,
    EventAvailable,
    ViewInAr,
    Storefront,
    LocationOn,
} from '@mui/icons-material'
import blueBackground from '../../../../../assets/images/bluebg.png'
import tempAvatar from '../../../../../assets/images/bd2e86e454da37f2e6c9a128c8e9a2b8.png'
import './index.css'
import { faker } from '@faker-js/faker'

function ShopHeader({ profile, avatar }) {
    return (
        <div
            className="shop-header"
            style={{
                backgroundColor: 'var(--white)',
                padding: '2rem',
                boxShadow: 'var(--box-shadow-main)',
            }}
        >
            <Container fluid="md">
                <Row>
                    <Col
                        md={5}
                        className="d-flex shop-header-left position-relative"
                    >
                        <img
                            src={blueBackground}
                            alt="blue background"
                            style={{
                                width: '100%',
                                height: '15rem',
                                opacity: '0.8',
                                borderRadius: '10px',
                            }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                color: 'var(--white)',
                                top: '15%',
                                right: '-5%',
                                display: 'flex',
                                width: '100%',
                            }}
                        >
                            <div className="d-flex">
                                <Avatar
                                    alt="shop image"
                                    src={faker.image.avatarLegacy()}
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        border: '2px solid var(--white)',
                                    }}
                                />
                                <div
                                    style={{
                                        fontSize: '1.1rem',
                                        position: 'absolute',
                                        bottom: '-4px',
                                        left: '3%',
                                        backgroundColor: 'var(--main-blue)',
                                        paddingRight: '1rem',
                                        paddingLeft: '1rem',
                                        borderRadius: '5px',
                                    }}
                                >
                                    <Check
                                        sx={{
                                            fontSize: '10px',
                                            marginRight: '0.3rem',
                                        }}
                                    />
                                    Offical
                                </div>
                            </div>

                            <div
                                style={{
                                    marginLeft: '1.5rem',
                                    paddingTop: '1rem',
                                    width: '80%',
                                }}
                            >
                                <h2>{profile.name}</h2>
                                <h4 style={{ color: 'green' }}>
                                    <Circle
                                        sx={{
                                            marginRight: '0.5rem',
                                            fontSize: '1rem',
                                        }}
                                    />
                                    Đang mở cửa
                                </h4>
                                <div className="d-flex">
                                    <LocationOn />
                                    <p style={{ fontSize: '1.2rem' }}>
                                        {profile?.address}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={7}>
                        <Container fluid="md" style={{ fontSize: '1.4rem' }}>
                            <Row
                                style={{
                                    marginLeft: '2rem',
                                    marginTop: '1.5rem',
                                }}
                            >
                                <Col md={4} style={{ color: 'gray' }}>
                                    <EventAvailable
                                        sx={{
                                            fontSize: '20px',
                                            marginRight: '0.7rem',
                                        }}
                                    />
                                    Thành viên từ năm
                                </Col>
                                <Col md={8}>2022</Col>
                            </Row>
                            <Row
                                style={{
                                    marginLeft: '2rem',
                                    marginTop: '1.5rem',
                                }}
                            >
                                <Col md={4} style={{ color: 'gray' }}>
                                    <ViewInAr
                                        sx={{
                                            fontSize: '20px',
                                            marginRight: '0.7rem',
                                        }}
                                    />
                                    Sản phẩm
                                </Col>
                                <Col md={8}>100</Col>
                            </Row>
                            <Row
                                style={{
                                    marginLeft: '2rem',
                                    marginTop: '1.5rem',
                                }}
                            >
                                <Col md={4} style={{ color: 'gray' }}>
                                    <Storefront
                                        sx={{
                                            fontSize: '20px',
                                            marginRight: '0.7rem',
                                        }}
                                    />
                                    Mô tả cửa hàng
                                </Col>
                                <Col md={8}>
                                    <p>{profile.description}</p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ShopHeader
