import './index.css'
import { useEffect, useState, useRef } from 'react'
import { Row, Col, Button, Modal, Overlay, Popover } from 'react-bootstrap'
import {
    Box,
    TextField,
    Divider,
    InputAdornment,
    Button as ButtonMUI,
} from '@mui/material'
import { handleChange } from '../../../utils/handleForm'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ImageGallery from '../../../components/ImageGallery'

function SingleShopProduct() {
    const popover = useRef(null)
    const { state } = useLocation()
    const navigate = useNavigate()
    console.log(state)
    const [product, setProductUpdate] = useState({})

    return (
        <Box sx={{ paddingTop: '120px' }}>
            <Box>
                <h1>Chỉnh sửa sản phẩm</h1>
            </Box>
            <Box component="form">
                <Row>
                    <Col md={6} className="d-flex flex-column ">
                        <ImageGallery />
                        <Box
                            style={{
                                paddingLeft: '60px',
                            }}
                        >
                            <Button
                                variant="primary"
                                as="label"
                                className="fs-4 w-50 mt-3"
                                size="lg"
                                disabled={false ? true : false}
                                ref={popover}
                                style={{
                                    position: 'relative',
                                }}
                            >
                                Tải thêm ảnh
                                <input
                                    hidden
                                    accept=".jpeg,.jpg,.png,.gif,image/*"
                                    type="file"
                                    onChange={e => {
                                        // setImgURI(getImage(e))
                                        // handleChange(e, setInfoUpdate)
                                    }}
                                />
                            </Button>
                            <Overlay
                                target={popover.current}
                                show={false}
                                placement="bottom"
                            >
                                {({
                                    placement,
                                    arrowProps,
                                    show: _show,
                                    popper,
                                    ...props
                                }) => (
                                    <div
                                        {...props}
                                        style={{
                                            position: 'absolute',
                                            fontSize: '1.1rem',
                                            color: 'red',
                                            // marginLeft: '50px',
                                            marginTop: '10px',
                                            ...props.style,
                                        }}
                                    >
                                        Đã quá số lượng ảnh cho phép. Hãy xóa
                                        bớt để có thể tải ảnh mới!
                                    </div>
                                )}
                            </Overlay>
                        </Box>
                    </Col>
                    <Col md={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Thay đổi tên"
                            name="name"
                            autoComplete="name"
                            defaultValue={state.name}
                            InputProps={{
                                label: 'Thay đổi tên aaaaa',
                                onChange: e =>
                                    handleChange(e, setProductUpdate),
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Thay đổi giá"
                            name="price"
                            autoComplete="price"
                            defaultValue={state.price}
                            InputProps={{
                                label: 'Thay đổi giá aaaaa',
                                onChange: e =>
                                    handleChange(e, setProductUpdate),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        VND
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Thay đổi số lượng"
                            name="quantity"
                            autoComplete="quantity"
                            defaultValue={state.quantity}
                            InputProps={{
                                label: 'Thay đổi số lượng aaaaa',
                                onChange: e =>
                                    handleChange(e, setProductUpdate),
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Thay đổi mô tả"
                            name="description"
                            autoComplete="description"
                            multiline
                            minRows={6}
                            maxRows={12}
                            defaultValue={state.description}
                            InputProps={{
                                label: 'Thay đổi mô tả aaaaa',
                                onChange: e =>
                                    handleChange(e, setProductUpdate),
                            }}
                        />
                        <Box className="d-flex justify-content-start mt-3">
                            <Button
                                variant="secondary"
                                style={{
                                    padding: '10px 20px',
                                    marginRight: '10px',
                                    fontSize: '1.3rem',
                                }}
                                onClick={() => navigate('/shop/products')}
                            >
                                Huỷ
                            </Button>
                            <Button
                                variant="primary"
                                style={{
                                    padding: '10px 20px',

                                    fontSize: '1.3rem',
                                }}
                                type="submit"
                            >
                                Chỉnh sửa
                            </Button>
                        </Box>
                    </Col>
                </Row>
            </Box>
        </Box>
    )
}

export default SingleShopProduct
