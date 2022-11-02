import * as React from 'react'
import { Chip, TableContainer } from '@mui/material'
import './index.css'

const rows = [
    {
        id: '1',
        time: '20/02/2022 08:00',
        status: 'pending',
    },
    {
        id: '2',
        time: '20/02/2022 08:00',
        status: 'rejected',
    },
    {
        id: '3',
        time: '20/02/2022 08:00',
        status: 'pending',
    },
]

function SentRequests() {
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
                        {rows.map(row => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.time}</td>
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
                                <td className="description-td">
                                    <textarea rows="4" readOnly>
                                        bla bla bla bla bla bla bla bla bla bla
                                        bla bla bla bla bla bla bla bla bla bla
                                        bla bla bla bla bla bla bla bla bla bla
                                        bla bla bla bla bla Lorem ipsum dolor
                                        sit, amet consectetur adipisicing elit.
                                        Numquam labore necessitatibus natus.
                                        Perspiciatis nostrum vero eius quisquam.
                                        Repellendus veritatis cumque eveniet
                                        expedita rem nostrum, modi rerum fugiat
                                        aliquam nisi. Ipsam! Magni, nostrum
                                        soluta, nesciunt eaque enim at expedita
                                        iure odit modi natus nulla quibusdam
                                        maiores commodi sapiente fugiat. Saepe
                                        sit perspiciatis exercitationem ad odit
                                        reprehenderit impedit repellat. Esse,
                                        eum reprehenderit. Suscipit saepe
                                        adipisci aperiam deleniti. Placeat
                                        veniam vitae, in eligendi rem id magnam!
                                        Eveniet tempora doloremque tempore fugit
                                        dolorem quis? Consectetur maiores
                                        aliquid hic. Accusantium, vitae
                                        deleniti. Expedita, architecto ducimus!
                                        Repellendus ea sit commodi similique
                                        quas porro praesentium, eius pariatur.
                                        Ipsa consequuntur velit, est, sint
                                        incidunt amet accusamus adipisci quidem
                                        libero magni illo quas culpa illum
                                        laboriosam, sed harum magnam! Ipsa
                                        cumque nostrum aut facilis atque! Aut,
                                        voluptate mollitia laboriosam dolorum
                                        incidunt non dignissimos quas eos facere
                                        ratione labore consectetur suscipit
                                        autem eaque aspernatur voluptatem eius
                                        quaerat recusandae excepturi? Facere.
                                        Est, neque adipisci, quam qui harum
                                        tempora nulla consequatur doloremque
                                        odio consequuntur nam vero perferendis.
                                        Voluptas, rerum sint delectus alias
                                        mollitia qui minus placeat dolorem vero
                                        aut, quidem, aliquam deleniti?s
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
