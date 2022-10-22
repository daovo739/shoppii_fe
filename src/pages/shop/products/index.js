import './index.css'
import { useEffect, useState } from 'react'
import { Box, TextField, Divider } from '@mui/material'
import { Search } from '@mui/icons-material'
import { Row, Col, Button, Modal } from 'react-bootstrap'
import { get } from '../../../utils/httprequest'
import queryString from 'query-string'
import { useAuth } from '.././.././../hooks/useAuth'
import CardProductShop from '../../../components/CardProductShop'
import { toast } from 'react-toastify'
import { handleChange } from '../../../utils/handleForm'
import { useNavigate } from 'react-router-dom'

function ShopProducts() {
    const navigate = useNavigate()
    const { user } = useAuth()
    const [products, setProducts] = useState([])
    const [showModalDel, setShowModalDelete] = useState(false)
    const [productAction, setProductAction] = useState({})

    useEffect(() => {
        getProducts()
    }, [])

    const getProductAction = id => {
        console.log(id)
        const product = products.find(product => product.productId === id)
        return product
        // setProductAction(product)
    }

    const showProductEdit = id => {
        const product = getProductAction(id)
        navigate(`/shop/product/${id}`, { state: product })
    }

    const showModalDelete = id => {
        setShowModalDelete(true)
        getProductAction(id)
    }

    const handleDeleteProduct = () => {}

    const handleEditProduct = () => {}

    const getProducts = async () => {
        const q = queryString.stringify({ shopId: user.userId })
        const res = await get('shop/products', q)
        const data = await res.json()
        setProducts(data)
        console.log(data)
    }
    return (
        <Box sx={{ paddingTop: '120px' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}
            >
                <Button
                    variant="primary"
                    className="h-100"
                    style={{
                        fontSize: '1.6rem',
                        maxWidth: '80%',
                        padding: '1.5rem 1.7rem',
                    }}
                >
                    Tạo sản phẩm mới
                </Button>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '3rem',
                        width: '600px',
                        maxWidth: '600px',
                    }}
                >
                    <Search
                        sx={{
                            color: 'action.active',
                            mr: 1,
                            my: 0.5,
                            fontSize: '3rem',
                        }}
                    />
                    <TextField
                        id="input-with-sx"
                        label="Tìm kiếm sản phẩm"
                        variant="filled"
                        sx={{
                            width: '100%',
                        }}
                    />
                </Box>
            </Box>

            <Box sx={{ marginTop: '2rem' }}>
                <Row>
                    <Col md={1}>NO</Col>
                    <Col md={2}>Hình ảnh</Col>
                    <Col md={5}>Thông tin sản phẩm</Col>
                    <Col md={2}>Số lượng còn lại</Col>
                    <Col md={2}></Col>
                </Row>
                <Divider sx={{ borderColor: '#333' }} />
            </Box>

            <Box>
                {products.map((product, index) => {
                    return (
                        <CardProductShop
                            product={{ ...product, index }}
                            key={index}
                            showModalDelete={showModalDelete}
                            showProductEdit={showProductEdit}
                        />
                    )
                })}
            </Box>
            <Modal
                show={showModalDel}
                onHide={() => setShowModalDelete(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title
                        style={{
                            fontSize: '2rem',
                        }}
                    >
                        Bạn muốn xóa sản phẩm này{' '}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setShowModalDelete(false)}
                        className="btnModal"
                    >
                        Hủy
                    </Button>
                    <Button
                        variant="danger"
                        onClick={handleDeleteProduct}
                        className="btnModal"
                    >
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </Box>
    )
}

export default ShopProducts
