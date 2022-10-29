import React from 'react'
import {
    Box,
    Modal,
    Typography,
    TextField,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Button,
} from '@mui/material'
import { Container, Row, Col } from 'react-bootstrap'
import { style } from '../../../../../../../components/ModalStyle'
import { BorderColorOutlined } from '@mui/icons-material'

function UpdateAddressModal({values}) {
    return (
        <div>
            <p
                className="d-flex justify-content-end align-content-center"
                style={{ cursor: 'pointer' }}
            >
                <BorderColorOutlined
                    className="mt-1"
                    sx={{
                        fontSize: '18px',
                        color: 'var(--main-green)',
                    }}
                />
                <span
                    className="fs-5 mt-2"
                    style={{ color: 'var(--main-green)' }}
                >
                    Chỉnh sửa
                </span>
            </p>

        </div>
    )
}

export default UpdateAddressModal
