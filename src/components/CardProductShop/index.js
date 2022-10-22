import { Col, Row } from 'react-bootstrap'
import { IconButton } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'

function CardProductShop(props) {
    const { product, showModalDelete, showProductEdit } = props
    const { productId, index, quantity, name, price, image } = product
    return (
        <Row>
            <Col md={1}>{index + 1}</Col>
            <Col md={2}>
                <img
                    src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/ipad-pro-2021-11inch-grey_2.jpg"
                    alt=""
                    className="img-fluid"
                />
            </Col>
            <Col md={5}></Col>
            <Col md={2}>{quantity}</Col>
            <Col md={2}>
                <IconButton
                    color="primary"
                    onClick={() => showProductEdit(productId)}
                >
                    <Edit className="iconShop" />
                </IconButton>
                <IconButton
                    color="error"
                    onClick={() => showModalDelete(productId)}
                >
                    <Delete className="iconShop" />
                </IconButton>
            </Col>
        </Row>
    )
}

export default CardProductShop
