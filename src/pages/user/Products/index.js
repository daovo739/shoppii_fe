import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FilterSidebar from '../../../components/FilterSidebar'
import BoxContent from '../../../components/BoxContent'
import { useLocation } from 'react-router-dom'
import { useHome } from '../../../hooks/useHome'

function Products() {
    const { state } = useLocation()
    const { categories, locations } = useHome()
    console.log(categories, locations)
    const [products, setProducts] = useState(state)

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
                        <FilterSidebar filters={{ categories, locations }} />
                    </Col>
                    <Col md={9}>
                        <BoxContent content="view products" />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Products
