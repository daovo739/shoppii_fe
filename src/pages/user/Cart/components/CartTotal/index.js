import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'
import { Checkbox, Button } from '@mui/material'
import { DeleteSweepOutlined } from '@mui/icons-material'
function CartTotal() {
    return (
        <div
            className="cart-total d-flex align-items-center justify-content-between"
            style={{
                bottom: '0',
                position: 'sticky',
                height: '8rem',
                backgroundColor: 'var(--white)',
                boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                zIndex: '5',
            }}
        >
            <Container fluid="md">
                <Row>
                    <Col md={12} className="d-flex justify-content-between">
                        <div className="cart-total-left d-flex align-items-center">
                            <Checkbox
                                sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 28 },
                                    marginRight: '7px',
                                }}
                            />
                            <h3 className="pt-2">Chọn tất cả (50)</h3>
                            <DeleteSweepOutlined
                                style={{ marginLeft: '5rem' }}
                                sx={{ fontSize: '25px', color: 'var(--main-red)' }}
                            />
                            <h3
                                className="pt-2"
                                style={{ color: 'var(--main-red)', marginLeft: '1rem' }}
                            >
                                Xóa
                            </h3>
                        </div>
                        <div className="cart-total-right d-flex align-items-center">
                            <h3 style={{ marginRight: '1.5rem' }}>
                                Tổng thanh toán :{' '}
                            </h3>
                            <h1
                                style={{
                                    color: 'var(--main-red)',
                                    marginRight: '2rem',
                                }}
                            >
                                500.000đ
                            </h1>
                            <Button
                                className="checkout-btn"
                                sx={{
                                    backgroundColor: 'var(--main-red)',
                                    color: 'white',
                                    fontSize: '1.5rem',
                                    width: '25rem',
                                    height: '4rem'
                                }}
                            >
                                Thanh toán
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CartTotal
