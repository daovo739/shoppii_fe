import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import BasicTabs from '../../../../../components/Tab'
import './index.css'

function ViewProduct({ totalPage, setFilters, filters }) {
    return (
        <div className="w-100">
            <Container fluid="md">
                <Row>
                    <Col md={12}>
                        <BasicTabs
                            totalPage={totalPage}
                            setFilters={setFilters}
                            filters={filters}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ViewProduct
