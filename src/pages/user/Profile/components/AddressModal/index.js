import React, { useEffect } from 'react'
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

function AddressModal() {
    const [open, setOpen] = React.useState(false)
    const [cities, setCities] = React.useState([])
    const [age, setAge] = React.useState('')

    const handleChange = event => {
        setAge(event.target.value)
    }

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    React.useEffect(() => {
      const fetchAddress = async () => await (await fetch('https://provinces.open-api.vn/api/?depth=3')).json()
      console.log('hello')
      console.log(cities)
    }, [])

    return (
        <div>
            <Box
                className="add-new-address d-flex justify-content-center"
                component="span"
                onClick={handleOpen}
                sx={{ p: 2, border: '1px dashed grey' }}
            >
                <AddOutlinedIcon sx={{ fontSize: '25px', color: 'gray' }} />
                <div className="ms-3 pt-1">THÊM ĐỊA CHỈ MỚI</div>
            </Box>
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
                        Thêm địa chỉ mới
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
                                        value={age}
                                        label="Tỉnh/Thành phố #"
                                        onChange={handleChange}
                                    >
                                      {/* {cities.map(city => (
                                        <MenuItem value={city.code} key={city.code}>{city.name}</MenuItem>
                                      ))} */}
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
                                        value={age}
                                        label="Quận/Huyện #"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
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
                                        value={age}
                                        label="Phường/Xã #"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
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
                                    sx={{ fontSize: '1.5rem', height: '4rem', marginBottom: '2.5rem' }}
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
