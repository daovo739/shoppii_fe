import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button, Chip, Radio, FormControlLabel } from '@mui/material'
import { EditLocationAlt } from '@mui/icons-material'

function ChangeAddressItem({
    isDefault,
    name,
    phone,
    id,
    address,
    province,
    district,
    ward,
}) {
    return (
        <div className="change-address-item">
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
                                        <h3 className="mt-3">{name}</h3>
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
                                        <Button sx={{ fontSize: '1.2rem' }}>
                                            <EditLocationAlt
                                                sx={{
                                                    fontSize: '1.5rem',
                                                    marginRight: '0.5rem',
                                                }}
                                            />
                                            Sửa
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <p style={{ marginBottom: 0 }}>
                                        Tỉnh / Thành Phố:
                                        <strong>{province}</strong>
                                        <br />
                                        Quận: <strong>{district}</strong>
                                        <br />
                                        Phường: <strong>{ward}</strong>
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
                                            // border: '1px solid #ff424e ',
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