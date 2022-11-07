import React from 'react'
import { Box, Typography, Modal, Button } from '@mui/material'
import { style } from '../../../../../components/ModalStyle'
import { Container, Row, Col } from 'react-bootstrap'
import OrderProduct from '../OrderProduct'
import { useState } from 'react'
import { useEffect } from 'react'

function OrdersModal({ isPending, order, handleClose, open, getActionStatus, handleAccept }) {
    const {
        address,
        customerId,
        items,
        orderId,
        paymentMethod,
        shop,
        status,
        time,
    } = order
    const {
        addressId,
        district,
        province,
        receiverAddress,
        receiverName,
        receiverPhone,
        userId,
        ward,
    } = address
    const [orderTotal, setOrderTotal] = useState(0)

    useEffect(
        () =>
            setOrderTotal(
                items.reduce(
                    (total, item) => total + item.orderQuantity * item.price,
                    0,
                ),
            ),
        [],
    )

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...style, width: '60%' }}>
                    <Typography
                        id="modal-modal-title"
                        variant="h4"
                        component="h2"
                        sx={{ mb: 4 }}
                    >
                        <div>
                            <strong>Đơn hàng #{orderId}</strong>
                            <p
                                style={{
                                    fontSize: '1.3rem',
                                    color: 'gray',
                                    paddingLeft: '1.2rem',
                                }}
                            >
                                {time}
                            </p>
                        </div>
                    </Typography>
                    <Typography
                        component={'span'}
                        id="modal-modal-description"
                        sx={{ mt: 2 }}
                    >
                        <Container
                            fluid="md"
                            style={{ overflow: 'auto', height: '40rem' }}
                        >
                            <Row>
                                <Col md={12}>
                                    <div
                                        style={{
                                            backgroundColor:
                                                'var(--light-blue)',
                                            border: '2px dashed white',
                                            fontSize: '1.5rem',
                                        }}
                                        className="pt-3 ps-3"
                                    >
                                        <p>
                                            <strong>Người nhận</strong> :{' '}
                                            <span>{receiverName}</span>
                                        </p>
                                        <p>
                                            <strong>Số điện thoại</strong> :{' '}
                                            <span>{receiverPhone}</span>
                                        </p>
                                        <p>
                                            <strong>Địa chỉ</strong> :{' '}
                                            <span>
                                                {receiverAddress}, {ward},{' '}
                                                {district}, {province}
                                            </span>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row >
                                <Col md={12}>
                                    {items.map((item, index) => (
                                        <OrderProduct key={index} item={item} />
                                    ))}
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '1.2rem' }}>
                                <Col
                                    md={12}
                                    className="d-flex justify-content-end"
                                >
                                    <h4>
                                        Tổng đơn hàng :{' '}
                                        <span
                                            style={{
                                                fontSize: '2.5rem',
                                                color: 'var(--main-red)',
                                            }}
                                        >
                                            {orderTotal} ₫
                                        </span>
                                    </h4>
                                </Col>
                            </Row>
                            { isPending ? <Row>
                                <Col
                                    md={12}
                                    className="d-flex justify-content-end mt-5"
                                >
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: 'var(--main-red)',
                                            fontSize: '1.5rem',
                                            marginRight: '3rem',
                                        }}
                                        onClick={() => {
                                            getActionStatus({
                                                status: 'Rejected',
                                                orderId: orderId
                                            })
                                            // handleAccept()
                                            handleClose()
                                        }}
                                    >
                                        Hủy đơn
                                    </Button>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: 'var(--main-blue)',
                                            fontSize: '1.5rem',
                                        }}
                                        onClick={() => {
                                            getActionStatus({
                                                status: 'Accepted',
                                                orderId: orderId
                                            })
                                            // handleAccept()
                                            handleClose()
                                        }}
                                    >
                                        Xác nhận đơn
                                    </Button>
                                </Col>
                            </Row> : <></>}
                        </Container>
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default OrdersModal
