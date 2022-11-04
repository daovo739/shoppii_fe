import { memo, useMemo } from 'react'
import './index.css'
import { Container, Row, Col } from 'react-bootstrap'

import { formatPrice } from '../../../../../utils/format'

function Bill({ totalCheckout }) {
    const totalDeliveryFee = useMemo(() => {
        return totalCheckout.reduce((total, shop) => {
            return total + shop.checkout.deliveryFee
        }, 0)
    }, [totalCheckout])

    const totalProducts = useMemo(() => {
        return totalCheckout.reduce((total, shop) => {
            return total + shop.checkout.totalProduct
        }, 0)
    }, [totalCheckout])

    const totalCheckouts = useMemo(() => {
        return totalCheckout.reduce((total, shop) => {
            return total + shop.checkout.total
        }, 0)
    }, [totalCheckout])

    return (
        <div className="bill py-4">
            <Container
                fluid="md"
                className="py-4 px-3"
                style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                }}
            >
                <Row style={{ borderBottom: '3px solid #fafafa' }}>
                    <h2 className="fw-bold pb-4">Đơn hàng</h2>
                </Row>
                <Row style={{ paddingTop: '2rem' }}>
                    <Col md={6} style={{ color: 'gray' }}>
                        Tạm tính
                    </Col>
                    <Col
                        md={6}
                        style={{
                            textAlign: 'right',
                            color: 'var(--main-green)',
                        }}
                    >
                        {formatPrice(totalProducts)}
                    </Col>
                </Row>
                <Row
                    style={{
                        borderBottom: '3px solid #fafafa',
                        paddingBottom: '2rem',
                    }}
                >
                    <Col md={6} style={{ color: 'gray' }}>
                        Phí vận chuyển
                    </Col>
                    <Col
                        md={6}
                        style={{
                            textAlign: 'right',
                            color: 'var(--main-green)',
                        }}
                    >
                        {formatPrice(totalDeliveryFee)}
                    </Col>
                </Row>
                <Row style={{ paddingTop: '2rem' }}>
                    <Col md={6}>Tổng tiền</Col>
                    <Col
                        md={6}
                        style={{
                            textAlign: 'right',
                            color: 'var(--main-red)',
                            fontSize: '2.3rem',
                        }}
                    >
                        {formatPrice(totalCheckouts)}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default memo(Bill)
