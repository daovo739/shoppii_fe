import React from 'react'
import { Container } from 'react-bootstrap'
import {
    HourglassFullTwoTone,
    BookmarkAddedTwoTone,
    HighlightOffOutlined,
    HighlightOffTwoTone,
} from '@mui/icons-material'

function Todo({ todo }) {
    return (
        <>
            <Container className="w-100 d-flex align-items-center px-0">
                <div
                    className="d-flex align-items-center px-3 me-5"
                    style={{
                        backgroundColor: 'white',
                        width: '25rem',
                        height: '10rem',
                        borderRadius: '1rem',
                        boxShadow: 'var(--box-shadow-main)'
                    }}
                >
                    <div
                        className="d-flex justify-content-center align-items-center ms-3"
                        style={{
                            width: '7rem',
                            height: '7rem',
                            backgroundColor: '#2877ee14',
                            borderRadius: '1.5rem',
                        }}
                    >
                        <HourglassFullTwoTone
                            sx={{ color: 'var(--main-blue)', fontSize: '30px' }}
                        />
                    </div>
                    <div className="ms-4">
                        <h4
                            style={{
                                color: 'rgba(128, 128, 128, 0.511)',
                                marginBottom: '0',
                            }}
                        >
                            Chờ xác nhận
                        </h4>
                        <div style={{ fontSize: '3rem', fontWeight: '600' }}>
                            {todo.pending}
                        </div>
                    </div>
                </div>

                <div
                    className="d-flex align-items-center px-3 me-5"
                    style={{
                        backgroundColor: 'white',
                        width: '25rem',
                        height: '10rem',
                        borderRadius: '1rem',
                        boxShadow: 'var(--box-shadow-main)'
                    }}
                >
                    <div
                        className="d-flex justify-content-center align-items-center ms-3"
                        style={{
                            width: '7rem',
                            height: '7rem',
                            backgroundColor: 'rgba(108, 198, 108, 0.104)',
                            borderRadius: '1.5rem',
                        }}
                    >
                        <BookmarkAddedTwoTone
                            sx={{
                                color: 'var(--main-green)',
                                fontSize: '30px',
                            }}
                        />
                    </div>
                    <div className="ms-4">
                        <h4
                            style={{
                                color: 'rgba(128, 128, 128, 0.511)',
                                marginBottom: '0',
                            }}
                        >
                            Đã xử lý
                        </h4>
                        <div style={{ fontSize: '3rem', fontWeight: '600' }}>
                            {todo.accepted}
                        </div>
                    </div>
                </div>

                <div
                    className="d-flex align-items-center px-3 me-5"
                    style={{
                        backgroundColor: 'white',
                        width: '25rem',
                        height: '10rem',
                        borderRadius: '1rem',
                        boxShadow: 'var(--box-shadow-main)'
                    }}
                >
                    <div
                        className="d-flex justify-content-center align-items-center ms-3"
                        style={{
                            width: '7rem',
                            height: '7rem',
                            backgroundColor: 'rgba(253, 69, 69, 0.109)',
                            borderRadius: '1.5rem',
                        }}
                    >
                        <HighlightOffTwoTone
                            sx={{ color: 'var(--main-red)', fontSize: '30px' }}
                        />
                    </div>
                    <div className="ms-4">
                        <h4
                            style={{
                                color: 'rgba(128, 128, 128, 0.511)',
                                marginBottom: '0',
                            }}
                        >
                            Đã hủy
                        </h4>
                        <div style={{ fontSize: '3rem', fontWeight: '600' }}>
                            {todo.rejected}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Todo
