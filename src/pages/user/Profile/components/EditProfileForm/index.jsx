import React, { useState, useEffect, useRef } from 'react'
import './index.css'
import {
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Button,
    Avatar,
} from '@mui/material'
import { Row, Container, Col } from 'react-bootstrap'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { toast } from 'react-toastify'
import moment from 'moment'
import { handleChange } from '../../../../../utils/handleForm'
import { getImage } from '../../../../../utils/format'
import { useAuth } from '../../../../../hooks/useAuth'
import { put } from '../../../../../utils/httprequest'
import { handleFormData } from '../../../../../utils/handleForm'

function EditProfileForm() {
    const toastId = useRef()
    const { user, updateUserInfo } = useAuth()
    const [date, setDate] = useState(user.dob)
    const [imgURI, setImgURI] = useState(user.avatar)
    const [infoUpdate, setInfoUpdate] = useState({})
    const [isUpdate, setIsUpdate] = useState(false)
    const [sexBoolean, SetSexBoolean] = useState(user.sex)

    const handleChangeFile = e => {
        const file = e.target.files[0]
        const name = e.target.name
        setInfoUpdate({ ...infoUpdate, [name]: file })
    }

    const handleUpdate = async () => {
        toastId.current = toast('Đang cập nhật', { autoClose: false })
        console.log('infoUpdate', infoUpdate.dob)
        console.log('user', user.dob)
        const date = new Date(infoUpdate.dob || user.dob || new Date())
        console.log('date', date)
        console.log(moment(date).format('YYYY-MM-DD'))
        const body = {
            userId: user.userId,
            name: infoUpdate.name || user.name,
            sex: infoUpdate.sex === 'male' ? true : false || user.sex,
            dob: moment(date).format('YYYY-MM-DD'),
            phone: infoUpdate.phone || user.phone || '',
            email: infoUpdate.email || user.email || '',
            file: infoUpdate.file || '',
        }
        const formData = handleFormData(body)
        const res = await put('profile', formData)
        const data = await res.json()
        console.log(body)
        console.log(res)
        console.log(data)
        if (res.status === 200) {
            toast.update(toastId.current, {
                render: 'Cập nhật thành công',
                type: toast.TYPE.SUCCESS,
                autoClose: 1000,
            })
            updateUserInfo({
                ...data,
                hasShop: user.hasShop,
            })
            setIsUpdate(false)
            setInfoUpdate({})
            setDate(data.dob)
            SetSexBoolean(data.sex)
        } else {
            toast.update(toastId.current, {
                render: 'Cập nhật thất bại',
                type: toast.TYPE.ERROR,
                autoClose: 1000,
            })
        }
    }

    useEffect(() => {
        Object.keys(infoUpdate).forEach(key => {
            if (key === 'dob') {
                const date = moment(infoUpdate[key], 'DD/MM/YYYY').format(
                    'MMM DD, YYYY',
                )
                if (date === user[key]) {
                    delete infoUpdate[key]
                }
            }
            if (infoUpdate[key] === '' || infoUpdate[key] === user[key]) {
                delete infoUpdate[key]
            }
            if (key === 'sex') {
                let sexBoolean = infoUpdate[key] === 'male' ? true : false
                if (sexBoolean === user[key]) {
                    delete infoUpdate[key]
                }
                SetSexBoolean(sexBoolean)
            }
        })
        Object.keys(infoUpdate).length > 0
            ? setIsUpdate(true)
            : setIsUpdate(false)
    }, [infoUpdate])

    return (
        <Container fluid="md">
            <Row>
                <Col md={8} className="profile-content">
                    <Container>
                        <Row>
                            <TextField
                                required
                                id="outlined-required"
                                label="Tên"
                                defaultValue={user.name}
                                name="name"
                                size="small"
                                margin="normal"
                                fullWidth
                                onChange={e => handleChange(e, setInfoUpdate)}
                                inputProps={{ style: { fontSize: '1.3rem' } }}
                                InputLabelProps={{
                                    style: { fontSize: '1.3rem' },
                                }}
                            />
                        </Row>
                        <Row>
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                defaultValue={user.email}
                                size="small"
                                margin="normal"
                                name="email"
                                fullWidth
                                onChange={e => handleChange(e, setInfoUpdate)}
                                inputProps={{ style: { fontSize: '1.3rem' } }}
                                InputLabelProps={{
                                    style: { fontSize: '1.3rem' },
                                }}
                                InputProps={{
                                    label: 'Email aa',
                                }}
                                disabled={user.email ? true : false}
                            />
                        </Row>
                        <Row>
                            <TextField
                                required
                                id="outlined-required"
                                label="Số điện thoại"
                                defaultValue={user.phone}
                                name="phone"
                                size="small"
                                margin="normal"
                                fullWidth
                                onChange={e => handleChange(e, setInfoUpdate)}
                                inputProps={{ style: { fontSize: '1.3rem' } }}
                                InputLabelProps={{
                                    style: { fontSize: '1.3rem' },
                                }}
                                InputProps={{
                                    label: 'Số điện thoại aaaa',
                                }}
                                disabled={user.phone ? true : false}
                            />
                        </Row>
                        <Row>
                            <FormControl>
                                <FormLabel
                                    id="demo-row-radio-buttons-group-label"
                                    sx={{ fontSize: '1.2rem' }}
                                >
                                    Giới tính
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="sex"
                                    onChange={e =>
                                        handleChange(e, setInfoUpdate)
                                    }
                                >
                                    <FormControlLabel
                                        value="male"
                                        control={<Radio size="medium" />}
                                        label="Nam"
                                        checked={
                                            sexBoolean === true ? true : false
                                        }
                                    />
                                    <FormControlLabel
                                        value="female"
                                        control={<Radio size="medium" />}
                                        label="Nữ"
                                        checked={
                                            sexBoolean === false ? true : false
                                        }
                                    />
                                </RadioGroup>
                            </FormControl>{' '}
                        </Row>
                        <Row className="my-3">
                            <Col md={12} className="p-0">
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DatePicker
                                        label="Ngày sinh"
                                        value={date}
                                        inputFormat="DD-MM-YYYY"
                                        onChange={newValue => {
                                            const dob = `${newValue.$D}-${
                                                newValue.$M + 1
                                            }-${newValue.$y}`
                                            setDate(newValue)
                                            setInfoUpdate({
                                                ...infoUpdate,
                                                dob,
                                            })
                                        }}
                                        renderInput={params => {
                                            return (
                                                <TextField
                                                    {...params}
                                                    size="small"
                                                    InputProps={{
                                                        ...params.InputProps,
                                                        label: 'Ngày sinh aaaa',
                                                    }}
                                                />
                                            )
                                        }}
                                    />
                                </LocalizationProvider>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center pt-2">
                            <Button
                                variant="contained"
                                className="fs-6 w-25 mt-3"
                                onClick={handleUpdate}
                                disabled={!isUpdate}
                            >
                                Lưu
                            </Button>
                        </Row>
                    </Container>
                </Col>
                <Col md={4} className="profile-avatar pt-5 d-block">
                    <Container>
                        <Row>
                            <Avatar
                                alt="Remy Sharp"
                                src={imgURI}
                                sx={{ width: 125, height: 125 }}
                                className="mx-auto my-0"
                            />
                        </Row>
                        <Row className="d-flex justify-content-center">
                            {user.isGoogle ? null : (
                                <Button
                                    variant="outlined"
                                    className="fs-5 w-50 mt-3"
                                    size="medium"
                                    component="label"
                                >
                                    Chọn ảnh
                                    <input
                                        hidden
                                        accept=".jpeg,.jpg,.png,.gif,image/*"
                                        type="file"
                                        name="file"
                                        encType="multipart/form-data"
                                        onChange={e => {
                                            setImgURI(getImage(e))
                                            handleChangeFile(e)
                                        }}
                                    />
                                </Button>
                            )}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default EditProfileForm
