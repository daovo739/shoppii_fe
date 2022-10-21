import React, { useState } from 'react'
import './index.css'
import {
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    InputLabel,
    MenuItem,
    Select,
    Button,
    Avatar,
} from '@mui/material'
import { Row, Container, Col } from 'react-bootstrap'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { handleChange } from '../../../utils/handleForm'

function ShopProfile() {
    const [date, setDate] = useState()
    // console.log(date)
    return (
        <Container fluid="md">
            <Row>
                <Col md={8} className="profile-content">
                    <Container>
                        <Row>
                            <TextField
                                required
                                id="outlined-required"
                                label="Tên"
                                defaultValue=""
                                size="small"
                                margin="normal"
                                fullWidth
                                inputProps={{ style: { fontSize: '1.3rem' } }}
                                InputLabelProps={{
                                    style: { fontSize: '1.3rem' },
                                }}
                            />
                        </Row>
                        <Row>
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                defaultValue=""
                                size="small"
                                margin="normal"
                                fullWidth
                                inputProps={{ style: { fontSize: '1.3rem' } }}
                                InputLabelProps={{
                                    style: { fontSize: '1.3rem' },
                                }}
                                InputProps={{
                                    label: 'Email aa',
                                }}
                            />
                        </Row>
                        <Row>
                            <TextField
                                required
                                id="outlined-required"
                                label="Số điện thoại"
                                defaultValue=""
                                size="small"
                                margin="normal"
                                fullWidth
                                inputProps={{ style: { fontSize: '1.3rem' } }}
                                InputLabelProps={{
                                    style: { fontSize: '1.3rem' },
                                }}
                                InputProps={{
                                    label: 'Số điện thoại aaaa',
                                }}
                            />
                        </Row>
                        <Row>
                            <FormControl>
                                <FormLabel
                                    id="demo-row-radio-buttons-group-label"
                                    sx={{ fontSize: '1.2rem' }}
                                >
                                    Giới tính
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="male"
                                        control={<Radio size="medium" />}
                                        label="Nam"
                                    />
                                    <FormControlLabel
                                        value="female"
                                        control={<Radio size="medium" />}
                                        label="Nữ"
                                    />
                                </RadioGroup>
                            </FormControl>{' '}
                        </Row>
                        <Row className="mt-3">
                            <Col md={12}>
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DatePicker
                                        label="Ngày sinh"
                                        value={date}
                                        inputFormat="DD-MM-YYYY"
                                        onChange={newValue => {
                                            console.log(newValue)
                                            setDate(newValue)
                                        }}
                                        renderInput={params => {
                                            return (
                                                <TextField
                                                    {...params}
                                                    InputProps={{
                                                        ...params.InputProps,
                                                        label: 'Ngày sinh aaaa',
                                                    }}
                                                />
                                            )
                                        }}
                                    />
                                </LocalizationProvider>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center pt-2">
                            <Button variant="contained" className="fs-6 w-25">
                                Lưu
                            </Button>
                        </Row>
                    </Container>
                </Col>
                <Col md={4} className="profile-avatar pt-5 d-block">
                    <Container>
                        <Row>
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 125, height: 125 }}
                                className="mx-auto my-0"
                            />
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <Button
                                variant="outlined"
                                className="fs-6 w-50 mt-3"
                                size="medium"
                            >
                                Chọn ảnh
                            </Button>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default ShopProfile
