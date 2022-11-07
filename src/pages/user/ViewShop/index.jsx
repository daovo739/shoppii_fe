import { useEffect, useState } from 'react'
import ShopHeader from './components/ShopHeader'
import { useParams, Link } from 'react-router-dom'
import { get } from '../../.././utils/./httprequest'
import queryString from 'query-string'
import { Container, Row, Col } from 'react-bootstrap'
import { Divider } from '@mui/material'
import ProductCard from '../Products/components/ProductCard'
import { useAuth } from '../../../hooks/useAuth'

function ViewShop() {
    const { id } = useParams()
    const { user } = useAuth()
    const [products, setProducts] = useState([])
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        const q = queryString.stringify({ shopId: id })
        Promise.all([
            get(`/shop/products`, q).then(res => res.json()),
            get(`/shop/profile`, q).then(res => res.json()),
        ])
            .then(values => {
                setProducts(values[0])
                setProfile(values[1])
            })
            .then(() => {
                setLoading(true)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        loading && (
            <div className="view-shop">
                <ShopHeader profile={profile} avatar={user.avatar} />
                <div
                    className="shop-content"
                    style={{
                        backgroundColor: 'var(--white)',
                        marginTop: '3rem',
                        paddingTop: '3rem',
                        paddingBottom: '3rem',
                        paddingLeft: '6rem',
                        paddingRight: '6rem',
                        boxShadow: 'var(--box-shadow-main)',
                    }}
                >
                    {/* <BasicTabs /> */}
                    <Container fluid="md">
                        <Row>
                            <Col md={12}>
                                <h2>Sản phẩm</h2>
                            </Col>
                        </Row>
                        <Divider />
                        <Row className="my-5">
                            {products?.map((item, index) => (
                                <Col md={3} key={index}>
                                    <Link to={`/product/${item.productId}`}>
                                        <ProductCard product={item} />
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </div>
        )
    )
}

export default ViewShop
