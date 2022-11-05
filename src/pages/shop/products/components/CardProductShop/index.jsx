import { Col, Row } from 'react-bootstrap'
import { IconButton } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
import { formatPrice } from '.././../.././.././.././utils/format'
function CardProductShop(props) {
    const { product, showModalDelete, showProductEdit } = props
    const { productId, index, quantity, name, price, image, category } = product

    return (
        <Row className="mt-3">
            <Col
                md={1}
                style={{
                    fontWeight: 'bold',
                }}
            >
                {index + 1}
            </Col>
            <Col md={2}>
                <img
                    src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/ipad-pro-2021-11inch-grey_2.jpg"
                    alt=""
                    className="img-fluid"
                    style={{
                        maxHeight: '150px',
                    }}
                />
            </Col>
            <Col md={3}>
                <p
                    style={{
                        marginBottom: '0',
                        maxWidth: '90%',
                    }}
                >
                    {name}
                </p>
                <p
                    style={{
                        fontWeight: 'bold',
                    }}
                >
                    {formatPrice(price)}
                </p>
            </Col>
            <Col md={2}>{category.category_name}</Col>
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
