import './index.css'
import { useEffect, useState, useRef } from 'react'
import { Row, Col, Button, Modal, Overlay, Popover } from 'react-bootstrap'
import {
    Box,
    TextField,
    Divider,
    InputAdornment,
    Button as ButtonMUI,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from '@mui/material'
import { handleChange, handleFormData } from '../../../utils/handleForm'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import ImageGallery from '../../../components/ImageGallery'
import { put, get } from '../../../utils/httprequest'
import queryString from 'query-string'
import { toast } from 'react-toastify'

function SingleShopProduct() {
    const popover = useRef(null)
    const { state } = useLocation()
    const navigate = useNavigate()
    const {user} = useAuth()
    const [product, setProductUpdate] = useState({
        name: '',
        price: '',
        quantity: '',
        categoryId: '',
        description: ''
    })
    console.log(product);

    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        const q = queryString.stringify({})
        const res = await get('category', q)
        const data = await res.json()
        setCategories(data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    const handleEdit = async () => {
        const formData = handleFormData({
            productId: state.productId,
            shopId: user.userId,
            name: product.name !== '' ? product.name : state.name,
            price: product.price !== '' ? product.price : state.price,
            quantity: product.quantity !== '' ? product.quantity : state.quantity,
            categoryId: product.categoryId !== '' ? product.categoryId : state.category.category_id,
            description: product.description !== '' ? product.description : state.description
        })
        const res = await put('shop/products', formData)
        if (res.status === 201){
            toast.success('Cập nhật sản phẩm thành công')
        } else {
            toast.error('Cập nhật sản phẩm không thành công')
        }
    }
    return (
        <Box sx={{ paddingTop: '5px' }}>
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
                        <FormControl
                                        fullWidth
                                        className="mt-4 mb-2"
                                    >
                                        <InputLabel id="demo-simple-select-label">
                                            Thể loại
                                        </InputLabel>
                                        <Select
                                            name="categoryId"
                                            defaultValue={state.category.category_id}
                                            label="Thể loại"
                                            inputProps={{
                                                label: 'Thể loại aaaa',
                                            }}
                                            onChange={e =>
                                                handleChange(e, setProductUpdate)
                                            }
                                        >
                                            {categories.map(cate => (
                                                <MenuItem
                                                    key={cate.category_id}
                                                    value={cate.category_id}
                                                >
                                                    {cate.category_name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
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
                                onClick={() => {
                                    navigate('/shop/products')
                                    handleEdit()
                                }}
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
