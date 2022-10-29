import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './index.css'
import { DeleteOutline, BorderColorOutlined } from '@mui/icons-material'
import { Button, Box, Typography, Modal } from '@mui/material'
import { style } from '../../../../../components/ModalStyle'
import AddressModal from '../AddressModal'
import UpdateAddressModal from './components/UpdateAddressModal'

function AddressItem({ name, address, phone }) {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const addressArray = address.split(', ')

    return (
        <div className="address w-100">
            <Container fluid="md" sx={{ width: '100%', height: 'auto' }}>
                <Row>
                    <Col md={10}>
                        <div>
                            <h3>{name}</h3>
                        </div>
                        <p className="fs-4">
                            <span className="fs-4" style={{ color: 'gray' }}>
                                Địa chỉ:{' '}
                            </span>
                            {address}
                        </p>
                        <p>
                            <span className="fs-4" style={{ color: 'gray' }}>
                                Số điện thoại:{' '}
                            </span>
                            {phone}
                        </p>
                    </Col>
                    <Col md={2}>
                        <div>
                            <p
                                className="d-flex justify-content-end align-content-center"
                                style={{ cursor: 'pointer' }}
                                onClick={handleOpen}
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
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={{ ...style, width: '400px' }}>
                                    <Typography
                                        id="modal-modal-title"
                                        variant="h4"
                                        component="h2"
                                        style={{
                                            textAlign: 'center',
                                            marginBottom: '2rem',
                                        }}
                                    >
                                        Xóa địa chỉ này
                                    </Typography>
                                    <Typography
                                        id="modal-modal-description"
                                        sx={{ mt: 2 }}
                                        component="div"
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Button
                                                sx={{
                                                    marginRight: '8rem',
                                                    fontSize: '1.5rem',
                                                    fontWeight: 'bold',
                                                    color: 'var(--main-green)',
                                                }}
                                                onClick={handleClose}
                                            >
                                                Hủy
                                            </Button>
                                            <Button
                                                sx={{
                                                    fontSize: '1.5rem',
                                                    fontWeight: 'bold',
                                                    color: 'var(--main-red)',
                                                }}
                                                onClick={handleClose}
                                            >
                                                Có
                                            </Button>
                                        </div>
                                    </Typography>
                                </Box>
                            </Modal>
                        </div>
                        <div>
                            
                            <AddressModal
                                test={true}
                                // values={{
                                //     name: name,
                                //     phone: phone,
                                //     city: addressArray[3],
                                //     district: addressArray[2],
                                //     ward: addressArray[1],
                                //     address: addressArray[0],
                                // }}
                            />
                        </div>
                        {/* <UpdateAddressModal
                            values={{
                                name: name,
                                phone: phone,
                                city: addressArray[3],
                                district: addressArray[2],
                                ward: addressArray[1],
                                address: addressArray[0],
                            }}
                        /> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddressItem
