/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useMemo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import FilterSidebar from '../../../components/FilterSidebar'
import { useHome } from '../../../hooks/useHome'
import useStore from '../../../store/hooks'
import { get } from '../../.././utils/httprequest'
import ViewProduct from './components/ViewProducts'

function Products() {
    const { categories, locations } = useHome()
    const { productsData, setProductsData } = useStore()
    const { state } = useLocation()
    const [loading, setLoading] = useState(true)
    const [filters, setFilters] = useState({
        categoryId: state.categoryId || [],
        location: [],
        keyword: state.keyword || '',
        startPrice: '',
        endPrice: '',
        // Change limit to change page size
        limit: 6,
        page: 1,
    })

    const getProducts = async () => {
        const q = queryString.stringify(filters, {
            skipEmptyString: true,
        })
        const res = await get(`products`, q)
        const data = await res.json()
        setLoading(false)
        setProductsData(data)
    }

    useEffect(() => {
        setLoading(true)
        setFilters({
            ...filters,
            categoryId: state.categoryId || [],
            keyword: state.keyword || '',
        })
    }, [state])

    useEffect(() => {
        console.log('filters', filters)
        setLoading(true)
        getProducts()
    }, [filters])

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
                        <FilterSidebar
                            filtersMap={{ categories, locations }}
                            setFilters={setFilters}
                            filters={filters}
                            getProducts={getProducts}
                        />
                    </Col>
                    <Col md={9}>
                        <div
                            style={{
                                backgroundColor: 'white',
                                padding: '2rem',
                                borderRadius: '6px',
                                boxShadow: 'var(--box-shadow-main)',
                            }}
                        >
                            {!loading ? (
                                productsData?.products?.length > 0 ? (
                                    <ViewProduct
                                        totalPage={productsData.totalPage}
                                        setFilters={setFilters}
                                        filters={filters}
                                    />
                                ) : (
                                    <div className="d-flex justify-content-center mt-5">
                                        <h1>No Products Found</h1>
                                    </div>
                                )
                            ) : (
                                <CircularProgress
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                />
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Products
