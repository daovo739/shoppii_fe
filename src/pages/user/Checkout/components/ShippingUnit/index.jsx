import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './index.css'
import {Check} from '@mui/icons-material';


function ShippingUnit({ index, name, price, style, onClick }) {
    return (
        <div
            onClick={() => onClick(index)}
            className="shipping-unit"
            style={style}
        >
            <Container fluid="md">
                <Row className="fs-4">
                    <Col md={3} className="fw-bold">
                        {name}
                    </Col>
                    <Col md={8} style={{ color: 'var(--main-red)' }}>
                        {price}
                    </Col>
                    <Col md={1}>
                      {style.backgroundColor ? <Check sx={{fontSize: '25px', color: 'var(--main-red)'}}/> : <></>}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ShippingUnit
