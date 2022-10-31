import { memo } from 'react'
import { Row, Col, Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { get } from '../../../../utils/httprequest'
import useStore from '../../../../store/hooks'
function ListCategories({ categories }) {
    const navigate = useNavigate()
    const { setProductsData } = useStore()
    const getProducts = async id => {
        const q = queryString.stringify({ categoryId: id })
        const res = await get('/products', q)
        const data = await res.json()
        setProductsData(data)
        navigate(`/products`, {
            state: { categoryId: [id] },
        })
    }

    return (
        <Row
            style={{
                // width: '100%',
                height: '100%',
                margin: 0,
                overflow: 'scroll',
                overflowX: 'hidden',
                width: '280px',
                maxHeight: '250px',
            }}
        >
            {categories?.map(ele => {
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
