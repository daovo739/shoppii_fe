import { useEffect, useState, useRef } from 'react'
import {
    Modal,
    Button,
    Typography,
    Box,
    TextField,
    InputAdornment,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    IconButton,
} from '@mui/material'
import { FileUpload } from '@mui/icons-material'
import { style } from '../../../../../components/ModalStyle'
import { Row, Col, Overlay } from 'react-bootstrap'
import ImageGallery from '../../../../../components/ImageGallery'
import { handleChange, handleFormData } from '../../../../../utils/handleForm'
import { useAuth } from '../../../../../hooks/useAuth'
import { post, get } from '../../../../../utils/httprequest'
import queryString from 'query-string'
import { toast } from 'react-toastify'

function CreateProductModal({ open, handleClose, fetchProducts }) {
    const toastId = useRef()
    const [productInfo, setProductInfo] = useState({
        name: '',
        price: '',
        quantity: '',
        categoryId: '',
        description: '',
    })
    const { user } = useAuth()
    const [categories, setCategories] = useState([])
    const [images, setImages] = useState([])

    const getCategories = async () => {
        const q = queryString.stringify({})
        const res = await get('category', q)
        const data = await res.json()
        setCategories(data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    const handleUploadImage = e => {
        const files = Array.from(e.target.files).slice(0, 5)
        const arr = []
        files.forEach(file =>
            arr.push({
                file,
                image: URL.createObjectURL(file),
            }),
        )
        setImages(arr)
    }

    const handleSubmit = async e => {
        e.preventDefault()

        toastId.current = toast('Đang tạo sản phẩm', { autoClose: false })
        const formData = handleFormData({
            shopId: user.userId,
            name: productInfo.name,
            price: productInfo.price,
            quantity: productInfo.quantity,
            categoryId: productInfo.categoryId,
            description: productInfo.description,
        })
        images.forEach(image => formData.append('files', image.file))
        const res = await post('shop/products', formData)
        // console.log(await res.json())
        if (res.status === 201) {
            toast.update(toastId.current, {
                render: 'Tạo sản phẩm thành công',
                type: toast.TYPE.SUCCESS,
                autoClose: 600,
            })
        } else {
            toast.update(toastId.current, {
                render: 'Tạo sản phẩm thất bại',
                type: toast.TYPE.ERROR,
                autoClose: 600,
            })
        }
        handleClose()
        setImages([])
        fetchProducts()
    }

    return (
        <>
            <Modal
                open={open}
                onClose={() => {
                    handleClose
                    setImages([])
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...style, width: '80%', padding: '2rem' }}>
                    <Typography
                        id="modal-modal-title"
                        variant="h4"
                        component="h2"
                    >
                        Tạo sản phẩm mới
                    </Typography>
                    <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2 }}
                        component="div"
                    >
                        <Box component="form" onSubmit={e => handleSubmit(e)}>
                            <Row>
                                <Col md={6} className="d-flex flex-column ">
                                    <ImageGallery
                                        isDelete={false}
                                        images={images}
                                    />
                                    <Box
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '100%',
                                            marginTop: '1rem',
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontSize: '1.2rem',
                                                color: 'red',
                                                marginRight: '1rem',
                                            }}
                                        >
                                            Chỉ được phép tải tối đa 5 ảnh
                                        </p>
                                        <Button
                                            variant="outlined"
                                            component="label"
                                            sx={{
                                                padding: '1rem 2rem',
                                                fontSize: '1.2rem',
                                            }}
                                        >
                                            Tải ảnh lên
                                            <input
                                                hidden
                                                encType="multipart/form-data"
                                                accept=".jpeg,.jpg,.png,.gif,image/*"
                                                type="file"
                                                onChange={e => {
                                                    handleUploadImage(e)
                                                }}
                                                multiple
                                            />
                                            <FileUpload
                                                style={{
                                                    fontSize: '2rem',
                                                }}
                                            />
                                        </Button>
                                    </Box>
                                </Col>
                                <Col md={6}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Tên"
                                        name="name"
                                        autoComplete="name"
                                        value={productInfo.name}
                                        InputProps={{
                                            label: 'Tên a',
                                            onChange: e =>
                                                handleChange(e, setProductInfo),
                                        }}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        type="number"
                                        label="Giá"
                                        name="price"
                                        autoComplete="price"
                                        value={productInfo.price}
                                        InputProps={{
                                            label: 'Giá a',
                                            onChange: e =>
                                                handleChange(e, setProductInfo),
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
                                        label="Số lượng"
                                        name="quantity"
                                        autoComplete="quantity"
                                        value={productInfo.quantity}
                                        InputProps={{
                                            label: 'Số lượng aaa',
                                            onChange: e =>
                                                handleChange(e, setProductInfo),
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
                                            value={productInfo.categoryId}
                                            label="Thể loại"
                                            inputProps={{
                                                label: 'Thể loại aaaa',
                                            }}
                                            onChange={e =>
                                                handleChange(e, setProductInfo)
                                            }
                                        >
                                            {categories?.map(cate => (
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
                                        fullWidth
                                        label="Mô tả"
                                        name="description"
                                        autoComplete="description"
                                        multiline
                                        minRows={6}
                                        maxRows={12}
                                        value={productInfo.description}
                                        InputProps={{
                                            label: 'Mô tả aa',
                                            onChange: e =>
                                                handleChange(e, setProductInfo),
                                        }}
                                    />
                                    <Box className="d-flex justify-content-end mt-3">
                                        <Button
                                            variant="contained"
                                            sx={{
                                                padding: '10px 20px',
                                                marginRight: '20px',
                                                fontSize: '1.3rem',
                                                backgroundColor:
                                                    'var(--main-red)',
                                            }}
                                            onClick={() => {
                                                handleClose()
                                                setProductInfo({
                                                    name: '',
                                                    price: '',
                                                    quantity: '',
                                                    categoryId: '',
                                                    description: '',
                                                })
                                                setImages([])
                                            }}
                                        >
                                            Huỷ
                                        </Button>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                padding: '10px 20px',
                                                fontSize: '1.3rem',
                                            }}
                                            type="submit"
                                        >
                                            Xác nhận
                                        </Button>
                                    </Box>
                                </Col>
                            </Row>
                        </Box>
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default CreateProductModal
