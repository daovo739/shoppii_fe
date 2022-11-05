import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductImg from '../../../../../assets/images/bd2e86e454da37f2e6c9a128c8e9a2b8.png'
import { formatPrice } from '../../../../../utils/format'

function CheckoutProduct({ product }) {
    return (
        <div className="checkout-product mb-3">
            <Container fluid="md">
                <Row>
                    <Col md={10} className="d-flex">
                        <img
                            src={ProductImg}
                            alt="image"
                            style={{ width: '70px', height: '70px' }}
                            className="pt-1"
                        />
                        <div className="ms-3">
                            <h3 className="mb-2 text-capitalize">
                                {product.productName}
                            </h3>
                            <h5 style={{ color: 'gray' }}>
                                Số lượng: {product.cartQuantity}
                            </h5>
                            <h5 style={{ color: 'gray' }}>
                                Giá: {formatPrice(product.price)}
                            </h5>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div
                            className="fs-4"
                            style={{ fontWeight: 'bold', textAlign: 'right' }}
                        >
                            {formatPrice(product.price * product.cartQuantity)}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CheckoutProduct
