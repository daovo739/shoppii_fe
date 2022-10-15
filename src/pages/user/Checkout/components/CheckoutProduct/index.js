import React from "react";
import { Container, Row, Col} from 'react-bootstrap'
import ProductImg from '../../../../../assets/images/bd2e86e454da37f2e6c9a128c8e9a2b8.png'

function CheckoutProduct() {
  return (
    <div className="checkout-product mb-3">
      <Container fluid='md'>
        <Row>
          <Col md={8} className="d-flex">
            <img src={ProductImg} alt="image" style={{ width: '70px'}}/>
            <div className="ms-3">
                <h3 className="mb-4">Tên sản phẩm gì gì đó</h3>
                <h4 style={{color: 'gray'}}>Số lượng: 1</h4>
            </div>
          </Col>
          <Col md={4}>
            <div className="fs-4" style={{fontWeight: 'bold', textAlign: 'right'}}>200.000 ₫</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CheckoutProduct