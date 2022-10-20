import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import './index.css'
import ProductImage from '../../../../../assets/images/bd2e86e454da37f2e6c9a128c8e9a2b8.png'
import {AddCircleOutline, RemoveCircleOutline, DeleteForeverOutlined} from '@mui/icons-material';


function CartProduct(){
  return (
    <div className="cart-product w-100">
      <Container fluid='md'>
        <Row>
          <Col md={6}>
            <div className="cart-product-info d-flex">
              <img src={ProductImage} alt="img" />
              <div className="pt-3 ms-3">
                <h3 className="mb-4">Tên sản phẩm gì gì đó</h3>
                <h4 style={{color: 'gray'}}>100.000đ</h4>
                {/* <h4 style={{color: 'var(--main-red)'}}>Sản phẩm này đã hết hàng</h4> */}
              </div>
            </div>
          </Col>
          <Col md={3} className="d-flex align-items-center">
            <div>
              <AddCircleOutline sx={{fontSize: '30px', color: 'var(--main-blue)'}}/>
              <input className="quantity-input mx-3" type="text" value='2'/>
              <RemoveCircleOutline sx={{fontSize: '30px', color: 'var(--main-blue)'}}/>
            </div>
          </Col>
          <Col md={2} className="d-flex align-items-center">
            <div className="fs-3" style={{color: 'var(--main-blue)'}}>200.000đ</div>
          </Col>
          <Col md={1} className="d-flex align-items-center">
            <div className="d-block">
              <DeleteForeverOutlined sx={{fontSize: '25px', color: 'var(--main-red)'}}/>
              <div style={{color: 'var(--main-red)'}}>Xóa</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CartProduct