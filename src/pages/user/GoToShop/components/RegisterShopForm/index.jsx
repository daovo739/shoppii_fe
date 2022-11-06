import { useState } from 'react'
import { Button, TextField, TextareaAutosize } from '@mui/material'
import { Container, Row, Col } from 'react-bootstrap'
import { AddBusiness } from '@mui/icons-material'
import { post } from '../../../../../utils/httprequest'
import { handleChange, handleFormData } from '../../../../../utils/handleForm'
import { useAuth } from '../../../../../hooks/useAuth'
import { toast } from 'react-toastify'

function RegisterShopForm() {
    const { user } = useAuth()
    const [shopInfo, setShopInfo] = useState({
        name: '',
        address: '',
        description: '',
    })

    const handleSubmit = async e => {
        e.preventDefault()
        const formData = handleFormData({
            userId: user.userId,
            shopName: shopInfo.name,
            address: shopInfo.address,
            description: shopInfo.description,
        })
        const res = await post('shop/register', formData)
        if (res.status === 201) {
            toast.success('Gửi yêu cầu thành công')
        } else {
            toast.error('Gửi yêu cầu không thành công')
        }
        setShopInfo({
            name: '',
            address: '',
            description: '',
        })
    }

    return (
        <>
            <Container fluid="md">
                <form onSubmit={handleSubmit}>
                    <Row className="mt-5">
                        <Col
                            md={{ span: 11, offset: 1 }}
                            className="d-flex align-items-center"
                        >
                            <AddBusiness sx={{ fontSize: '35px' }} />
                            <p
                                style={{
                                    fontSize: '3rem',
                                    marginLeft: '1.5rem',
                                }}
                            >
                                Đăng ký để bán hàng ngay
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={{ span: 2, offset: 1 }}>
                            <div style={{ fontSize: '2rem' }}>
                                Tên cửa hàng{' '}
                                <span className="text-danger">*</span>
                            </div>
                        </Col>
                        <Col md={7}>
                            <TextField
                                required
                                fullWidth
                                size="small"
                                id="outlined-basic"
                                label="Tên cửa hàng"
                                variant="outlined"
                                name="name"
                                InputProps={{ label: 'Tên cửa hàng ####' }}
                                onChange={e => handleChange(e, setShopInfo)}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={{ span: 2, offset: 1 }}>
                            <div style={{ fontSize: '2rem' }}>
                                Địa chỉ cửa hàng{' '}
                                <span className="text-danger">*</span>
                            </div>
                        </Col>
                        <Col md={7}>
                            <TextField
                                required
                                fullWidth
                                size="small"
                                id="outlined-basic"
                                label="Địa chỉ cửa hàng"
                                name="address"
                                variant="outlined"
                                InputProps={{ label: 'Địa chỉ cửa hàng #####' }}
                                onChange={e => handleChange(e, setShopInfo)}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={{ span: 2, offset: 1 }}>
                            <div style={{ fontSize: '2rem' }}>Mô tả</div>
                        </Col>
                        <Col md={7}>
                            <TextareaAutosize
                                required
                                aria-label="Mô tả"
                                minRows={7}
                                placeholder="Mô tả"
                                name="description"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    fontSize: '1.5rem',
                                }}
                                onChange={e => handleChange(e, setShopInfo)}
                            />
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center align-items-center mt-5">
                        <Button
                            variant="contained"
                            sx={{ fontSize: '1.5rem', width: '10rem' }}
                            type="submit"
                        >
                            Đăng ký
                        </Button>
                    </Row>
                </form>
            </Container>
        </>
    )
}

export default RegisterShopForm
