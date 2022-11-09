import { useState, useEffect } from 'react'
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
import { handleChange, handleFormData } from '../../../utils/handleForm'
import { post, put, get, _delete } from '../../../utils/httprequest'
import { useAuth } from '../../../hooks/useAuth'
import queryString from 'query-string'
import FormShop from './formShop'
import { toast } from 'react-toastify'

function ShopProfile() {
    const { user } = useAuth()
    const [showModalDeleteShop, setShowModalDeleteShop] = useState(false)
    const [imgURI, setImgURI] = useState(user.avatar)
    const [shopInfo, setShopInfo] = useState({})
    const [infoUpdate, setInfoUpdate] = useState({
        name: '',
        address: '',
        description: '',
    })

    const handleDeleteShop = async e => {
        const formData = handleFormData({
            shopId: shopInfo.shopId,
        })
        const res = await _delete('shop/profiles', formData)
        console.log(await res.json())
        e.preventDefault()
    }

    const handleUpdate = async () => {
        const formData = handleFormData({
            shopId: shopInfo.shopId,
            name: infoUpdate.name !== '' ? infoUpdate.name : shopInfo.name,
            address:
                infoUpdate.address !== ''
                    ? infoUpdate.address
                    : shopInfo.address,
            description:
                infoUpdate.description !== ''
                    ? infoUpdate.description
                    : shopInfo.description,
        })
        const res = await put('shop/profile', formData)
        console.log(await res.json())
        if (res.status === 201) {
            toast.success('Cập nhật thành công')
        } else {
            toast.error('Cập nhật không thành công')
        }
    }

    const handleChangeFile = e => {
        const file = e.target.files[0]
        const name = e.target.name
        // console.log(file)
        setInfoUpdate({ ...infoUpdate, [name]: file })
    }

    const getInformation = async () => {
        const q = queryString.stringify({
            shopId: user.userId,
        })
        const res = await get(`/shop/profile`, q)
        const data = await res.json()
        console.log(data)
        setShopInfo(data)
    }

    useEffect(() => {
        getInformation()
    }, [])

    return shopInfo.name ? (
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
                        {/* <Row className="d-flex justify-content-center">
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
                                    onChange={e => handleChangeFile(e)}
                                />
                            </Button>
                        </Row> */}
                    </Container>
                </Col>
                <FormShop
                    shopInfo={shopInfo}
                    setInfoUpdate={setInfoUpdate}
                    handleUpdate={handleUpdate}
                    infoUpdate={infoUpdate}
                />
                <Col md={12}>
                    {/* <ButtonBootstrap
                        variant="danger"
                        className="mt-5"
                        style={{
                            padding: '10px 20px',
                            fontSize: '1.5rem',
                        }}
                        onClick={() => setShowModalDeleteShop(true)}
                    >
                        Hủy bán hàng
                    </ButtonBootstrap> */}
                </Col>
            </Row>
            {/* <Modal
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
                            onClick={e => handleDeleteShop(e)}
                            type="submit"
                            className="btnModal"
                        >
                            Hủy bán hàng
                        </ButtonBootstrap>
                    </Modal.Footer>
                </Form>
            </Modal> */}
        </Container>
    ) : null
}

export default ShopProfile
