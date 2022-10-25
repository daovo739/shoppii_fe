import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../ProductCard'
import { Pagination, Stack } from '@mui/material'

function ProductTab() {
    return (
        <Container fluid="md">
            <Row>
                <Col md={12}></Col>
            </Row>
            <Row>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
                    <Col md={3} key={item} className="pb-4">
                        <ProductCard />
                    </Col>
                ))}
            </Row>
            <Row>
                <Col md={12} className="d-flex justify-content-center py-5">
                    <Stack spacing={2} component="div">
                        <Pagination size="large" count={10} color="primary" />
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductTab
