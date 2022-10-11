import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Pagination, Stack } from '@mui/material'
import ShopCard from '../ShopCard'

function ShopTab() {
    return (
        <Container fluid="md">
            {[0, 1, 2, 3, 4].map(item => (
                <Row key={item} className="pb-5">
                    <ShopCard />
                </Row>
            ))}
            <Row>
                <Col md={12} className="d-flex justify-content-center py-5">
                    <Stack spacing={2}>
                        <Pagination size="large" count={10} color="primary" />
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default ShopTab
