import React, { useState } from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { SavingsTwoTone } from '@mui/icons-material'
import { Container, Row } from 'react-bootstrap'
import { SavingsOutlined } from '@mui/icons-material'

function FilterTotal() {
    const [from, setFrom] = useState(null)
    const [to, setTo] = useState(null)

    return (
        <Container
            fluid="md"
            className="mx-0"
            style={{ backgroundColor: 'white', borderRadius: '10px', padding: '2rem', width: '94%' }}
        >
            <Row>
                <div className="d-flex justify-content-center align-items-center">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Từ ngày"
                            value={from}
                            inputFormat="DD-MM-YYYY"
                            onChange={newDate => setFrom(newDate)}
                            renderInput={params => {
                                return (
                                    <TextField
                                        {...params}
                                        size="small"
                                        InputProps={{
                                            ...params.InputProps,
                                            label: 'Từ ngày aaaa',
                                        }}
                                    />
                                )
                            }}
                        />
                    </LocalizationProvider>
                    <div
                        className="mx-3"
                        style={{
                            fontSize: '3rem',
                            color: 'gray',
                            fontWeight: 'lighter',
                        }}
                    >
                        -
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Đến ngày"
                            value={to}
                            inputFormat="DD-MM-YYYY"
                            onChange={newDate => setTo(newDate)}
                            renderInput={params => {
                                return (
                                    <TextField
                                        {...params}
                                        size="small"
                                        InputProps={{
                                            ...params.InputProps,
                                            label: 'Đến ngày aaaa',
                                        }}
                                    />
                                )
                            }}
                        />
                    </LocalizationProvider>
                </div>
            </Row>
            <Row className="d-flex justify-content-center align-items-center mt-4">
                <div
                    className="d-flex align-items-center mt-4 p-4"
                    style={{
                        width: '26rem',
                        background:
                            'linear-gradient(to bottom right, rgba(253, 153, 170, 0.72), rgba(117, 52, 249, 0.649))',
                        borderRadius: '10px',
                    }}
                >
                    <SavingsOutlined
                        // sx={{ fontSize: '40px', color: '#fc79b0' }}
                        sx={{ fontSize: '40px', color: 'white' }}
                    />
                    <div className="ms-4">
                        <h4 style={{ color: 'white', marginBottom: '0' }}>
                            Tổng cộng{' '}
                        </h4>
                        <div
                            style={{
                                fontSize: '2.8rem',
                                fontWeight: 'bold',
                                color: 'white',
                            }}
                        >
                            2.000.000đ
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default FilterTotal
