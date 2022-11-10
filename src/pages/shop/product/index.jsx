import './index.css'
import { useEffect, useState, useRef } from 'react'
import { Row, Col } from 'react-bootstrap'
import {
    Box,
    TextField,
    InputAdornment,
    Button,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    CircularProgress,
} from '@mui/material'
import { handleChange, handleFormData } from '../../../utils/handleForm'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import ImageGallery from '../../../components/ImageGallery'
import { put, get } from '../../../utils/httprequest'
import queryString from 'query-string'
import { toast } from 'react-toastify'
import { FileUpload } from '@mui/icons-material'

function SingleShopProduct() {
    const toastId = useRef(null)
    const { id } = useParams()
    const { user } = useAuth()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const [productUpdate, setProductUpdate] = useState({})
    const [oldProduct, setOldProduct] = useState({})
    const [categories, setCategories] = useState([])
    const [images, setImages] = useState([])
    const [imagesDeleted, setImagesDeleted] = useState([])
    const [imagesAdded, setImagesAdded] = useState([])

    const getCategories = async () => {
        const q = queryString.stringify({})
        const res = await get('category', q)
        const data = await res.json()
        setCategories(data)
    }

    const getProduct = async () => {
        const q = queryString.stringify({ productId: id })
        const res = await get('product', q)
        const data = await res.json()
        setOldProduct(data)
        setImages(
            data.images.map(image => {
                return {
                    image,
                }
            }),
        )
    }

    useEffect(() => {
        getCategories()
        getProduct()
        setIsLoading(false)
    }, [])

    const handleDeleteImage = image => {
        if (image.startsWith('blob')) {
            const newImages = prev => prev.filter(img => img.image !== image)
            setImagesAdded(newImages)
            setImages(newImages)
        } else {
            const newImages = images.filter(img => img.image !== image)
            setImagesDeleted(prev => [...prev, image])
            setImages(newImages)
        }
    }

    const handleUploadImage = e => {
        const file = e.target.files[0]
        const image = URL.createObjectURL(file)
        setImagesAdded(prev => [
            ...prev,
            {
                file,
                image,
            },
        ])
        setImages(prev => [...prev, { image }])
    }

    const handleEdit = async () => {
        toastId.current = toast('Đang cập nhật', { autoClose: false })
        const formSubmit = {
            productId: oldProduct.productId,
            shopId: user.userId,
            name: productUpdate.name || oldProduct.name,
            price: productUpdate.price || oldProduct.price,
            quantity: productUpdate.quantity || oldProduct.quantity,
            categoryId:
                productUpdate.categoryId || oldProduct.category.category_id,
            description: productUpdate.description || oldProduct.description,
        }
        console.log(formSubmit)
        const formData = handleFormData(formSubmit)
        imagesDeleted.forEach(image => {
            formData.append('images', image)
        })
        imagesAdded.forEach(image => {
            formData.append('imageAdded', image.file)
        })
        const res = await put('shop/products', formData)
        const data = await res.json()
        console.log(res)
        console.log(data)
        if (res.status === 201) {
            toast.update(toastId.current, {
                render: 'Cập nhật thành công',
                type: toast.TYPE.SUCCESS,
                autoClose: 600,
            })
            setImagesAdded([])
            setImagesDeleted([])
            setProductUpdate({})
            getProduct()
        } else {
            toast.update(toastId.current, {
                render: 'Cập nhật thất bại',
                type: toast.TYPE.ERROR,
                autoClose: 600,
            })
        }
    }

    return !isLoading && oldProduct.name ? (
        <Box sx={{ paddingTop: '5px' }}>
            <Box>
                <h1>Chỉnh sửa sản phẩm</h1>
            </Box>
            <Box component="form">
                <Row>
                    <Col md={6} className="d-flex flex-column ">
                        <ImageGallery
                            images={images}
                            handleDeleteImage={handleDeleteImage}
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
                                disabled={images.length >= 5}
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
                            fullWidth
                            label="Thay đổi tên"
                            name="name"
                            autoComplete="name"
                            defaultValue={oldProduct?.name}
                            InputProps={{
                                label: 'Thay đổi tên aaaaa',
                                onChange: e =>
                                    handleChange(e, setProductUpdate),
                            }}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Thay đổi giá"
                            name="price"
                            autoComplete="price"
                            defaultValue={oldProduct?.price}
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
                            fullWidth
                            label="Thay đổi số lượng"
                            name="quantity"
                            autoComplete="quantity"
                            defaultValue={oldProduct?.quantity}
                            InputProps={{
                                label: 'Thay đổi số lượng aaaaa',
                                onChange: e =>
                                    handleChange(e, setProductUpdate),
                            }}
                        />
                        <FormControl fullWidth className="mt-4 mb-2">
                            <InputLabel id="demo-simple-select-label">
                                Thể loại
                            </InputLabel>
                            <Select
                                name="categoryId"
                                defaultValue={oldProduct?.category?.category_id}
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
                                        key={cate?.category_id}
                                        value={cate?.category_id}
                                    >
                                        {cate?.category_name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Thay đổi mô tả"
                            name="description"
                            autoComplete="description"
                            multiline
                            minRows={6}
                            maxRows={12}
                            defaultValue={oldProduct?.description}
                            InputProps={{
                                label: 'Thay đổi mô tả aaaaa',
                                onChange: e =>
                                    handleChange(e, setProductUpdate),
                            }}
                        />
                        <Box className="d-flex justify-content-start mt-3">
                            <Button
                                variant="outlined"
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
                                variant="contained"
                                style={{
                                    padding: '10px 20px',

                                    fontSize: '1.3rem',
                                }}
                                onClick={handleEdit}
                            >
                                Chỉnh sửa
                            </Button>
                        </Box>
                    </Col>
                </Row>
            </Box>
        </Box>
    ) : (
        <CircularProgress
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}
        />
    )
}

export default SingleShopProduct
