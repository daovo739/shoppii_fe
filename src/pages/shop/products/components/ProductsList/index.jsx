import { Row, Col } from 'react-bootstrap'
import { Divider, Box } from '@mui/material'
import CardProductShop from '../CardProductShop'
import { useNavigate } from 'react-router-dom'

function ProductsList(props) {
    const navigate = useNavigate()
    const { products, showModalDelete, getProductAction } = props
    const showProductEdit = id => {
        const product = getProductAction(id)
        navigate(`/shop/product/${id}`, { state: product })
    }
    return (
        <>
            <Box sx={{ marginTop: '2rem' }}>
                <Row>
                    <Col md={1}>NO</Col>
                    <Col md={2}>Hình ảnh</Col>
                    <Col md={3}>Thông tin sản phẩm</Col>
                    <Col md={2}>Thể loại</Col>
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
        </>
    )
}

export default ProductsList
