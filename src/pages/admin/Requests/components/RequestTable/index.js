import * as React from 'react'
import { Chip, TableContainer } from '@mui/material'
import './index.css'

function createData(userId, name, status, time) {
    return { userId, name, status, time }
}

const rows = [
    createData('1', 'shop 1', 'pending', '15-02-2002'),
    createData('2', 'shop 2', 'accepted', '15-02-2002'),
    createData('3', 'shop 3', 'rejected', '15-02-2002'),
]

const chipStyle = [
    {
        name: 'pending',
        border: '1px solid var(--main-red) !important',
        backgroudColor: 'rgba(234, 22, 22, 0.249) !important',
        color: 'var(--main-red)'
    },
    {
      name: 'accepted',
      border: '1px solid var(--main-red) !important',
      backgroudColor: 'rgba(234, 22, 22, 0.249) !important',
      color: 'var(--main-red)'
  },
  {
    name: 'rejected',
    border: '1px solid var(--main-red) !important',
    backgroudColor: 'rgba(234, 22, 22, 0.249) !important',
    color: 'var(--main-red)'
},
]

function RequestTable() {
    return (
        <React.Fragment>
            <TableContainer sx={{ width: '100%' }}>
                <table className="admin-request-table w-100">
                    <tr className="header-row">
                        <th>ID người dùng</th>
                        <th>Tên cửa hàng</th>
                        <th>Trạng thái</th>
                        <th>Thời gian</th>
                        <th></th>
                    </tr>
                    {rows.map(row => (
                        <tr key={row.userId}>
                            <td>{row.userId}</td>
                            <td>{row.name}</td>
                            <td>
                                <Chip
                                    size="small"
                                    label={row.status}
                                    color="primary"
                                    variant="outlined"
                                />
                            </td>
                            <td>{row.time}</td>
                            <td>Chi tiết</td>
                        </tr>
                    ))}
                </table>
            </TableContainer>
        </React.Fragment>
    )
}

export default RequestTable
