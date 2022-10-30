/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CartShop from './components/CartShop'
import CartTotal from './components/CartTotal'
import { get } from '../../../utils/httprequest'
// import { handleFormData } from '../../../utils/handleFormData'
import queryString from 'query-string'
import { useAuth } from '../../../hooks/useAuth'

function Cart() {
    const { user } = useAuth()
    const [cart, setCart] = useState([])
    console.log(cart)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const q = queryString.stringify({
            userId: user.userId,
        })
        const res = await get('/cart', q)
        const data = await res.json()
        setCart(data)
    }
    return (
        <div>
            <Container fluid="md">
                <Row
                    style={{
                        backgroundColor: 'white',
                        marginBottom: '8px',
                        marginLeft: '1px',
                        marginRight: '1px',
                        height: '5rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'gray',
                    }}
                >
                    <Col md={6} style={{ paddingLeft: '5.6rem' }}>
                        <div className="fs-3">Sản phẩm</div>
                    </Col>
                    <Col md={3}>
                        <div className="fs-3" style={{ marginLeft: '6rem' }}>
                            Số lượng
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="fs-3">Số tiền</div>
                    </Col>
                    <Col md={1}>
                        <div className="fs-3">Xóa</div>
                    </Col>
                </Row>
                {cart.map(item => (
                    <Row key={item.shopId}>
                        <Col md={12}>
                            <CartShop item={item} />
                        </Col>
                    </Row>
                ))}
            </Container>
            <CartTotal />
        </div>
    )
}

export default Cart
