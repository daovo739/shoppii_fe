import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import CheckoutProduct from './components/CheckoutProduct'
import CheckoutShop from './components/CheckoutShop'
import PaymentMethods from './components/PaymentMethods'
import SendTo from './components/SendTo'
import Bill from './components/Bill'
import useStore from '../../../store/hooks'

function Checkout() {
    const { addresses } = useStore()
    const { state } = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (!state) {
            navigate('/cart', { replace: true })
        }
    }, [])

    return (
        <Container fluid="md">
            <Row>
                <Col md={9}>
                    <Container fluid="md">
                        {state?.map(shop => {
                            return (
                                <Row key={shop.shopId}>
                                    <CheckoutShop shop={shop} />
                                </Row>
                            )
                        })}
                        <Row>
                            <PaymentMethods />
                        </Row>
                    </Container>
                </Col>
                <Col md={3}>
                    <Container fluid="md">
                        <Row>
                            <SendTo addresses={addresses} />
                        </Row>
                        <Row>
                            <Bill />
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Checkout
