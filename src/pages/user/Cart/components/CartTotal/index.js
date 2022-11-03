import { memo, useMemo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Checkbox, Button } from '@mui/material'
import { DeleteSweepOutlined } from '@mui/icons-material'
import { formatPrice } from '../../../../../utils/format'

function CartTotal({
    selectedCheckout,
    totalProducts,
    setIsSelectAll,
    isSelectAll,
    isSelectAllCheckBox,
    setIsSelectAllCheckBox,
}) {
    const totalPrice = useMemo(() => {
        return selectedCheckout.reduce((total, shop) => {
            return (
                total +
                shop.products.reduce((totalSingleShop, product) => {
                    return (
                        totalSingleShop + product.cartQuantity * product.price
                    )
                }, 0)
            )
        }, 0)
    }, [selectedCheckout])

    return (
        <div
            className="cart-total d-flex align-items-center justify-content-between"
            style={{
                bottom: '0',
                position: 'sticky',
                height: '8rem',
                backgroundColor: 'var(--white)',
                boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                zIndex: '5',
            }}
        >
            <Container fluid="md">
                <Row>
                    <Col md={12} className="d-flex justify-content-between">
                        <div className="cart-total-left d-flex align-items-center">
                            <Checkbox
                                checked={isSelectAllCheckBox}
                                sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 28 },
                                    marginRight: '7px',
                                }}
                                onChange={() => {
                                    setIsSelectAllCheckBox(!isSelectAllCheckBox)
                                    setIsSelectAll(!isSelectAll)
                                }}
                            />
                            <h3 className="pt-2">
                                Chọn tất cả ({totalProducts})
                            </h3>
                        </div>
                        <div className="cart-total-right d-flex align-items-center">
                            <h3 style={{ marginRight: '1.5rem' }}>
                                Tổng thanh toán :{' '}
                            </h3>
                            <h1
                                style={{
                                    color: 'var(--main-red)',
                                    marginRight: '2rem',
                                }}
                            >
                                {formatPrice(totalPrice)}
                            </h1>
                            <Button
                                className="checkout-btn"
                                sx={{
                                    backgroundColor: 'var(--main-red)',
                                    color: 'white',
                                    fontSize: '1.5rem',
                                    width: '25rem',
                                    height: '4rem',
                                }}
                            >
                                Thanh toán
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default memo(CartTotal)
