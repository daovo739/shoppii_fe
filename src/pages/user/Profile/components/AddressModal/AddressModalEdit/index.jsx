import '../index.css'
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
    CircularProgress,
} from '@mui/material'
import { Container, Row, Col } from 'react-bootstrap'
import {
    setCities,
    setDistricts,
    setWards,
    setCity,
    setDistrict,
    setWard,
} from '../hook/actions.js'
import { reset, style } from '../hook/instant'
import { handleChange } from '../../../../../../utils/handleForm'
import reducer, { initState } from '../hook/reducer'
import { toast } from 'react-toastify'
import { handleFormData } from '../../../../../../utils/handleForm'
import { put } from '../../../../../../utils/httprequest'
import { useAuth } from '../../../../../../hooks/useAuth'
import { getCities, getDistricts, getWards } from '../hook/function'

function AddressModalEdit({ open, handleClose, addressAction, getAddresses }) {
    const { user } = useAuth()
    const [state, dispatch] = useReducer(reducer, initState)
    const { cities, districts, wards, city, district, ward } = state
    const [anotherInfo, setAnotherInfo] = useState({})
    const [isUpdate, setIsUpdate] = useState(false)
    const [loading, setLoading] = useState(true)

    // console.log('state in', state)
    useEffect(() => {
        let isEdit = false
        if (anotherInfo.province) {
            Object.keys(anotherInfo).forEach(key => {
                if (anotherInfo[key] !== addressAction[key]) {
                    isEdit = true
                }
            })
            isEdit ? setIsUpdate(true) : setIsUpdate(false)
        }
    }, [anotherInfo])

    useEffect(() => {
        setAnotherInfo(addressAction)
        if (addressAction?.province) {
            ;(async () => {
                const cities = await getCities()
                const city = cities.find(
                    city => city.ProvinceName === addressAction.province,
                )
                const districts = await getDistricts(city.ProvinceID)
                const district = districts.find(
                    district =>
                        district.DistrictName === addressAction.district,
                )
                const wards = await getWards(district.DistrictID)
                const ward = wards.find(
                    ward => ward.WardName === addressAction.ward,
                )

                dispatch(setCity(city))
                dispatch(setDistrict(district))
                dispatch(setWard(ward))

                dispatch(setCities(cities))
                dispatch(setDistricts(districts))
                dispatch(setWards(wards))
            })()

            return () => {
                dispatch({ type: reset })
            }
        }
    }, [addressAction])

    const handleChangeProvince = e => {
        const value = e.target.value
        dispatch(setCity(value))
        const data = getDistricts(value.ProvinceID)
        dispatch(setWards([]))
        data.then(districts => {
            dispatch(setDistricts(districts))
        })
        setAnotherInfo({
            ...anotherInfo,
            province: value.ProvinceName,
            district: '',
            ward: '',
        })
    }

    const handleChangeDistrict = e => {
        const value = e.target.value
        dispatch(setDistrict(value))
        const data = getWards(value.DistrictID)
        data.then(wards => {
            dispatch(setWards(wards))
        })
        setAnotherInfo({
            ...anotherInfo,
            district: value.DistrictName,
            ward: '',
        })
    }

    const handleChangeWard = e => {
        dispatch(setWard(e.target.value))
        setAnotherInfo({ ...anotherInfo, ward: e.target.value.WardName })
    }

    const handleEdit = async e => {
        e.preventDefault()
        if (
            !anotherInfo.province ||
            !anotherInfo.district ||
            !anotherInfo.ward
        ) {
            toast.error('Vui lòng chọn đầy đủ địa chỉ')
            return
        }
        const data = {
            ...anotherInfo,
            userId: user.userId,
        }
        console.log(data)
        const formData = handleFormData(data)
        const res = await put('address', formData)
        console.log(res)
        console.log(await res.json())
        if (res.status === 200) {
            toast.success('Cập nhật địa chỉ thành công')
        } else {
            toast.error('Cập nhật địa chỉ thất bại')
        }
        dispatch({ type: reset })
        getAddresses()
        handleClose()
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form action="" onSubmit={e => handleEdit(e)}>
                    <Box sx={style}>
                        <Typography
                            id="modal-modal-title"
                            variant="h4"
                            component="h2"
                        >
                            Chỉnh sửa địa chỉ
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
                                            onChange={handleChangeDistrict}
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
                                            onChange={handleChangeWard}
                                            disabled={!district}
                                        >
                                            {district &&
                                                wards?.map(ward => (
                                                    <MenuItem
                                                        value={ward}
                                                        key={ward.WardID}
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
                                        disabled={isUpdate ? false : true}
                                    >
                                        Cập nhật
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

export default memo(AddressModalEdit)
