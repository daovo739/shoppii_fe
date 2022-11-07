import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button, List, Collapse } from '@mui/material'
import { Storefront, ExpandLess, ExpandMore } from '@mui/icons-material'
import PurchasedProduct from '../PurchasedProduct'
import './index.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { formatPrice } from '../../../../../utils/format'

const listProps = [0, 1, 2]
const firstItem = listProps.slice(0, 1)
const remain = listProps.slice(1)

function OrderHistoryItem({ order }) {
    const [open, setOpen] = React.useState(false)
    const { address, items, shop, status, time } = order
    const { shopId, name } = shop
    const [total, setTotal] = useState(0)
    const firstItem = items.slice(0, 1)
    const remain = items.slice(1)

    const getTotal = () => {
        setTotal(
            items.reduce(
                (total, item) => total + item.price * item.orderQuantity,
                0,
            ),
        )
    }

    useEffect(() => {
        getTotal()
    }, [])

    console.log(total)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className="order-history-item my-5">
            <Container fluid="md">
                <Row className="d-flex mb-1 order-header py-3">
                    <Col md={8}>
                        <div className="d-flex">
                            <div className="fs-4 fw-bold mt-2 ms-3">{name}</div>
                            <Button
                                variant="outlined"
                                startIcon={<Storefront />}
                                size="small"
                                className="view-shop-btn"
                                sx={{
                                    color: 'white',
                                    borderColor: 'white',
                                    fontSize: '1rem',
                                    marginLeft: '1rem'
                                }}
                            >
                                Xem cửa hàng
                            </Button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="fs-4 mt-2 text-left">
                            Ngày mua : {time}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: '100%',
                            bgcolor: 'background.paper',
                        }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        {/* first Item */}
                        <PurchasedProduct product={firstItem[0]} />

                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {remain.map((item, index) => (
                                    <PurchasedProduct
                                        key={index}
                                        product={item}
                                    />
                                ))}
                            </List>
                        </Collapse>
                    </List>
                </Row>
                <Row>
                    <Col
                        md={12}
                        className="d-flex justify-content-center align-content-center show-btn"
                        onClick={handleClick}
                    >
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="order-footer pb-3">
                            <span>Tổng tiền : </span>₫{formatPrice(total)}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OrderHistoryItem
