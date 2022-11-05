import * as React from 'react'
import { Chip, TableContainer } from '@mui/material'
import './index.css'
import OrdersModal from '../OrdersModal'

function OrdersTable({ rows }) {
    return (
        <React.Fragment>
            <TableContainer sx={{ width: '100%' }}>
                <table className="admin-request-table w-100">
                    <thead>
                        <tr className="header-row">
                            <th>ID người dùng</th>
                            <th>Tên cửa hàng</th>
                            <th>Trạng thái</th>
                            <th>Thời gian</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(row => (
                            <tr key={row.userId}>
                                <td>{row.userId}</td>
                                <td>{row.name}</td>
                                <td>
                                    <Chip
                                        size="small"
                                        label={
                                            <span
                                                style={{
                                                    fontSize: '1.3rem',
                                                    color:
                                                        row.status === 'pending'
                                                            ? 'var(--main-blue)'
                                                            : row.status ===
                                                              'accepted'
                                                            ? 'var(--main-green)'
                                                            : 'var(--main-red)',
                                                }}
                                            >
                                                {row.status}
                                            </span>
                                        }
                                        style={{
                                            backgroundColor:
                                                row.status === 'pending'
                                                    ? '#2877ee46'
                                                    : row.status === 'accepted'
                                                    ? '#87bdd64b'
                                                    : 'rgba(234, 22, 22, 0.249)',
                                        }}
                                    />
                                </td>
                                <td>{row.time}</td>
                                <td style={{ cursor: 'pointer' }}>
                                    <OrdersModal
                                        isPending={
                                            row.status === 'pending'
                                                ? true
                                                : false
                                        }
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TableContainer>
        </React.Fragment>
    )
}

export default OrdersTable
