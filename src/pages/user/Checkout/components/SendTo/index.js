import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ChangeAddressModal from '../ChangeAddressModal'
import { LocationOn } from '@mui/icons-material'

export const addressList = [
    {
        id: '1',
        name: 'Ton That Khiem',
        phone: '0459877589',
        address: '1x/45x đường XX, phường XX, Quận XX, Thành phố XX',
        isDefault: true,
    },
    {
        id: '2',
        name: 'Vo Van Dao',
        phone: '0459877589',
        address: '1x/45x đường XX, phường XX, Quận XX, Thành phố XX',
        isDefault: false,
    },
]

function SendTo() {
    const [selectedAddress, setSelectedAddress] = useState(addressList[0])
    const [total, setTotal] = useState(0)
    
    const getSelectedAddress = (id) => {
        setSelectedAddress(addressList.filter(item => item.id === id)[0])
    }

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
                            <LocationOn sx={{fontSize: '24px', color: 'var(--main-red)', marginRight:'5px'}}/>
                            Giao tới
                        </h3>
                        <ChangeAddressModal onClick={getSelectedAddress}/>
                    </Col>
                </Row>
                <Row>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                        <span className="me-2">{selectedAddress.name}</span>
                        <span
                            className="fs-2 fw-light"
                            style={{ color: 'gray' }}
                        >
                            |
                        </span>
                        <span className="ms-2">{selectedAddress.phone}</span>
                    </div>
                </Row>
                <Row>
                    <span style={{ color: 'gray', fontSize: '1.4rem' }}>
                        {selectedAddress.address}
                    </span>
                </Row>
            </Container>
        </div>
    )
}

export default SendTo
