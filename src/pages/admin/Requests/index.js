import React from 'react'
import RequestTable from './components/RequestTable'
import { Container, Row, Col } from 'react-bootstrap'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

function createData(userId, name, status, time) {
    return { userId, name, status, time }
}

export const rows = [
    createData('1', 'shop 1', 'pending', '15-02-2002'),
    createData('2', 'shop 2', 'accepted', '15-02-2002'),
    createData('3', 'shop 3', 'rejected', '15-02-2002'),
]

function Requests() {
    const [filter, setFilter] = React.useState('')

    const handleChange = event => {
        setFilter(event.target.value)
    }

    return (
        <>
            <Container
                fluid="md"
                style={{
                    backgroundColor: 'white',
                    boxShadow: 'var(--box-shadow-main)',
                    padding: '2.5rem',
                    width: '90%',
                    borderRadius: '1rem',
                }}
            >
                <Row>
                    <Col
                        md={6}
                        style={{
                            borderLeft: '1rem solid black',
                            fontWeight: 'bold',
                            paddingLeft: '1.5rem',
                        }}
                    >
                        <div className="mt-2">YÊU CẦU</div>
                    </Col>
                    <Col md={6} className="d-flex justify-content-end">
                        <FormControl size="small" sx={{ width: '15rem' }}>
                            <InputLabel id="demo-simple-select-label">
                                Trạng thái
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={filter}
                                label="Trạng thái"
                                onChange={handleChange}
                            >
                                <MenuItem value={'all'}>Tất cả</MenuItem>
                                <MenuItem value={'pending'}>
                                    Chờ xác nhận
                                </MenuItem>
                                <MenuItem value={'accepted'}>
                                    Đã chấp nhận
                                </MenuItem>
                                <MenuItem value={'rejected'}>
                                    Đã từ chối
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <RequestTable
                        rows={
                            filter === '' || filter === 'all'
                                ? rows
                                : rows.filter(row => row.status === filter)
                        }
                    />
                </Row>
            </Container>
        </>
    )
}

export default Requests
