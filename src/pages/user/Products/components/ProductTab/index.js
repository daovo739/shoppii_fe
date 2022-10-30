/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../ProductCard'
import { Pagination, Stack } from '@mui/material'
import useStore from '../../../../../store/hooks'
import { Link } from 'react-router-dom'

function ProductTab({ totalPage, setFilters }) {
    const [page, setPage] = useState(1)
    const { productsData } = useStore()

    useEffect(() => {
        setFilters(prev => {
            return {
                ...prev,
                page,
            }
        })
    }, [page])

    return (
        <Container fluid="md">
            <Row>
                <Col md={12}></Col>
            </Row>
            <Row>
                {productsData?.products?.map(product => (
                    <Col sm={6} md={3} key={product.productId} className="pb-4">
                        <Link to={`/product/${product.productId}`}>
                            <ProductCard product={product} />
                        </Link>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col md={12} className="d-flex justify-content-center py-5">
                    <Stack spacing={2} component="div">
                        <Pagination
                            size="large"
                            page={page}
                            count={totalPage}
                            color="primary"
                            onChange={(e, page) => {
                                setPage(page)
                            }}
                        />
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductTab
