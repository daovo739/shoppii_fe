import './index.css'
import Logo from '../../assets/images/—Pngtree—modern logo blue logos_7718360.png'
import {
    ShoppingCartOutlined,
    PersonOutline,
    ListAltOutlined,
} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { Row, Container, Col, Dropdown } from 'react-bootstrap'
import { useState, useEffect, memo } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Button } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { ROLE_SHOP } from '../.././hooks/constants'
import SearchProducts from './components/SearchProducts'
import ListCategories from './components/ListCategories'
import { useHome } from '../.././hooks/./useHome'

const Navbar = () => {
    const { categories } = useHome()

    const { user, logout, changeRole, handleSwitchShop } = useAuth()
    const [showDropdownProfile, setShowDropdownProfile] = useState(false)
    const [showDropdownCategory, setShowDropdownCategory] = useState(false)
    const [isLogin, setIsLogin] = useState(() => (user ? true : false))

    useEffect(() => {
        setIsLogin(user ? true : false)
    }, [user])

    return (
        <>
            <Container fluid="md">
                <Row>
                    <Col md={3} className="col-flex">
                        <div className="header-logo">
                            <Link to="/">
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                        <Dropdown
                            onMouseEnter={() => setShowDropdownCategory(true)}
                            onMouseLeave={() => setShowDropdownCategory(false)}
                            show={showDropdownCategory}
                        >
                            <Dropdown.Toggle className="header-catalog dropdownBtn">
                                <div className="d-flex">
                                    <ListAltOutlined
                                        sx={{ fontSize: '20px' }}
                                    />
                                    <span className="fs-4 ms-1">Danh mục</span>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-category">
                                <ListCategories categories={categories} />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={7} className="col-flex">
                        <SearchProducts />
                    </Col>
                    <Col md={2} className="col-flex">
                        {' '}
                        {isLogin ? (
                            <div className="d-flex align-items-center justify-content-around w-75 ">
                                <div className="ms-2">
                                    <Link to="/cart">
                                        <ShoppingCartOutlined
                                            sx={{
                                                fontSize: '30px',
                                                color: 'white',
                                            }}
                                        />
                                    </Link>
                                </div>
                                <div>
                                    <Dropdown
                                        onMouseEnter={() =>
                                            setShowDropdownProfile(true)
                                        }
                                        onMouseLeave={() =>
                                            setShowDropdownProfile(false)
                                        }
                                        show={showDropdownProfile}
                                    >
                                        <Dropdown.Toggle className="dropdownBtn">
                                            <PersonOutline
                                                sx={{
                                                    fontSize: '30px',
                                                    color: 'white',
                                                }}
                                            />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item as="div">
                                                <Link to="/profile">
                                                    Thông tin người dùng
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item as="div">
                                                <Link
                                                    to="/profile"
                                                    state={{
                                                        action: 'Order History',
                                                    }}
                                                >
                                                    Lịch sử mua hàng
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item as="div">
                                                <Button
                                                    onClick={handleSwitchShop}
                                                    style={{
                                                        fontSize: '1.6rem',
                                                        color: '#333',
                                                        textTransform: 'none',
                                                        padding: '0',
                                                    }}
                                                >
                                                    Kênh người bán
                                                </Button>
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item as="div">
                                                <Button
                                                    className="d-flex justify-content-between align-items-center"
                                                    onClick={() => {
                                                        setIsLogin(false)
                                                        logout()
                                                    }}
                                                >
                                                    <LogoutIcon
                                                        className="bg-danger text-white"
                                                        sx={{
                                                            fontSize: '20px',
                                                            padding: '2px',
                                                            borderRadius: '5px',
                                                        }}
                                                    />
                                                    <span
                                                        style={{
                                                            fontSize: '1.6rem',
                                                        }}
                                                    >
                                                        Đăng xuất
                                                    </span>
                                                </Button>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        ) : (
                            <div className="header-guest d-flex justify-content-between ">
                                <div className="header-guest-content">
                                    <Link className="guest-link" to="/login">
                                        Đăng Nhập
                                    </Link>
                                </div>
                                <div>
                                    <a className="guest-link">|</a>
                                </div>
                                <div className="header-guest-content">
                                    <Link className="guest-link" to="/register">
                                        Đăng Ký
                                    </Link>
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
            {/* <Divider sx={{ border: '1px #000000 solid' }} /> */}
        </>
    )
}

export default memo(Navbar)
