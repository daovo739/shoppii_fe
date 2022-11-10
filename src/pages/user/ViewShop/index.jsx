import { useEffect, useState } from 'react'
import ShopHeader from './components/ShopHeader'
import { useParams, Link } from 'react-router-dom'
import { get } from '../../.././utils/./httprequest'
import queryString from 'query-string'
import { Container, Row, Col } from 'react-bootstrap'
import { Divider, CircularProgress } from '@mui/material'
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

    return loading ? (
        <div className="view-shop">
            <ShopHeader
                profile={profile}
                avatar={
                    'https://cdn.vietnambiz.vn/2019/10/3/color-silhouette-cartoon-facade-shop-store-vector-14711058-1570007843495391141359-1570076859193969194096-15700769046292030065819-1570076927728377843390.png'
                }
            />
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
                        {products?.map((product, index) => (
                            <Col
                                md={3}
                                key={index}
                                className="d-flex justify-content-center mb-5"
                            >
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
                </Container>
            </div>
        </div>
    ) : (
        <CircularProgress
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}
        />
    )
}

export default ViewShop
