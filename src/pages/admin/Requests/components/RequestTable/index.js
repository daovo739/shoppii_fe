import * as React from 'react'
import { Chip, TableContainer } from '@mui/material'
import './index.css'
import RequestModal from '../RequestModal'

function RequestTable({ rows }) {
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
                            <tr key={row.customer.userId}>
                                <td>{row.customer.userId}</td>
                                <td>{row.name}</td>
                                <td>
                                    <Chip
                                        size="small"
                                        label={
                                            <span
                                                style={{
                                                    fontSize: '1.3rem',
                                                    color:
                                                        row.status === 'Pending'
                                                            ? 'var(--main-blue)'
                                                            : row.status ===
                                                              'Accepted'
                                                            ? 'var(--main-green)'
                                                            : 'var(--main-red)',
                                                }}
                                            >
                                                {row.status}
                                            </span>
                                        }
                                        style={{
                                            backgroundColor:
                                                row.status === 'Pending'
                                                    ? '#2877ee46'
                                                    : row.status === 'Accepted'
                                                    ? '#87bdd64b'
                                                    : 'rgba(234, 22, 22, 0.249)',
                                        }}
                                    />
                                </td>
                                <td>{row.time}</td>
                                <td style={{ cursor: 'pointer' }}>
                                    <RequestModal
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

export default RequestTable
