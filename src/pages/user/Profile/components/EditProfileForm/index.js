import React, { useState, useEffect } from 'react'
import './index.css'
import {
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    InputLabel,
    MenuItem,
    Select,
    Button,
    Avatar,
} from '@mui/material'
import { Row, Container, Col } from 'react-bootstrap'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { handleChange } from '../../../../../utils/handleForm'
import { getImage } from '../../../../../utils/format'
import { useAuth } from '../../../../../hooks/useAuth'
import { toast } from 'react-toastify'
import moment from 'moment'

function EditProfileForm() {
    const { user } = useAuth()
    const [date, setDate] = useState(user.dob)
    const [imgURI, setImgURI] = useState()
    const [infoUpdate, setInfoUpdate] = useState({})
    const [isUpdate, setIsUpdate] = useState(false)
    const [sexBoolean, SetSexBoolean] = useState(user.sex)
    const handleUpdate = () => {
        console.log(infoUpdate)
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

        console.log(infoUpdate)
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
                        <Row className="mt-3">
                            <Col md={12}>
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DatePicker
                                        label="Ngày sinh"
                                        value={date}
                                        inputFormat="DD-MM-YYYY"
                                        onChange={newValue => {
                                            const dob = `${newValue.$D}/${
                                                newValue.$M + 1
                                            }/${newValue.$y}`
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
                                className="fs-6 w-25"
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
                                    name="avatar"
                                    onChange={e => {
                                        setImgURI(getImage(e))
                                        handleChange(e, setInfoUpdate)
                                    }}
                                />
                            </Button>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default EditProfileForm
