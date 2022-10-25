import './index.css'
import { useEffect, useState } from 'react'
import { Box, TextField, Divider } from '@mui/material'
import { Search } from '@mui/icons-material'
import { Row, Col, Button, Modal } from 'react-bootstrap'
import { get } from '../../../utils/httprequest'
import queryString from 'query-string'
import { useAuth } from '.././.././../hooks/useAuth'
import { toast } from 'react-toastify'
import { handleChange } from '../../../utils/handleForm'

import CreateAndSearch from './components/createSearch'
import ProductsList from './components/ProductsList'

function ShopProducts() {
    const { user } = useAuth()
    const [products, setProducts] = useState([])
    const [showModalDel, setShowModalDelete] = useState(false)

    useEffect(() => {
        getProducts()
    }, [])

    const getProductAction = id => {
        console.log(id)
        const product = products.find(product => product.productId === id)
        return product
        // setProductAction(product)
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
                <CreateAndSearch setProducts={setProducts} />
            </Box>

            <ProductsList
                products={products}
                showModalDelete={showModalDelete}
                getProductAction={getProductAction}
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
    )
}

export default ShopProducts
