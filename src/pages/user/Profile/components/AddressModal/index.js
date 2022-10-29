import React, { useEffect, useState } from 'react'
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
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import './index.css'
import { Container, Row, Col } from 'react-bootstrap'
import { BorderColorOutlined } from '@mui/icons-material'
import reducer, { initState } from './hook/reducer'
import {
    setCities,
    setDistricts,
    setWards,
    setCity,
    setDistrict,
    setWard,
} from './hook/actions'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
}

function AddressModal({ test }) {
    const [open, setOpen] = React.useState(false)
    const [state, dispatch] = React.useReducer(reducer, initState)
    // const [action, setAction] = React.useState("")
    const [anotherInfo, setAnotherInfo] = useState({
        name: null,
        phone: null,
        address: null,
    })
    const { cities, districts, wards, city, district, ward } = state

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const fetchAddress = async () => {
        const res = await fetch('https://provinces.open-api.vn/api/?depth=3')
        const data = await res.json()
        console.log(res)
        console.log(data)
        setCities(data)
    }

    useEffect(() => {
       fetchAddress()
    }, [])

    useEffect(() => {
        city && dispatch(setDistricts(city.districts))
    }, [city])

    useEffect(() => {
        district && dispatch(setWards(district.wards))
    }, [district])

    return (
        <div>
            {test ? (
                <p
                    className="d-flex justify-content-end align-content-center"
                    style={{ cursor: 'pointer' }}
                    onClick={handleOpen}
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
            ) : (
                <Box
                    className="add-new-address d-flex justify-content-center"
                    component="span"
                    onClick={handleOpen}
                    sx={{ p: 2, border: '1px dashed grey' }}
                >
                    <AddOutlinedIcon sx={{ fontSize: '25px', color: 'gray' }} />
                    <div className="ms-3 pt-1">THÊM ĐỊA CHỈ MỚI</div>
                </Box>
            )}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h4"
                        component="h2"
                    >
                        {!test ? 'Thêm địa chỉ mới' : 'Chỉnh sửa địa chỉ'}
                    </Typography>
                    <Container fluid="md">
                        <Row>
                            <Col md={6}>
                                <TextField
                                    label="Họ và tên"
                                    variant="outlined"
                                    sx={{
                                        marginTop: '1.5rem',
                                        marginBottom: '2.5rem',
                                        width: '100%',
                                    }}
                                    InputProps={{
                                        label: 'Họ và tên ###',
                                    }}
                                />
                            </Col>
                            <Col md={6}>
                                <TextField
                                    label="Số điện thoại"
                                    variant="outlined"
                                    sx={{
                                        marginTop: '1.5rem',
                                        marginBottom: '2.5rem',
                                        width: '100%',
                                    }}
                                    InputProps={{
                                        label: 'Số điện thoại ####',
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <FormControl
                                    fullWidth
                                    sx={{ marginBottom: '2.5rem' }}
                                >
                                    <InputLabel id="demo-simple-select-label">
                                        Tỉnh/Thành phố
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={city}
                                        label="Tỉnh/Thành phố #"
                                        onChange={event =>
                                            dispatch(
                                                setCity(event.target.value),
                                            )
                                        }
                                    >
                                        {cities.map(city => (
                                            <MenuItem
                                                value={city}
                                                key={city.code}
                                            >
                                                {city.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <FormControl
                                    fullWidth
                                    sx={{ marginBottom: '2.5rem' }}
                                >
                                    <InputLabel id="demo-simple-select-label">
                                        Quận/Huyện
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={district}
                                        label="Quận/Huyện #"
                                        onChange={event =>
                                            dispatch(
                                                setDistrict(event.target.value),
                                            )
                                        }
                                        disabled={!city}
                                    >
                                        {city &&
                                            districts.map(district => (
                                                <MenuItem
                                                    value={district}
                                                    key={district.code}
                                                >
                                                    {district.name}
                                                </MenuItem>
                                            ))}
                                    </Select>
                                </FormControl>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <FormControl
                                    fullWidth
                                    sx={{ marginBottom: '2.5rem' }}
                                >
                                    <InputLabel id="demo-simple-select-label">
                                        Phường/Xã
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={ward}
                                        label="Phường/Xã #"
                                        onChange={event =>
                                            dispatch(
                                                setWard(event.target.value),
                                            )
                                        }
                                        disabled={!district}
                                    >
                                        {district &&
                                            wards.map(ward => (
                                                <MenuItem
                                                    value={ward}
                                                    key={ward.code}
                                                >
                                                    {ward.name}
                                                </MenuItem>
                                            ))}
                                    </Select>
                                </FormControl>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <TextField
                                    label="Địa chỉ cụ thể"
                                    variant="outlined"
                                    sx={{
                                        marginBottom: '2.5rem',
                                        width: '100%',
                                    }}
                                    InputProps={{
                                        label: 'Địa chỉ cụ thể ####',
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        fontSize: '1.5rem',
                                        height: '4rem',
                                        marginBottom: '2.5rem',
                                    }}
                                >
                                    Hoàn Thành
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Box>
            </Modal>
        </div>
    )
}

export default AddressModal
