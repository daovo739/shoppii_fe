import * as React from 'react'
import { Chip, TableContainer } from '@mui/material'
import './index.css'
import { get } from '../../../../../utils/httprequest'
import { useAuth } from '../../../../../hooks/useAuth'
import queryString from 'query-string'
import { useEffect } from 'react'
import { useState } from 'react'

function SentRequests() {
    const { user } = useAuth()
    const [rows, setRows] = useState([])

    const getRequest = async () => {
        const q = queryString.stringify({
            userId: user.userId
        })
        const res = await get('shop/register', q)
        const data = await res.json()
        console.log(data);
        setRows(data)
    }

    useEffect(() => {
        getRequest()
    },[])

    return (
        <React.Fragment>
            <TableContainer sx={{ width: '100%' }}>
                <table className="sent-request-table w-100">
                    <thead>
                        <tr className="header-row">
                            <th style={{ width: '10%' }}>NO.</th>
                            <th style={{ width: '20%' }}>Thời gian</th>
                            <th style={{ width: '20%' }}>Trạng thái</th>
                            <th style={{ width: '50%' }}>Mô tả</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{row.time}</td>
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
                                <td className="description-td">
                                    <textarea rows="4" readOnly style={{ color: 'gray' }}>
                                        {row.description}
                                    </textarea>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TableContainer>
        </React.Fragment>
    )
}

export default SentRequests
