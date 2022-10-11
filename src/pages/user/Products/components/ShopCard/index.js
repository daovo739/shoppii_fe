import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Avatar } from '@mui/material'
import {LocationOn, Circle} from '@mui/icons-material';
import './index.css'

function ShopCard() {
    return (
        <div className="shop-card w-100 p-4 rounded-3">
            <Container fluid="md">
                <Row>
                    <Col md={2}>
                        <Avatar
                            alt="shop1"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 100, height: 100 }}
                        />
                    </Col>
                    <Col md={10}>
                      <Container fluid='md'>
                        <Row>
                          <Col md={6} className="ps-0 pt-3">
                            <h2>Ten cua hang</h2>
                          </Col>
                          <Col md={6}>
                            <div style={{textAlign: 'end'}}>
                              <Circle sx={{fontSize: '15px', color: '#31a24c'}}/>
                              <span className="fs-4 pt-5 ms-2" style={{color: '#31a24c'}}>Đang mở bán</span>
                            </div>
                            {/* <div style={{textAlign: 'end'}}>
                              <Circle sx={{fontSize: '15px', color: 'gray'}}/>
                              <span className="fs-4 pt-5 ms-2" style={{color: 'gray'}}>Đã đóng cửa</span>
                            </div> */}
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6} className="ps-0 pt-3">
                            <div>
                              <LocationOn sx={{fontSize: '24px', color: 'red'}}/>
                              <span className="fs-4 pt-4 ms-2">Da Nang</span>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ShopCard
