import {useState, useEffect} from 'react'
import RequestTable from './components/RequestTable'
import { Container, Row, Col } from 'react-bootstrap'
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Button,
} from '@mui/material'
import { get } from '../../../utils/httprequest'
import queryString from 'query-string'

function createData(userId, name, status, time) {
    return { userId, name, status, time }
}


function Requests() {
    const [filter, setFilter] = useState('All')
    const [rows, setRows] = useState([])
    console.log(filter);
    const getRequests = async () => {
        const q = queryString.stringify({
            status: filter
        })
        const res = await get('admin/request', q)
        const data = await res.json()
        setRows(data)
    }

    useEffect(() => {
        getRequests()
    }, [])

    const handleChange = event => {
        setFilter(event.target.value)
    }

    return (
        <>
            <div style={{}}>
                <Button
                    variant="contained"
                    sx={{
                        fontSize: '1.5rem',
                        backgroundColor: 'var(--main-blue)',
                        width: '18rem',
                        mb: 5,
                        py: 1,
                        ml: 5
                    }}
                >
                    Đăng xuất
                </Button>
            </div>
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
                                <MenuItem value={'All'}>Tất cả</MenuItem>
                                <MenuItem value={'Pending'}>
                                    Chờ xác nhận
                                </MenuItem>
                                <MenuItem value={'Accepted'}>
                                    Đã chấp nhận
                                </MenuItem>
                                <MenuItem value={'Rejected'}>
                                    Đã từ chối
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <RequestTable
                        rows={
                            filter === 'All'
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
