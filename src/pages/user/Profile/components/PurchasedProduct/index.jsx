import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductImage from '../../../../../assets/images/bd2e86e454da37f2e6c9a128c8e9a2b8.png'
import './index.css'
import { formatPrice } from '../../../../../utils/format'

function PurchasedProduct({product}) {
    const { category, description, name, orderQuantity, price, productId, quantity } = product
    return (
        <div className="product-item">
            <Container fluid="md">
                <Row>
                    <Col
                        md={2}
                        className="d-flex justify-content-end align-content-center"
                    >
                        <img
                            src={ProductImage}
                            alt="productimage"
                            className="w-75"
                            style={{
                                padding: '0.7px',
                                border: '1px solid rgb(191, 191, 191)',
                            }}
                        />
                    </Col>
                    <Col md={7} className="d-block">
                        <h3>{name}</h3>
                        <div className="product-quantity">X {orderQuantity}</div>
                    </Col>
                    <Col md={3} className="d-flex justify-content-center">
                        <div className="product-price">₫{formatPrice(price)}</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PurchasedProduct
