import { useEffect, useState } from 'react'
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
} from '@mui/material'
import { style } from '../../../../../components/ModalStyle'
import { Row, Col, Overlay } from 'react-bootstrap'
import ImageGallery from '../../../../../components/ImageGallery'
import { handleChange } from '../../../../../utils/handleForm'
import { useAuth } from '../../../../../hooks/useAuth'
import { post, get } from '../../../../../utils/httprequest'
import queryString from 'query-string'
import { toast } from 'react-toastify'

function CreateProductModal({ open, handleOpen, handleClose }) {
    const [productInfo, setProductInfo] = useState({
        name: '',
        price: '',
        quantity: '',
        categoryId: '',
        description: '',
    })
    const { user } = useAuth()
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
   
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = {
            shopId: user.userId,
            name: productInfo.name,
            price: productInfo.price,
            quantity: productInfo.quantity,
            categoryId: productInfo.categoryId,
            description: productInfo.description,
        }
        
        const res = await post('shop/products', formData)
        // console.log(await res.json())
        if (res.status === 201) {
            toast.success('Thêm sản phẩm thành công')
        } else {
            toast.error('Thêm sản phẩm không thành công')
        }
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...style, width: '80%', padding:'2rem' }}>
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
                        <Box component="form">
                            <Row>
                                <Col md={6} className="d-flex flex-column ">
                                    <ImageGallery />
                                    <Box
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            className="fs-4 w-50 mt-3"
                                            // disabled={false ? true : false}
                                            // ref={popover}
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
                                                    // handleChange(e, setProductInfo)
                                                }}
                                            />
                                        </Button>
                                        <Overlay
                                            // target={popover.current}
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
                                                    Đã quá số lượng ảnh cho
                                                    phép. Hãy xóa bớt để có thể
                                                    tải ảnh mới!
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
                                            onClick={e => handleSubmit(e)}
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
