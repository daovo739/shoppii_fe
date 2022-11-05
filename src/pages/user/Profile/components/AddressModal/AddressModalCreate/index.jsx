/* eslint-disable react-hooks/exhaustive-deps */
import '../index.css'
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, memo, useReducer } from 'react'
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
    Checkbox,
    Switch,
    FormControlLabel,
} from '@mui/material'
import { Container, Row, Col } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { styled } from '@mui/material/styles'
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
import { handleFormData } from '../../../../../../utils/handleForm'
import { post } from '../../../../../../utils/httprequest'
import { useAuth } from '../../../../../../hooks/useAuth'
import { getCities, getDistricts, getWards } from '../hook/function'

const CheckedDefault = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
        borderRadius: 22 / 2,
        '&:before, &:after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
        },
        '&:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
            left: 12,
        },
        '&:after': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M19,13H5V11H19V13Z" /></svg>')`,
            right: 12,
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: 'none',
        width: 16,
        height: 16,
        margin: 2,
    },
}))

function AddressModalCreate({
    open,
    handleClose,
    addressAction,
    getAddresses,
}) {
    const { user } = useAuth()
    const [state, dispatch] = useReducer(reducer, initState)
    const { cities, districts, wards, city, district, ward } = state
    const [anotherInfo, setAnotherInfo] = useState(addressAction)
    const [isDefault, setIsDefault] = useState(false)
    console.log(isDefault)

    useEffect(() => {
        ;(async () => {
            const cities = await getCities()
            dispatch(setCities(cities))
        })()
    }, [])

    const handleChangeProvince = e => {
        const value = e.target.value
        dispatch(setCity(value))
        const data = getDistricts(value.ProvinceID)
        data.then(districts => {
            dispatch(setDistricts(districts))
        })
    }

    const handleChangeDistrict = e => {
        const value = e.target.value
        dispatch(setDistrict(value))
        const data = getWards(value.DistrictID)
        data.then(wards => {
            dispatch(setWards(wards))
        })
    }

    const handleChangeWard = e => {
        dispatch(setWard(e.target.value))
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
            userId: user.userId,
            province: state.city.ProvinceName,
            district: state.district.DistrictName,
            ward: state.ward.WardName,
            isDefault: isDefault,
        }
        console.log(data)
        const formData = handleFormData(data)
        const res = await post('address', formData)
        console.log(res)
        console.log(await res.json())
        if (res.status === 201) {
            toast.success('Thêm địa chỉ thành công')
        } else {
            toast.error('Thêm địa chỉ thất bại')
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
                <form action="" onSubmit={e => handleCreate(e)}>
                    <Box sx={style}>
                        <Typography
                            id="modal-modal-title"
                            variant="h4"
                            component="h2"
                        >
                            Thêm địa chỉ mới
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
                                            marginBottom: '1.2rem',
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
                            <Row className="mb-3">
                                {/* <Col
                                    md={12}
                                    className="d-flex align-items-center"
                                >
                                    <Checkbox
                                        checked={isDefault}
                                        onChange={() =>
                                            setIsDefault(!isDefault)
                                        }
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 25,
                                            },
                                        }}
                                    />
                                    <span>Đặt làm địa chỉ mặc định</span>
                                </Col> */}
                                <Col
                                    md={12}
                                    className="d-flex align-items-center"
                                >
                                    <FormControlLabel
                                        control={<CheckedDefault />}
                                        onChange={() =>
                                            setIsDefault(!isDefault)
                                        }
                                        label="Đặt làm địa chỉ mặc định"
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
                                        Thêm mới
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

export default memo(AddressModalCreate)
