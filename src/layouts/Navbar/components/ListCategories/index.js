import { memo } from 'react'
import { Row, Col, Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { get } from '../../../../utils/httprequest'

function ListCategories({ categories }) {
    const navigate = useNavigate()

    const getProducts = async id => {
        const q = queryString.stringify({ categoryId: id })
        const res = await get('/products', q)
        const data = await res.json()
        navigate('/products', { state: { products: data } })
    }

    return (
        <Row
            style={{
                width: '100%',
                height: '100%',
                margin: 0,
                overflow: 'scroll',
                overflowX: 'hidden',
                width: '280px',
                maxHeight: '250px',
            }}
        >
            {categories.map(ele => {
                const { category_id, category_name } = ele
                return (
                    <div key={category_id}>
                        <Col md={6}>
                            <Dropdown.Item
                                onClick={() => getProducts(category_id)}
                            >
                                {category_name}
                            </Dropdown.Item>
                        </Col>
                    </div>
                )
            })}
        </Row>
    )
}

export default memo(ListCategories)
