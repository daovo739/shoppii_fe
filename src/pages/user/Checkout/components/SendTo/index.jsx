import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ChangeAddressModal from '../ChangeAddressModal'
import { LocationOn } from '@mui/icons-material'

function SendTo({
    addresses,
    selectedAddress,
    setSelectedAddress,
    getAddresses,
}) {
    const getSelectedAddress = id => {
        setSelectedAddress(addresses.find(item => item.addressId === +id))
    }

    useEffect(() => {
        setSelectedAddress(addresses.find(address => address.isDefault))
    }, [addresses])

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
                        <h3 style={{ color: 'gray', paddingTop: '0.5rem' }}>
                            <LocationOn
                                sx={{
                                    fontSize: '24px',
                                    color: 'var(--main-red)',
                                    marginRight: '5px',
                                }}
                            />
                            Giao tới
                        </h3>
                        <ChangeAddressModal
                            onClick={getSelectedAddress}
                            addresses={addresses}
                            getAddresses={getAddresses}
                        />
                    </Col>
                </Row>
                <Row>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                        <span className="me-2 text-capitalize">
                            {selectedAddress?.receiverName}
                        </span>
                        <span
                            className="fs-2 fw-light"
                            style={{ color: 'gray' }}
                        >
                            |
                        </span>
                        <span className="ms-2">
                            {selectedAddress?.receiverPhone}
                        </span>
                    </div>
                    <div
                        style={{
                            fontSize: '1.3rem',
                        }}
                    >
                        <p style={{ marginBottom: 0 }}>
                            Tỉnh / Thành Phố:
                            <strong>{selectedAddress?.province}</strong>
                            <br />
                            Quận: <strong>{selectedAddress?.district}</strong>
                            <br />
                            Phường: <strong>{selectedAddress?.ward}</strong>
                        </p>
                    </div>
                    <div
                        style={{ color: 'gray', fontSize: '1.4rem' }}
                        className="text-capitalize"
                    >
                        {selectedAddress?.receiverAddress}
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default SendTo
