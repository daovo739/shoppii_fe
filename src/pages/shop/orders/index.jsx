import { useState, useEffect } from 'react'
import OrdersTable from './components/OrdersTable'
import { Container, Row, Col } from 'react-bootstrap'
import queryString from 'query-string'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { get, post } from '../../.././utils/httprequest'
import { useAuth } from '../../../hooks/useAuth'
import { handleFormData } from '../../../utils/handleForm'
import { toast } from 'react-toastify'

function ShopOrders() {
    const { user } = useAuth()
    const [filter, setFilter] = useState('pending')
    const [orders, setOrders] = useState([])
    const [actionStatus, setActionStatus] = useState({
        status: '',
        orderId: 0
    })

    const handleChange = event => {
        setFilter(event.target.value)
    }
    console.log(actionStatus)
    const getOrders = async () => {
        const q = queryString.stringify({ shopId: user.userId, status: filter })
        const res = await get(`shop/orders`, q)
        const data = await res.json()
        console.log(data)
        setOrders(data)
    }

    const handleAccept = async () => {
        const formData = handleFormData({
            status: actionStatus.status,
            orderId: actionStatus.orderId,
        })
        const res = await post('shop/orders', formData)
        console.log(await res.json())
        if (res.status === 200){
            toast.success('Cập nhật đơn hàng thành công')
        } else {
            toast.error('Cập nhật đơn hàng không thành công')
        }
        getOrders()
    }

    const getActionStatus = (object) => {
        setActionStatus(object)
    }

    useEffect(() => {
        handleAccept()
    }, [actionStatus])

    useEffect(() => {
        getOrders()
    }, [filter])

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
                        <div className="mt-2">ĐƠN HÀNG</div>
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
                                onChange={e => handleChange(e)}
                            >
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
                    <OrdersTable
                        getActionStatus={getActionStatus}
                        orders={orders}
                        handleAccept={handleAccept}
                    />
                </Row>
            </Container>
        </>
    )
}

export default ShopOrders
