/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, memo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../ProductCard'
import {
    Pagination,
    Stack,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material'
import useStore from '../../../../../store/hooks'
import { Link } from 'react-router-dom'

function ProductTab({
    totalPage,
    setFilters,
    filters,
    getProducts,
    setLoading,
}) {
    const [sort, setSort] = useState(filters.sort)
    const { productsData, setProductsData } = useStore()
    const [page, setPage] = useState(filters.page)
    console.log('page', page)
    const handleChangePage = (event, value) => {
        setPage(value)
        setFilters(prev => {
            return {
                ...prev,
                page: value,
            }
        })
    }

    const handleSort = value => {
        console.log('sort', sort)
        setSort(value)
        setFilters(prev => {
            return {
                ...prev,
                sort: value,
            }
        })
    }

    return (
        <Container fluid="md">
            <Row>
                <Col md={12} className="d-flex justify-content-end">
                    <FormControl size="small" sx={{ width: '16rem' }}>
                        <InputLabel id="demo-simple-select-label">
                            Sắp xếp theo giá
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sort}
                            label="Sắp xếp theo giá aa"
                            onChange={e => handleSort(e.target.value)}
                        >
                            <MenuItem value={''}>Mặc định</MenuItem>
                            <MenuItem value={'asc'}>Giá tăng dần</MenuItem>
                            <MenuItem value={'desc'}>Giá giảm dần</MenuItem>
                        </Select>
                    </FormControl>
                </Col>
            </Row>
            <Row className="mt-5">
                {productsData?.products?.map(product => (
                    <Col sm={6} md={3} key={product.productId} className="pb-4">
                        {product?.isAvailable ? (
                            <Link to={`/product/${product.productId}`}>
                                <ProductCard product={product} />
                            </Link>
                        ) : (
                            <ProductCard product={product} />
                        )}
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
                            onChange={handleChangePage}
                        />
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductTab
