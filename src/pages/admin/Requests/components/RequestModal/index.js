import React from 'react'
import { Button, Box, Typography, Modal } from '@mui/material'
import { style } from '../../../../../components/ModalStyle'
import { Container, Row, Col } from 'react-bootstrap'

function RequestModal({ isPending }) {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
            <Button onClick={handleOpen} sx={{ fontSize: '1.3rem' }}>
                Chi tiết
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h4"
                        component="h2"
                        sx={{ mb: 4 }}
                    >
                        Yêu cầu từ ID
                    </Typography>
                    <Typography
                        component={'span'}
                        id="modal-modal-description"
                        sx={{ mt: 2 }}
                    >
                        <Container fluid="md">
                            <Row>
                                <Col
                                    md={3}
                                    style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    <p>Tên cửa hàng</p>
                                </Col>
                                <Col md={9} style={{ fontSize: '1.5rem' }}>
                                    <p>Tên cửa hàng muốn đăng ký</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                    md={3}
                                    style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    <p>Địa chỉ</p>
                                </Col>
                                <Col md={9} style={{ fontSize: '1.5rem' }}>
                                    <p>Địa chỉ của cửa hàng muốn đăng ký</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                    md={3}
                                    style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    <p>Mô tả</p>
                                </Col>
                                <Col md={9} style={{ fontSize: '1.5rem' }}>
                                    <p>Mô tả về cửa hàng</p>
                                </Col>
                            </Row>
                            {isPending ? (
                                <Row className="d-flex justify-content-end">
                                    <Button
                                        sx={{
                                            width: '10rem',
                                            fontSize: '1.2rem',
                                            fontWeight: 'bold',
                                            color: 'green',
                                        }}
                                    >
                                        Chấp nhận
                                    </Button>
                                    <Button
                                        sx={{
                                            width: '10rem',
                                            fontSize: '1.2rem',
                                            fontWeight: 'bold',
                                            color: 'var(--main-red)',
                                        }}
                                    >
                                        Hủy
                                    </Button>
                                </Row>
                            ) : (
                                <></>
                            )}
                        </Container>
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default RequestModal
