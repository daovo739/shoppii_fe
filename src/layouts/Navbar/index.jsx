import './index.css'
import Logo from '../../assets/images/—Pngtree—modern logo blue logos_7718360.png'
import {
    ShoppingCartOutlined,
    PersonOutline,
    ListAltOutlined,
    LogoutRounded,
    HistoryRounded,
    PermContactCalendarRounded,
    ShoppingCartCheckoutRounded,
} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { Row, Container, Col, Dropdown } from 'react-bootstrap'
import { useState, useEffect, memo } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Button } from '@mui/material'
import { ROLE_SHOP } from '../.././hooks/constants'
import SearchProducts from './components/SearchProducts'
import ListCategories from './components/ListCategories'
import { useHome } from '../.././hooks/./useHome'
import useStore from '../../store/hooks'

const Navbar = () => {
    const { categories } = useHome()
    const { user, logout, handleSwitchShop } = useAuth()
    const [showDropdownProfile, setShowDropdownProfile] = useState(false)
    const [showDropdownCategory, setShowDropdownCategory] = useState(false)
    const [isLogin, setIsLogin] = useState(() => (user ? true : false))
    const { cartTotal } = useStore()

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
                            <div className="d-flex align-items-center justify-content-around w-75 position-relative">
                                <div className="ms-2 d-flex align-items-center">
                                    <Link to="/cart">
                                        <ShoppingCartOutlined
                                            sx={{
                                                fontSize: '30px',
                                                color: 'white',
                                            }}
                                        />
                                    </Link>
                                    <div className="cart-number-badge">
                                        {cartTotal}
                                    </div>
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
                                        <Dropdown.Menu
                                            style={{
                                                border: 'none',
                                                boxShadow:
                                                    'var(--box-shadow-main)',
                                            }}
                                        >
                                            <Dropdown.Item
                                                as="div"
                                                className="d-flex align-items-center"
                                            >
                                                <Link
                                                    to="/profile"
                                                    className="d-flex align-items-center mb-1"
                                                >
                                                    <div
                                                        style={{
                                                            backgroundColor:
                                                                'var(--light-blue)',
                                                            borderRadius: '50%',
                                                            width: '32px',
                                                            height: '32px',
                                                            marginRight: '1rem',
                                                        }}
                                                        className="d-flex align-items-center justify-content-center"
                                                    >
                                                        <PermContactCalendarRounded
                                                            sx={{
                                                                fontSize:
                                                                    '20px',
                                                                color: 'var(--main-blue)',
                                                            }}
                                                        />
                                                    </div>
                                                    Thông tin người dùng
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                as="div"
                                                className="d-flex align-items-center"
                                            >
                                                <Link
                                                    to="/profile"
                                                    state={{
                                                        action: 'Order History',
                                                    }}
                                                    className="d-flex align-items-center mb-1"
                                                >
                                                    <div
                                                        style={{
                                                            backgroundColor:
                                                                'var(--light-blue)',
                                                            borderRadius: '50%',
                                                            width: '32px',
                                                            height: '32px',
                                                            marginRight: '1rem',
                                                        }}
                                                        className="d-flex align-items-center justify-content-center"
                                                    >
                                                        <HistoryRounded
                                                            sx={{
                                                                fontSize:
                                                                    '20px',
                                                                color: 'var(--main-blue)',
                                                            }}
                                                        />
                                                    </div>
                                                    Lịch sử mua hàng
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                as="div"
                                                className="d-flex align-items-center mb-1"
                                            >
                                                <Button
                                                    onClick={handleSwitchShop}
                                                    style={{
                                                        fontSize: '1.6rem',
                                                        color: '#333',
                                                        textTransform: 'none',
                                                        padding: '0',
                                                    }}
                                                    className="d-flex align-items-center justify-content-center"
                                                >
                                                    <div
                                                        style={{
                                                            backgroundColor:
                                                                'var(--light-blue)',
                                                            borderRadius: '50%',
                                                            // padding: '0.5rem',
                                                            width: '32px',
                                                            height: '32px',
                                                            marginRight: '1rem',
                                                        }}
                                                        className="d-flex align-items-center justify-content-center"
                                                    >
                                                        <ShoppingCartCheckoutRounded
                                                            sx={{
                                                                fontSize:
                                                                    '20px',
                                                                color: 'var(--main-blue)',
                                                            }}
                                                        />
                                                    </div>
                                                    Kênh người bán
                                                </Button>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                as="div"
                                                className="d-flex align-items-center mb-1"
                                            >
                                                <Button
                                                    className="d-flex align-items-center"
                                                    onClick={() => {
                                                        setIsLogin(false)
                                                        logout()
                                                    }}
                                                    style={{
                                                        padding: '0',
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            backgroundColor:
                                                                'var(--light-blue)',
                                                            borderRadius: '50%',
                                                            padding: '0.5rem',
                                                            marginRight: '1rem',
                                                        }}
                                                    >
                                                        <LogoutRounded
                                                            sx={{
                                                                fontSize:
                                                                    '20px',
                                                                color: 'var(--main-blue)',
                                                            }}
                                                        />
                                                    </div>
                                                    <span
                                                        style={{
                                                            fontSize: '1.6rem',
                                                            color: '#333',
                                                            marginLeft: '5px',
                                                            textTransform:
                                                                'none',
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
