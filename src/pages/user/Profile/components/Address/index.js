import { useState, memo } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './index.css'
import { DeleteOutline, BorderColorOutlined } from '@mui/icons-material'

function AddressItem({ address, handleOpen, handleOpenModalEdit }) {
    return (
        <div className="address w-100">
            <Container fluid="md" sx={{ width: '100%', height: 'auto' }}>
                <Row>
                    <Col md={10}>
                        <div>
                            <h3
                                style={{
                                    textTransform: 'capitalize',
                                }}
                            >
                                {address.receiverName}
                            </h3>
                        </div>
                        <p className="fs-4 mb-0">
                            <span className="fs-4" style={{ color: 'gray' }}>
                                Địa chỉ:{' '}
                            </span>
                            {address.receiverAddress}
                        </p>
                        <p className="mb-0">
                            Tỉnh/Thành Phố: <strong>{address.province}</strong>,
                            Quận: <strong>{address.district}</strong>, Phường:{' '}
                            <strong>{address.ward}</strong>
                        </p>
                        <p>
                            <span className="fs-4" style={{ color: 'gray' }}>
                                Số điện thoại:{' '}
                            </span>
                            {address.receiverPhone}
                        </p>
                    </Col>
                    <Col md={2}>
                        <div>
                            <p
                                className="d-flex justify-content-end align-content-center"
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleOpen(address.addressId)}
                            >
                                <DeleteOutline
                                    className="mt-1"
                                    sx={{
                                        fontSize: '18px',
                                        color: 'var(--main-red)',
                                    }}
                                />
                                <span
                                    className="fs-5 mt-2"
                                    style={{ color: 'red' }}
                                >
                                    Xóa
                                </span>
                            </p>
                            <p
                                className="d-flex justify-content-end align-content-center"
                                style={{ cursor: 'pointer' }}
                                onClick={() =>
                                    handleOpenModalEdit(address.addressId)
                                } // <--- this is the problem
                            >
                                <BorderColorOutlined
                                    className="mt-1"
                                    sx={{
                                        fontSize: '18px',
                                        color: 'var(--main-green)',
                                    }}
                                />
                                <span
                                    className="fs-5 mt-2"
                                    style={{ color: 'var(--main-green)' }}
                                >
                                    Chỉnh sửa
                                </span>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default memo(AddressItem)
