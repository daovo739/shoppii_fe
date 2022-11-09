import { Container, Col, Row } from 'react-bootstrap'
import { formatPrice } from '../../../../../utils/format'

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
    return (
        <>
            <Container fluid="md" className="my-5">
                <Row>
                    <Col md={12} className="d-flex">
                        <img
                            src={item?.images[0]}
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
                                    {orderQuantity} / {quantity} (số lượng trong
                                    kho)
                                </span>
                            </span>{' '}
                            <br />
                            <span>
                                <strong>Giá</strong> :{' '}
                                <span style={{ color: 'var(--main-red)' }}>
                                    {formatPrice(price)}
                                </span>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default OrderProduct
