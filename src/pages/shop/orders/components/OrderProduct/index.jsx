import { Container, Col, Row } from 'react-bootstrap'
import ProductImg from '../../../../../assets/images/bd2e86e454da37f2e6c9a128c8e9a2b8.png'

function OrderProduct({ item }) {
    const {
        productId,
        category,
        description,
        name,
        orderQuantity,
        price,
        quantity,
    } = item
    console.log(item)
    return (
        <>
            <Container fluid="md" className="my-5">
                <Row>
                    <Col md={12} className="d-flex">
                        <img
                            src={ProductImg}
                            alt=""
                            style={{
                                width: '90px',
                                border: '1px solid gray',
                                padding: '1px',
                            }}
                        />
                        <div
                            style={{
                                fontSize: '1.4rem',
                                marginLeft: '1rem',
                                marginTop: '0.4rem',
                            }}
                        >
                            <span>{name}</span> <br />
                            <span>
                                <strong>Số lượng :</strong>{' '}
                                <span>
                                    {orderQuantity} / {quantity} (số lượng trong kho)
                                </span>
                            </span>{' '}
                            <br />
                            <span>
                                <strong>Giá</strong> : <span style={{ color: 'var(--main-red)' }}>{price} đ</span>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default OrderProduct
