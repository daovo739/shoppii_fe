import './index.css'
import { useEffect, useState } from 'react'
import { Box, CircularProgress } from '@mui/material'
import { Search } from '@mui/icons-material'
import { Row, Col, Button, Modal } from 'react-bootstrap'
import { get } from '../../../utils/httprequest'
import queryString from 'query-string'
import { useAuth } from '.././.././../hooks/useAuth'
import { toast } from 'react-toastify'
import { handleChange, handleFormData } from '../../../utils/handleForm'
import { _delete } from '../../../utils/httprequest'

import CreateAndSearch from './components/createSearch'
import ProductsList from './components/ProductsList'

function ShopProducts() {
    const { user } = useAuth()
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [showModalDel, setShowModalDelete] = useState(false)
    const [deleteId, setDeleteId] = useState(0)

    useEffect(() => {
        getProducts()
    }, [])

    const getProductAction = id => {
        const product = products.find(product => product.productId === id)
        return product
        // setProductAction(product)
    }

    const showModalDelete = id => {
        setShowModalDelete(true)
        getProductAction(id)
        setDeleteId(id)
    }

    const handleDeleteProduct = async () => {
        const formData = handleFormData({
            productId: deleteId,
        })
        const res = await _delete('shop/products', formData)
        console.log(await res.json())
        if (res.status === 201) {
            toast.success('Xóa thành công')
        } else {
            toast.error('Xóa không thành công')
        }
        setShowModalDelete(false)
        getProducts()
    }

    const getProducts = async () => {
        const q = queryString.stringify({ shopId: user.userId })
        const res = await get('shop/products', q)
        const data = await res.json()
        setProducts(data)
        setIsLoading(false)
        console.log(data)
    }

    return !isLoading ? (
        <Box sx={{ paddingTop: '5px' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}
            >
                <CreateAndSearch
                    fetchProducts={getProducts}
                    setProducts={setProducts}
                    products={products}
                />
            </Box>

            <ProductsList
                products={products}
                showModalDelete={showModalDelete}
                handleDeleteProduct={handleDeleteProduct}
            />

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

export default ShopProducts
