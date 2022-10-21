import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import EditProfileForm from '../../pages/user/Profile/components/EditProfileForm'
import ChangPassword from '../../pages/user/Profile/components/ChangePass'
import OrderHistory from '../../pages/user/Profile/components/OrderHistory'
import AddressList from '../../pages/user/Profile/components/AddressList'
import ViewProduct from '../../pages/user/Products/components/ViewProducts'
import './index.css'
import {
    editPro,
    changePass,
    orderHistory,
    addressList,
} from '../../pages/user/Profile/components/ProfileSidebar'

const headerList = [
    {
        action: editPro,
        title: 'Hồ Sơ Của Tôi',
        comment: 'Quản lý thông tin hồ sơ để bảo mật tài khoản',
    },
    {
        action: addressList,
        title: 'Địa chỉ của tôi',
        comment: 'Địa chỉ nhận hàng',
    },
    {
        action: changePass,
        title: 'Đổi Mật Khẩu',
        comment:
            'Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác',
    },
    {
        action: orderHistory,
        title: 'Lịch sử mua hàng',
        comment: 'Quản lý những đơn hàng đã được giao',
    },
    {
        action: 'view products',
        title: 'Kết quả tìm kiếm',
        comment: '',
    },
]

function BoxContent({ content }) {
    const renderContent = () => {
        switch (content) {
            case addressList:
                return <AddressList />
            case changePass:
                return <ChangPassword />
            case orderHistory:
                return <OrderHistory />
            case 'view products':
                return <ViewProduct />
            default:
                return <EditProfileForm />
        }
    }

    return (
        <div className="profile-box w-100">
            <Container fluid="md">
                <Row className="box-header">
                    {headerList.map((header, index) => {
                        if (header.action === content) {
                            return (
                                <Col md={12} key={index}>
                                    <h2>{header.title}</h2>
                                    <div>{header.comment}</div>
                                </Col>
                            )
                        }
                    })}
                </Row>
                <Row>
                    <Col md={12} className="d-flex justify-content-center">
                        <div className="box-contain">{renderContent()}</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BoxContent
