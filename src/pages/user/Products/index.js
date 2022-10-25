import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FilterSidebar from '../../../components/FilterSidebar'
import BoxContent from '../../../components/BoxContent'
import { useLocation } from 'react-router-dom'
import { useHome } from '../../../hooks/useHome'
import useStore from '../../../store/hooks'
import queryString from 'query-string'
import { get } from '../../.././utils/httprequest'

function Products() {
    const { categories, locations } = useHome()
    const { products, setProducts } = useStore()
    const { state } = useLocation()
    const [filters, setFilters] = useState({
        categoryId: [state.categoryId] || [],
        location: [],
        keyword: state.keyword || '',
        startPrice: '',
        endPrice: '',
    })

    const getProducts = async () => {
        const q = queryString.stringify(filters, {
            skipEmptyString: true,
        })
        const res = await get(`products`, q)
        const data = await res.json()
        console.log('get')
        setProducts(data)
    }

    useEffect(() => {
        setFilters({
            ...filters,
            categoryId: state.categoryId || '',
            keyword: state.keyword || '',
        })
    }, [state])

    useEffect(() => {
        console.log(filters)
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
                        <BoxContent content="view products" />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Products
