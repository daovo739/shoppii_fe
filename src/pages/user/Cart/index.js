/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import queryString from 'query-string'
import CartShop from './components/CartShop'
import CartTotal from './components/CartTotal'
import { get } from '../../../utils/httprequest'
import { useAuth } from '../../../hooks/useAuth'
import { style } from '../../../components/ModalStyle/index'
import { _delete } from '../../../utils/httprequest'
import { handleFormData } from '../../../utils/handleForm'

function Cart() {
    const { user } = useAuth()
    const [cart, setCart] = useState([])
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [idDelete, setIdDelete] = useState(null)

    const handleCloseModalDelete = useCallback(() => {
        setShowModalDelete(false)
    }, [])

    const handleOpenModalDelete = id => {
        setIdDelete(id)
        setShowModalDelete(true)
    }

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const q = queryString.stringify({
            userId: user.userId,
        })
        const res = await get('/cart', q)
        const data = await res.json()
        data.forEach(item =>
            item.products.sort((a, b) => a.productId - b.productId),
        )

        setCart(data.sort((a, b) => a.shopId - b.shopId))
    }

    const handleRemoveProduct = async () => {
        const formData = handleFormData({
            userId: user.userId,
            productId: idDelete,
        })
        const res = await _delete('cart', formData)
        const data = await res.json()
        getData()
        setIdDelete(null)
        handleCloseModalDelete()
    }
    return (
        <div>
            <Container fluid="md">
                <Row
                    style={{
                        backgroundColor: 'white',
                        marginBottom: '8px',
                        marginLeft: '1px',
                        marginRight: '1px',
                        height: '5rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'gray',
                    }}
                >
                    <Col md={6} style={{ paddingLeft: '5.6rem' }}>
                        <div className="fs-3">Sản phẩm</div>
                    </Col>
                    <Col md={3}>
                        <div className="fs-3" style={{ marginLeft: '6rem' }}>
                            Số lượng
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="fs-3">Số tiền</div>
                    </Col>
                    <Col md={1}>
                        <div className="fs-3">Xóa</div>
                    </Col>
                </Row>
                {cart.map(item => (
                    <Row key={item.shopId}>
                        <Col md={12}>
                            <CartShop
                                item={item}
                                getData={getData}
                                handleOpenModalDelete={handleOpenModalDelete}
                            />
                        </Col>
                    </Row>
                ))}
            </Container>
            <CartTotal />
            <Modal
                show={showModalDelete}
                onHide={handleCloseModalDelete}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title
                        style={{
                            fontSize: '2rem',
                        }}
                    >
                        Bạn muốn xóa sản phẩm này ra khỏi giỏ hàng?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={handleCloseModalDelete}
                        className="btnModal"
                    >
                        Hủy
                    </Button>
                    <Button
                        variant="danger"
                        onClick={handleRemoveProduct}
                        className="btnModal"
                    >
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Cart
