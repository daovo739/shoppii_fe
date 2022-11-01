/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, memo, useMemo, useReducer } from 'react'
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
import {
    setCities,
    setDistricts,
    setWards,
    setCity,
    setDistrict,
    setWard,
} from './hook/actions'
import { reset } from './hook/instant'
import { handleChange } from '../../../../../utils/handleForm'
import reducer, { initState } from './hook/reducer'
import { toast } from 'react-toastify'
import { handleFormData } from '../../../../../utils/handleForm'
import { post, put } from '../../../../../utils/httprequest'
import { useAuth } from '../../../../../hooks/useAuth'

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
    addressAction,
    getAddresses,
}) {
    const { user } = useAuth()
    const [state, dispatch] = useReducer(reducer, initState)
    const [anotherInfo, setAnotherInfo] = useState(addressAction)
    const { cities, districts, wards, city, district, ward } = state

    // console.log(state)
    console.log('address modal')
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

    const getDistricts = async id => {
        const res = await fetch(`${API_URI}/district?province_id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Token: `${process.env.REACT_APP_API_TOKEN_GHN}`,
            },
        })
        const data = await res.json()
        dispatch(setDistricts(data.data))
    }

    const getWards = async id => {
        const res = await fetch(`${API_URI}/ward?district_id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Token: `${process.env.REACT_APP_API_TOKEN_GHN}`,
            },
        })
        const data = await res.json()
        dispatch(setWards(data.data))
    }

    const handleChangeProvince = e => {
        const value = e.target.value
        dispatch(setCity(value))
        getDistricts(value.ProvinceID)
    }

<<<<<<< HEAD
    useEffect(() => {
        if (district) {
            getWards()
        }
    }, [district])
    console.log(city)
=======
    const handleChangeDistrict = e => {
        const value = e.target.value
        dispatch(setDistrict(value))
        getWards(value.DistrictID)
    }

    const handleChangeWard = e => {
        dispatch(setWard(e.target.value))
    }

    const handleEdit = async e => {
        e.preventDefault()
    }

    const handleCreate = async e => {
        e.preventDefault()
        if (
            !state.city.ProvinceName ||
            !state.district.DistrictName ||
            !state.ward.WardName
        ) {
            toast.error('Vui lòng chọn đầy đủ địa chỉ')
            return
        }
        const data = {
            ...anotherInfo,
            province: state.city.ProvinceName,
            district: state.district.DistrictName,
            ward: state.ward.WardName,
        }
        const formData = handleFormData(data)
        const res = await post('/address', formData)
        console.log(res)
        if (res.status === 201) {
            toast.success('Thêm địa chỉ thành công')
        }
        dispatch({ type: reset })
        getAddresses()
        handleClose()
    }

    const handleFunction = isEdit ? handleEdit : handleCreate
>>>>>>> 974bf028e6dae8c568277d13baf11c98cf56e1cb
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
                                            handleChange(e, setAnotherInfo)
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
                                            handleChange(e, setAnotherInfo)
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
                                            onChange={handleChangeProvince}
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
<<<<<<< HEAD
                                            onChange={event =>
                                                dispatch(
                                                    setDistrict(
                                                        event.target.value,
                                                    ),
                                                )
                                            }
                                            disabled={city === ''}
=======
                                            onChange={handleChangeDistrict}
                                            disabled={!city}
>>>>>>> 974bf028e6dae8c568277d13baf11c98cf56e1cb
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
                                            onChange={handleChangeWard}
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
                                        required
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
                                            handleChange(e, setAnotherInfo)
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
                                        {isEdit ? 'Cập nhật' : 'Thêm mới'}
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
