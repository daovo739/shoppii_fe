import React, { useState } from 'react'
import './index.css'
import { TextField, Button, Avatar } from '@mui/material'
import {
    Row,
    Container,
    Col,
    Button as ButtonBootstrap,
    Modal,
    Form,
} from 'react-bootstrap'
import { getImage } from '../../../utils/format'
import { handleChange } from '../../../utils/handleForm'

function ShopProfile() {
    const [date, setDate] = useState()
    const [showModalDeleteShop, setShowModalDeleteShop] = useState(false)
    const [imgURI, setImgURI] = useState()
    const [infoUpdate, setInfoUpdate] = useState()

    const handleDeleteShop = () => {}
    // console.log(date)

    const handleUpdate = () => {
        console.log(infoUpdate)
    }

    return (
        <Container
            fluid="md"
            style={{
                paddingTop: '120px',
            }}
        >
            <Row>
                <Col md={12}>
                    <h1>Hồ sơ cửa hàng</h1>
                    <hr />
                </Col>
                <Col md={5} className="profile-avatar pt-5 d-block">
                    <Container>
                        <Row>
                            <Avatar
                                alt="Remy Sharp"
                                src={imgURI}
                                sx={{ width: 200, height: 200 }}
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
                                    onChange={e => {
                                        setImgURI(getImage(e))
                                        handleChange(e, setInfoUpdate)
                                    }}
                                />
                            </Button>
                        </Row>
                    </Container>
                </Col>
                <Col
                    md={7}
                    className="profile-content d-flex align-items-center"
                >
                    <Container>
                        <Row>
                            <TextField
                                required
                                id="outlined-required"
                                label="Tên cửa hàng"
                                defaultValue=""
                                size="small"
                                margin="normal"
                                fullWidth
                                name="name"
                                onChange={e => handleChange(e, setInfoUpdate)}
                                inputProps={{ style: { fontSize: '1.3rem' } }}
                                InputLabelProps={{
                                    style: { fontSize: '1.3rem' },
                                }}
                                InputProps={{
                                    label: 'Tên cửa hàng aaaa',
                                }}
                            />
                        </Row>
                        <Row>
                            <TextField
                                id="outlined-required"
                                label="Địa chỉ"
                                defaultValue=""
                                size="small"
                                margin="normal"
                                fullWidth
                                name="address"
                                onChange={e => handleChange(e, setInfoUpdate)}
                                inputProps={{ style: { fontSize: '1.3rem' } }}
                                InputLabelProps={{
                                    style: { fontSize: '1.3rem' },
                                }}
                                InputProps={{
                                    label: 'Địa chỉ aa',
                                }}
                            />
                        </Row>

                        <Row className="d-flex justify-content-center pt-2">
                            <Button
                                variant="contained"
                                className="fs-4 w-25"
                                onClick={handleUpdate}
                            >
                                Lưu
                            </Button>
                        </Row>
                    </Container>
                </Col>
                <Col
                    md={12}
                    style={{
                        maxWidth: '50%',
                        marginTop: '10px',
                    }}
                    className="d-flex justify-content-center flex-column"
                >
                    <TextField
                        id="outlined-required"
                        label="Mô tả cửa hàng"
                        defaultValue=""
                        size="small"
                        margin="normal"
                        name="description"
                        onChange={e => handleChange(e, setInfoUpdate)}
                        fullWidth
                        multiline
                        minRows={8}
                        maxRows={12}
                        inputProps={{ style: { fontSize: '1.3rem' } }}
                        InputLabelProps={{
                            style: { fontSize: '1.3rem' },
                        }}
                        InputProps={{
                            label: 'Mô tả aaaaaaaaaaaaa',
                        }}
                    />
                    <ButtonBootstrap
                        variant="danger"
                        className="mt-5"
                        style={{
                            padding: '10px 20px',
                            fontSize: '1.5rem',
                        }}
                        onClick={() => setShowModalDeleteShop(true)}
                    >
                        Hủy bán hàng
                    </ButtonBootstrap>
                </Col>
            </Row>
            <Modal
                show={showModalDeleteShop}
                onHide={() => setShowModalDeleteShop(false)}
                centered
            >
                <Modal.Header closeButton></Modal.Header>
                <Form>
                    <Modal.Body>
                        <Form.Group
                            style={{
                                paddingLeft: '20px',
                            }}
                        >
                            <Form.Label>
                                Nhập mật khẩu để xác nhận hủy bán hàng
                            </Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Nhập mật khẩu"
                                style={{
                                    padding: '10px 20px',
                                    width: '50%',
                                    fontSize: '1.3rem',
                                }}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <ButtonBootstrap
                            variant="secondary"
                            onClick={() => setShowModalDeleteShop(false)}
                            className="btnModal"
                        >
                            Huỷ
                        </ButtonBootstrap>
                        <ButtonBootstrap
                            variant="danger"
                            onClick={handleDeleteShop}
                            type="submit"
                            className="btnModal"
                        >
                            Hủy bán hàng
                        </ButtonBootstrap>
                    </Modal.Footer>
                </Form>
            </Modal>
        </Container>
    )
}

export default ShopProfile
