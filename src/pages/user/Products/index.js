import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import FilterSidebar from "../../../components/FilterSidebar"
import BoxContent from "../../../components/BoxContent"

function Products() {
    return (
        <main
            className="container d-flex justify-content-between h-auto"
            style={{
                margin: 0,
                backgroundColor: '#fafafa',
            }}
        >
            <Container fluid="">
                <Row>
                    <Col md={3}>
                        <FilterSidebar/>
                    </Col>
                    <Col md={9}>
                        <BoxContent content='view products'/>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Products
