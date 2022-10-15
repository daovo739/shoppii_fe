import { Container, Row, Col } from 'react-bootstrap'
import CheckoutProduct from "./components/CheckoutProduct"
import CheckoutShop from "./components/CheckoutShop"
import PaymentMethods from "./PaymentMethods"
import SendTo from "./components/SendTo"
import Bill from "./components/Bill"

function Checkout() {
    return (
        <Container fluid='md'>
            <Row>
                <Col md={9}>
                <Container fluid='md'>
                    <Row>
                        <CheckoutShop/>
                    </Row>
                    <Row>
                        <CheckoutShop/>
                    </Row>
                    <Row>
                        <PaymentMethods/>
                    </Row>
                </Container>
                </Col>
                <Col md={3}>
                <Container fluid='md'>
                    <Row>
                        <SendTo/>
                    </Row>
                    <Row>
                        <Bill/>
                    </Row>
                </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Checkout
