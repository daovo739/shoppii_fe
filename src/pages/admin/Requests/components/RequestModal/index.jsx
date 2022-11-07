import React from 'react'
import { Button, Box, Typography, Modal } from '@mui/material'
import { style } from '../../../../../components/ModalStyle'
import { Container, Row, Col } from 'react-bootstrap'

function RequestModal({ isPending, request, getStatus, userId }) {
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
                        Yêu cầu #{request.customer.userId}
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
                                    <p>{request.name}</p>
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
                                    <p>{request.address}</p>
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
                                    <p>{request.description}</p>
                                </Col>
                            </Row>
                            {isPending ? (
                                <Row className="d-flex justify-content-end">
                                    <Button
                                        variant="contained"
                                        sx={{
                                            width: '11rem',
                                            fontSize: '1.2rem',
                                            fontWeight: 'bold',
                                            backgroundColor:
                                                'var(--main-green)',
                                            mr: 2,
                                        }}
                                        onClick={() => {
                                            getStatus({
                                                status: 'Accepted',
                                                userId: userId
                                            })
                                            handleClose()
                                        }}
                                    >
                                        Chấp nhận
                                    </Button>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            width: '10rem',
                                            fontSize: '1.2rem',
                                            fontWeight: 'bold',
                                            backgroundColor: 'var(--main-red)',
                                        }}
                                        onClick={() => {
                                            getStatus({
                                                status: 'Rejected',
                                                userId: userId
                                            })
                                            handleClose()
                                        }}
                                    >
                                        Từ chối
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
