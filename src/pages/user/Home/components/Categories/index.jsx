import { memo } from 'react'
import Category from '../Category'
import { Container, Row, Col } from 'react-bootstrap'
import {  Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { get } from '../../../../../utils/httprequest'
import useStore from '../../../../../store/hooks'
function Categories({ categories }) {
     const navigate = useNavigate()
    const { setProductsData } = useStore()

    const getProducts = async id => {
        const q = queryString.stringify({ categoryId: id })
        const res = await get('/products', q)
        const data = await res.json()
        console.log(data)
        setProductsData(data)
        navigate(`/products`, {
            state: { categoryId: [id] },
        })
    }
    return (
        <div className="categories">
            <Container fluid="md">
                <Row>
                    <Col
                        md={12}
                        className="p-4 d-flex justify-content-center align-items-center"
                    >
                        <h2
                            style={{
                                borderBottom: '0.3rem solid var(--main-blue)',
                                paddingBottom: '0.3rem',
                            }}
                        >
                            DANH MỤC
                        </h2>
                    </Col>
                </Row>
                <Row>
                    {categories?.map(category => {
                        const { category_id, category_name, categoryImg } =
                            category
                        return (
                            <Category
                                key={category_id}
                                imgLink={categoryImg}
                                name={category_name}
                                onClick={() => getProducts(category_id)}
                            />
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default memo(Categories)
