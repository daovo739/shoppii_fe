/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useReducer, memo } from 'react'
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
import { handleChange } from '../../../../../utils/handleForm'

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

const API_URI = 'https://dev-online-gateway.ghn.vn/shiip/public-api/master-data'
function AddressModal({
    open,
    handleClose,
    isEdit,
    handleFunction,
    addressAction,
    setAddressAction,
    state,
    dispatch,
}) {
    // const [action, setAction] = React.useState("")
    const [anotherInfo, setAnotherInfo] = useState(addressAction)
    const { cities, districts, wards, city, district, ward } = state

    console.log(state)
    useEffect(() => {
        console.log('render')
        if (!isEdit) {
            getCities()
        }
    }, [])

    const getCities = async () => {
        const res = await fetch(`${API_URI}/province`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Token: `${process.env.REACT_APP_API_TOKEN_GHN}`,
            },
        })
        const data = await res.json()
        dispatch(setCities(data.data))
    }

    const getDistricts = async () => {
        const res = await fetch(
            `${API_URI}/district?province_id=${city.ProvinceID}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Token: `${process.env.REACT_APP_API_TOKEN_GHN}`,
                },
            },
        )
        const data = await res.json()
        dispatch(setDistricts(data.data))
    }

    const getWards = async () => {
        const res = await fetch(
            `${API_URI}/ward?district_id=${district.DistrictID}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Token: `${process.env.REACT_APP_API_TOKEN_GHN}`,
                },
            },
        )
        const data = await res.json()
        dispatch(setWards(data.data))
    }

    useEffect(() => {
        if (city) {
            getDistricts()
        }
    }, [city])

    useEffect(() => {
        if (district) {
            getWards()
        }
    }, [district])

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form action="" onSubmit={e => handleFunction(e)}>
                    <Box sx={style}>
                        <Typography
                            id="modal-modal-title"
                            variant="h4"
                            component="h2"
                        >
                            {!isEdit ? 'Thêm địa chỉ mới' : 'Chỉnh sửa địa chỉ'}
                        </Typography>
                        <Container fluid="md">
                            <Row>
                                <Col md={6}>
                                    <TextField
                                        required
                                        name="receiverName" // name of input
                                        label="Họ và tên"
                                        variant="outlined"
                                        defaultValue={
                                            addressAction?.receiverName
                                        }
                                        sx={{
                                            marginTop: '1.5rem',
                                            marginBottom: '2.5rem',
                                            width: '100%',
                                        }}
                                        InputProps={{
                                            label: 'Họ và tên ###',
                                        }}
                                        onChange={e =>
                                            handleChange(e, setAddressAction)
                                        }
                                    />
                                </Col>
                                <Col md={6}>
                                    <TextField
                                        name="receiverPhone" // name of input
                                        required
                                        label="Số điện thoại"
                                        variant="outlined"
                                        defaultValue={
                                            addressAction?.receiverPhone
                                        }
                                        sx={{
                                            marginTop: '1.5rem',
                                            marginBottom: '2.5rem',
                                            width: '100%',
                                        }}
                                        InputProps={{
                                            label: 'Số điện thoại ####',
                                        }}
                                        onChange={e =>
                                            handleChange(e, setAddressAction)
                                        }
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
                                            required
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
                                            {cities?.map(city => (
                                                <MenuItem
                                                    value={city}
                                                    key={city.ProvinceID}
                                                >
                                                    {city.ProvinceName}
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
                                            required
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={district}
                                            label="Quận/Huyện #"
                                            onChange={event =>
                                                dispatch(
                                                    setDistrict(
                                                        event.target.value,
                                                    ),
                                                )
                                            }
                                            disabled={!city}
                                        >
                                            {city &&
                                                districts?.map(district => (
                                                    <MenuItem
                                                        value={district}
                                                        key={
                                                            district.DistrictID
                                                        }
                                                    >
                                                        {district.DistrictName}
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
                                            required
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
                                                wards?.map(ward => (
                                                    <MenuItem
                                                        value={ward}
                                                        key={ward.WardCode}
                                                    >
                                                        {ward.WardName}
                                                    </MenuItem>
                                                ))}
                                        </Select>
                                    </FormControl>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <TextField
                                        name="receiverAddress" // name of input
                                        label="Địa chỉ cụ thể"
                                        defaultValue={
                                            addressAction?.receiverAddress
                                        }
                                        variant="outlined"
                                        sx={{
                                            marginBottom: '2.5rem',
                                            width: '100%',
                                        }}
                                        InputProps={{
                                            label: 'Địa chỉ cụ thể ####',
                                        }}
                                        onChange={e =>
                                            handleChange(e, setAddressAction)
                                        }
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        sx={{
                                            fontSize: '1.5rem',
                                            height: '4rem',
                                            marginBottom: '2.5rem',
                                        }}
                                        onClick={handleClose}
                                    >
                                        Huỷ
                                    </Button>
                                </Col>
                                <Col md={6}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            fontSize: '1.5rem',
                                            height: '4rem',
                                            marginBottom: '2.5rem',
                                        }}
                                        type="submit"
                                    >
                                        Hoàn Thành
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Box>
                </form>
            </Modal>
        </div>
    )
}

export default memo(AddressModal)
