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
    FormControlLabel,
} from '@mui/material'
import { Container, Row, Col } from 'react-bootstrap'
import { toast } from 'react-toastify'
import {
    setCities,
    setDistricts,
    setWards,
    setCity,
    setDistrict,
    setWard,
} from '../hook/actions.js'
import { reset, style, provinces } from '../hook/instant'
import { handleChange } from '../../../../../../utils/handleForm'
import reducer, { initState } from '../hook/reducer'
import { handleFormData } from '../../../../../../utils/handleForm'
import { post } from '../../../../../../utils/httprequest'
import { useAuth } from '../../../../../../hooks/useAuth'
import { getCities, getDistricts, getWards } from '../hook/function'
import CheckedDefault from '../../../../../../components/CheckedDefaultSwitch'

function AddressModalCreate({
    open,
    handleClose,
    addressAction = {},
    getAddresses,
}) {
    const { user } = useAuth()
    const [state, dispatch] = useReducer(reducer, initState)
    const { cities, districts, wards, city, district, ward } = state
    const [anotherInfo, setAnotherInfo] = useState(addressAction)
    const [isDefault, setIsDefault] = useState(false)

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
            toast.error('Vui l??ng ch???n ?????y ????? ?????a ch???')
            return
        }
        const data = {
            ...anotherInfo,
            userId: user.userId,
            province: state.city.ProvinceName,
            district: state.district.DistrictName,
            ward: state.ward.WardName,
            // isDefault: isDefault,
        }
        console.log(data)
        const formData = handleFormData(data)
        const res = await post('address', formData)
        console.log(res)
        console.log(await res.json())
        if (res.status === 201) {
            toast.success('Th??m ?????a ch??? th??nh c??ng')
        } else {
            toast.error('Th??m ?????a ch??? th???t b???i')
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
                            Th??m ?????a ch??? m???i
                        </Typography>
                        <Container fluid="md">
                            <Row>
                                <Col md={6}>
                                    <TextField
                                        required
                                        name="receiverName" // name of input
                                        label="H??? v?? t??n"
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
                                            label: 'H??? v?? t??n ###',
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
                                        label="S??? ??i???n tho???i"
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
                                            label: 'S??? ??i???n tho???i ####',
                                            inputProps: {
                                                pattern: import.meta.env
                                                    .REACT_APP_REGEX_AUTH_LOGIN,
                                                title: 'Vui l??ng nh???p s??? ??i???n tho???i',
                                            },
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
                                            T???nh/Th??nh ph???
                                        </InputLabel>
                                        <Select
                                            required
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={city}
                                            label="T???nh/Th??nh ph??? #"
                                            onChange={handleChangeProvince}
                                        >
                                            {provinces?.map(city => (
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
                                            Qu???n/Huy???n
                                        </InputLabel>
                                        <Select
                                            required
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={district}
                                            label="Qu???n/Huy???n #"
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
                                            Ph?????ng/X??
                                        </InputLabel>
                                        <Select
                                            required
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={ward}
                                            label="Ph?????ng/X?? #"
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
                                        label="?????a ch??? c??? th???"
                                        defaultValue={
                                            addressAction?.receiverAddress
                                        }
                                        variant="outlined"
                                        sx={{
                                            marginBottom: '1.2rem',
                                            width: '100%',
                                        }}
                                        InputProps={{
                                            label: '?????a ch??? c??? th??? ####',
                                        }}
                                        onChange={e =>
                                            handleChange(e, setAnotherInfo)
                                        }
                                    />
                                </Col>
                            </Row>
                            {/* <Row className="mb-3">
                                <Col
                                    md={12}
                                    className="d-flex align-items-center my-3"
                                >
                                    <FormControlLabel
                                        control={<CheckedDefault />}
                                        onChange={() =>
                                            setIsDefault(!isDefault)
                                        }
                                        label={
                                            <span
                                                style={{ fontSize: '1.6rem' }}
                                            >
                                                ?????t l??m ?????a ch??? m???c ?????nh
                                            </span>
                                        }
                                    />
                                </Col>
                            </Row> */}
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
                                        Hu???
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
                                        Th??m m???i
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
