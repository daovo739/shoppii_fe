import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material'
import {LocalAtm} from '@mui/icons-material';

function PaymentMethods() {
    return (
        <div className="payment-methods">
            <Container fluid="md">
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
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="female"
                                    control={<Radio size='large' />}
                                />
                                <div>
                                  <LocalAtm/>
                                </div>
                                <FormControlLabel
                                    value="male"
                                    control={<Radio size='large'  />}
                                    label="Male"
                                />
                                <FormControlLabel
                                    value="other"
                                    control={<Radio size='large'  />}
                                    label="Other"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PaymentMethods
