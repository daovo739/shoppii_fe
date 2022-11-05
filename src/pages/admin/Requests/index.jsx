import { useState, useEffect } from 'react'
import RequestTable from './components/RequestTable'
import { Container, Row, Col } from 'react-bootstrap'
import { ROLE_USER } from '../../../hooks/constants'
import { useNavigate } from 'react-router-dom'
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Button,
} from '@mui/material'
import { get, post } from '../../../utils/httprequest'
import queryString from 'query-string'
import { handleFormData } from '../../../utils/handleForm'
import { toast } from 'react-toastify'
import { useAuth } from '../../../hooks/useAuth'

function Requests() {
    const navigate = useNavigate()
    const { changeRole } = useAuth()
    const [filter, setFilter] = useState('All')
    const [rows, setRows] = useState([])
    const [resultStatus, setResultStatus] = useState(null)

    const setStatus = async () => {
        const formData = handleFormData({
            status: resultStatus.status,
            userId: resultStatus.userId
        })
        const res = await post('admin/request', formData)
        if (res.status === 200){
            toast.success('Cập nhật yêu cầu thành công')
        } else {
            toast.error('Cập nhật yêu cầu không thành công')
        }
        getRequests()
    }

    const getStatus = (status) => {
        setResultStatus(status)
    } 

    const getRequests = async () => {
        const q = queryString.stringify({
            status: filter,
        })
        const res = await get('admin/request', q)
        const data = await res.json()
        setRows(data)
    }

    useEffect(() => {
        if (resultStatus !== null){
            setStatus()
            console.log(true)
        }
    }, [resultStatus])

    useEffect(() => {
        getRequests()
    }, [filter])

    const handleChange = event => {
        setFilter(event.target.value)
    }

    const handleLogoutAdmin = () => {
        console.log(1)
        changeRole(ROLE_USER)
        navigate('/', { replace: true })
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
                        ml: 5,
                    }}
                    onClick={handleLogoutAdmin}
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
                        getStatus={getStatus}
                    />
                </Row>
            </Container>
        </>
    )
}

export default Requests
