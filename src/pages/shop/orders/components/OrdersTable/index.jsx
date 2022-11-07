import { useState, Fragment } from 'react'
import { Chip, TableContainer, Button } from '@mui/material'
import './index.css'
import OrdersModal from '../OrdersModal'

function OrdersTable({ orders, getActionStatus, handleAccept }) {
    const [open, setOpen] = useState(false)
    const [orderSelected, setOrderSelected] = useState({})
    const handleOpen = order => {
        console.log(order)
        setOpen(true)
        setOrderSelected(order)
    }
    const handleClose = () => setOpen(false)

    return (
        <Fragment>
            <TableContainer sx={{ width: '100%' }}>
                <table className="admin-request-table w-100">
                    <thead>
                        <tr className="header-row">
                            <th>NO</th>
                            <th>Mã đơn</th>
                            <th>Trạng thái</th>
                            <th>Thời gian</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((order, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{order.orderId}</td>
                                <td>
                                    <Chip
                                        size="small"
                                        label={
                                            <span
                                                style={{
                                                    fontSize: '1.3rem',
                                                    color:
                                                        order.status ===
                                                        'Pending'
                                                            ? 'var(--main-blue)'
                                                            : order.status ===
                                                              'Accepted'
                                                            ? 'var(--main-green)'
                                                            : 'var(--main-red)',
                                                }}
                                            >
                                                {order.status}
                                            </span>
                                        }
                                        style={{
                                            backgroundColor:
                                                order.status === 'Pending'
                                                    ? '#2877ee46'
                                                    : order.status ===
                                                      'Accepted'
                                                    ? '#87bdd64b'
                                                    : 'rgba(234, 22, 22, 0.249)',
                                        }}
                                    />
                                </td>
                                <td>{order.time}</td>
                                <td style={{ cursor: 'pointer' }}>
                                    <Button
                                        onClick={() => {
                                            handleOpen(order)
                                        }}
                                        sx={{ fontSize: '1.3rem' }}
                                    >
                                        Chi tiết
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TableContainer>
            <OrdersModal
                isPending={orderSelected.status === 'Pending' ? true : false}
                order={orderSelected}
                open={open}
                handleClose={handleClose}
                getActionStatus={getActionStatus}
                handleAccept={handleAccept}
            />
        </Fragment>
    )
}

export default OrdersTable
