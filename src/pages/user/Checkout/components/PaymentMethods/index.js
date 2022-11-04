import { memo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    Avatar,
} from '@mui/material'
import { LocalAtm } from '@mui/icons-material'
import { ZaloPay, Momo, ViettelPay, Paypal } from './images/images'

function PaymentMethods({ setPaymentMethod }) {
    return (
        <div className="payment-methods">
            <Container
                fluid="md"
                className="py-4 px-3"
                style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                }}
            >
                <Row>
                    <Col md={12}>
                        <h2 className="fw-bold pb-4">
                            Chọn hình thức thanh toán
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="paypal"
                                name="radio-buttons-group"
                                onChange={e => setPaymentMethod(e.target.value)}
                            >
                                <div className="d-flex align-items-center">
                                    <FormControlLabel
                                        value="cash"
                                        control={<Radio size="medium" />}
                                    />
                                    <LocalAtm
                                        sx={{
                                            fontSize: '2.4rem',
                                            marginRight: '1rem',
                                            color: '#2877ee',
                                        }}
                                    />
                                    <span>
                                        Thanh toán tiền mặt khi nhận hàng
                                    </span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FormControlLabel
                                        value="paypal"
                                        control={<Radio size="medium" />}
                                    />
                                    <Avatar
                                        alt="paypal"
                                        src={Paypal}
                                        sx={{
                                            width: 24,
                                            height: 24,
                                            marginRight: '1rem',
                                        }}
                                    />
                                    <span>Thanh toán bằng ví Paypal</span>
                                </div>
                            </RadioGroup>
                        </FormControl>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default memo(PaymentMethods)
