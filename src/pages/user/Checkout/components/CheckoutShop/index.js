import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Store } from '@mui/icons-material'
import CheckoutProduct from '../CheckoutProduct'
import ShippingUnitModal from '../ShippingUnitModal'
import {shippingUnit} from '../CheckoutShop/ShippingUnitData'


function CheckoutShop() {
    const [selectedUnit, setSelectedUnit] = React.useState(shippingUnit[0])
    console.log(selectedUnit)
    const getSelectedUnit = index => {
        setSelectedUnit(shippingUnit[index])
    }

    return (
        <div className="checkout-shop py-4 px-3">
            <Container fluid="md">
                <Row>
                    <Container
                        fluid="md"
                        className="py-4 px-3"
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            borderBottom: '4px dashed #fafafa',
                        }}
                    >
                        <Row className="mb-3">
                            <Col md={12} className="d-flex">
                                <h4 className="pt-2 me-2">
                                    Tên cửa hàng gì đó
                                </h4>
                                <div style={{ color: 'gray' }}>|</div>
                                <div
                                    style={{
                                        marginLeft: '7px',
                                        fontSize: '1.2rem',
                                        color: '#7ca5b8',
                                    }}
                                >
                                    <Store
                                        sx={{
                                            fontSize: '22px',
                                            color: '#7ca5b8',
                                            marginRight: '5px',
                                        }}
                                    />
                                    Xem cửa hàng
                                </div>
                            </Col>
                        </Row>
                        {[0, 1].map(item => (
                            <Row key={item} >
                                <Col md={12}>
                                    <CheckoutProduct/>
                                </Col>
                            </Row>
                        ))}
                    </Container>
                </Row>
                <Row style={{padding: '1rem', backgroundColor: '#e6eef7', marginTop: '2px', borderRadius: '8px'}}>
                    <Container fluid='md'>
                        <Row className="py-3">
                            <Col md={2}>
                                <div style={{color: '#7ca5b8'}}>Đơn vị vận chuyển</div>
                            </Col>
                            <Col md={6}>
                                <div className="delivery-info">
                                    <h3 className="fw-bold">{selectedUnit.name}</h3>
                                    <div className="note fs-5" style={{color: 'gray'}}>(Do ảnh hưởng bởi Covid19, thời gian giao hàng quốc tế có thể kéo dài hơn dự kiến)</div>
                                </div>
                            </Col>
                            <Col md={2}>
                                <ShippingUnitModal onClick={getSelectedUnit}/>
                            </Col>
                            <Col md={2}>
                                <div style={{textAlign: 'right'}}>{selectedUnit.price}</div>
                            </Col>
                        </Row>
                        <Row style={{ borderTop: '2px dashed #fafafa'}} className="pt-3">
                            <Col md={12} style={{ textAlign: 'right'}}>
                                <span className="fs-4 me-3" style={{color: 'gray'}}>Tổng số tiền : </span>
                                <span className="fs-1 me-3" style={{color: '#ff424e'}}>204.000₫</span>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </div>
    )
}

export default CheckoutShop
