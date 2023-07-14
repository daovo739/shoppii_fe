/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Pagination, Stack } from '@mui/material'
import ShopCard from '../ShopCard'
import { get } from '../../../../../utils/./httprequest'
import queryString from 'query-string'
import { Link } from 'react-router-dom'
import { faker } from '@faker-js/faker'

function ShopTab({ filters, setFilters }) {
    const [shopsData, setShopsData] = useState({})
    const [page, setPage] = useState(1)

    const handleChangePage = (event, value) => {
        setPage(value)
        setFilters(prev => {
            return {
                ...prev,
                page: value,
            }
        })
    }

    useEffect(() => {
        let filtersShop = {
            keyword: filters.keyword || '',
            location: filters.location || '',
            limit: filters.limit || 1,
            page: filters.page || 1,
        }
        // console.log('filtersShop', filtersShop)
        getData(filtersShop)
    }, [filters])

    const getData = async filtersShop => {
        // const q = queryString.stringify(filtersShop, { skipEmptyString: true })
        // const res = await get(`user/getShops`, q)
        // const data = await res.json()
        const shopFaker = []
        for (let i = 0; i < 20; i++) {
            shopFaker.push({
                shopId: faker.number.int(),
                name: faker.commerce.department(),
                status: true,
                address: faker.location.city(),
            })
        }
        setShopsData({ shops: shopFaker, totalPage: shopFaker.length })
    }

    return (
        <Container fluid="md">
            {shopsData?.shops?.map(shop => (
                <Link key={shop.shopId} to={`/viewshop/${shop.shopId}`}>
                    <Row className="pb-5">
                        <ShopCard shop={shop} />
                    </Row>
                </Link>
            ))}
            <Row>
                <Col md={12} className="d-flex justify-content-center py-5">
                    <Stack spacing={2}>
                        <Pagination
                            size="large"
                            page={page}
                            count={shopsData.totalPage}
                            color="primary"
                            onChange={handleChangePage}
                        />
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default ShopTab
