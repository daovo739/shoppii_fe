import * as React from 'react'
import { Button, TextField, TextareaAutosize } from '@mui/material'
import { Container, Row, Col } from 'react-bootstrap'
import { AddBusiness } from '@mui/icons-material'

function RegisterShopForm() {
    return (
        <>
            <Container fluid="md">
                <Row>
                    <Col md={{ span: 11, offset: 1 }}>
                        <Button
                            variant="contained"
                            sx={{ width: '25rem', fontSize: '1.3rem' }}
                        >
                            Quay trở lại Shoppii
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col
                        md={{ span: 11, offset: 1 }}
                        className="d-flex align-items-center"
                    >
                        <AddBusiness sx={{ fontSize: '35px' }} />
                        <span
                            style={{ fontSize: '3rem', marginLeft: '1.5rem' }}
                        >
                            Đăng ký để bán hàng ngay
                        </span>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={{ span: 2, offset: 1 }}>
                        <div style={{ fontSize: '2rem' }}>
                            Tên cửa hàng <span className="text-danger">*</span>
                        </div>
                    </Col>
                    <Col md={7}>
                        <TextField
                            fullWidth
                            size="small"
                            id="outlined-basic"
                            label="Tên cửa hàng"
                            variant="outlined"
                            InputProps={{ label: 'Tên cửa hàng ####' }}
                        />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={{ span: 2, offset: 1 }}>
                        <div style={{ fontSize: '2rem' }}>Địa chỉ cửa hàng</div>
                    </Col>
                    <Col md={7}>
                        <TextField
                            fullWidth
                            size="small"
                            id="outlined-basic"
                            label="Địa chỉ cửa hàng"
                            variant="outlined"
                            InputProps={{ label: 'Địa chỉ cửa hàng #####' }}
                        />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={{ span: 2, offset: 1 }}>
                        <div style={{ fontSize: '2rem' }}>Mô tả</div>
                    </Col>
                    <Col md={7}>
                        <TextareaAutosize
                            aria-label="Mô tả"
                            minRows={7}
                            placeholder="Mô tả"
                            style={{ width: '100%', padding: '1rem' }}
                        />
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center align-items-center mt-5">
                    <Button
                        variant="contained"
                        sx={{ fontSize: '1.5rem', width: '10rem' }}
                    >
                        Đăng ký
                    </Button>
                </Row>
            </Container>
        </>
    )
}

export default RegisterShopForm
