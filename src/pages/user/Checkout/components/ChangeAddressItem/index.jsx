import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button, Chip, Radio, FormControlLabel } from '@mui/material'
import { EditLocationTwoTone } from '@mui/icons-material'
import { AddressModalEdit } from '../../../Profile/components/AddressModal'

function ChangeAddressItem({
    isDefault,
    name,
    phone,
    id,
    address,
    province,
    district,
    ward,
    getAddresses,
}) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div className="change-address-item pb-0">
            <Container fluid="md">
                <Row>
                    <Col md={1} className="pt-2 ps-5">
                        <FormControlLabel value={id} control={<Radio />} />
                    </Col>
                    <Col md={11}>
                        <Container fluid="md">
                            <Row>
                                <Col
                                    md={12}
                                    className="d-flex justify-content-between"
                                >
                                    <div className="d-flex align-items-center">
                                        <h3 className="mt-3">
                                            <strong>{name}</strong>
                                        </h3>
                                        <span
                                            className="mx-3 fs-1 p-0"
                                            style={{
                                                color: 'gray',
                                                fontWeight: 'lighter',
                                            }}
                                        >
                                            |
                                        </span>
                                        <h4
                                            className="mt-3"
                                            style={{ color: 'gray' }}
                                        >
                                            {phone}
                                        </h4>
                                    </div>
                                    <div>
                                        <Button
                                            sx={{
                                                fontSize: '1.5rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                color: 'var(--main-red)',
                                            }}
                                            onClick={handleOpen}
                                        >
                                            <EditLocationTwoTone
                                                sx={{
                                                    fontSize: '1.9rem',
                                                    marginRight: '0.5rem',
                                                    color: 'var(--main-red)',
                                                }}
                                            />
                                            Sửa
                                        </Button>
                                        <AddressModalEdit
                                            open={open}
                                            handleClose={handleClose}
                                            addressAction={{
                                                isDefault,
                                                receiverName: name,
                                                receiverPhone: phone,
                                                addressId: id,
                                                receiverAddress: address,
                                                province,
                                                district,
                                                ward,
                                            }}
                                            getAddresses={getAddresses}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <p
                                        style={{
                                            marginBottom: 0,
                                            fontSize: '1.5rem',
                                        }}
                                    >
                                        Tỉnh / Thành Phố :
                                        <strong> {province}</strong>
                                        <br />
                                        Quận : <strong>{district}, </strong>
                                        {/* <br /> */}
                                        Phường : <strong>{ward}</strong>
                                    </p>
                                    <h4 style={{ color: 'gray' }}>{address}</h4>
                                </Col>
                            </Row>
                            {isDefault ? (
                                <Row>
                                    <Chip
                                        label={
                                            <span
                                                style={{
                                                    color: 'var(--main-red)',
                                                }}
                                            >
                                                Mặc định
                                            </span>
                                        }
                                        size="small"
                                        // variant="outlined"
                                        color="success"
                                        sx={{
                                            width: '7rem',
                                            height: '1.8rem',
                                            border: '1px solid var(--main-red) ',
                                            marginTop: '0.5rem',
                                            color: '#fff !important',
                                        }}
                                        style={{ backgroundColor: 'white' }}
                                    />
                                </Row>
                            ) : (
                                <></>
                            )}
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ChangeAddressItem
