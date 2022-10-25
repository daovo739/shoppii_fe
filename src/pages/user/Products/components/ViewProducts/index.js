import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import BasicTabs from '../../../../../components/Tab'
import './index.css'

function ViewProduct() {
    return (
        <div className="w-100">
            <Container fluid="md">
                <Row>
                    <Col md={12}>
                        <BasicTabs />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ViewProduct
