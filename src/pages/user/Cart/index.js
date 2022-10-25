import { Container, Row, Col } from 'react-bootstrap'
import CartShop from './components/CartShop'
import CartTotal from './components/CartTotal'

function Cart() {
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
                        <div className="fs-3" style={{marginLeft: '6rem'}}>Số lượng</div>
                    </Col>
                    <Col md={2}>
                        <div className="fs-3">Số tiền</div>
                    </Col>
                    <Col md={1}>
                        <div className="fs-3">Xóa</div>
                    </Col>
                </Row>
                {[0, 1, 2].map(item => (
                    <Row key={item} >
                        <Col md={12}>
                            <CartShop/>
                        </Col>
                    </Row>
                ))}
            </Container>
            <CartTotal />
        </div>
    )
}

export default Cart
