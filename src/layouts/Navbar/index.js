import './index.css'
import Logo from '../../assets/images/—Pngtree—modern logo blue logos_7718360.png'
import {
    Search,
    ShoppingCartOutlined,
    PersonOutline,
    ListAltOutlined,
} from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { Row, Container, Col, Dropdown } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Button } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { ROLE_SHOP } from '../.././hooks/constants'

const Navbar = () => {
    const navigate = useNavigate()
    const { user, logout, changeRole } = useAuth()
    const [showDropdownProfile, setShowDropdownProfile] = useState(false)
    const [showDropdownCategory, setShowDropdownCategory] = useState(false)
    const [isLogin, setIsLogin] = useState(() => (user ? true : false))

    useEffect(() => {
        setIsLogin(user ? true : false)
    }, [user])

    const handleSwitchShop = () => {
        changeRole(ROLE_SHOP)
        navigate('/shop', { replace: true })
    }

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
                            <Dropdown.Toggle className="header-catalog">
                                <div className="d-flex">
                                    <ListAltOutlined
                                        sx={{ fontSize: '20px' }}
                                    />
                                    <span className="fs-4 ms-1">Danh mục</span>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-category">
                                <Row
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        margin: 0,
                                        overflow: 'scroll',
                                        overflowX: 'hidden',
                                        width: '280px',
                                        maxHeight: '250px',
                                    }}
                                >
                                    {[
                                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                        13, 14,
                                    ].map(ele => {
                                        return (
                                            <div key={ele}>
                                                <Col md={6}>
                                                    <Dropdown.Item>
                                                        Item {ele}
                                                    </Dropdown.Item>
                                                </Col>
                                            </div>
                                        )
                                    })}
                                </Row>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={7} className="col-flex">
                        <div className="header-search">
                            <input
                                type="text"
                                placeholder="Search in the market"
                            />
                            <button htmlFor="">
                                <Search
                                    className="text-white"
                                    fontSize="large"
                                />
                            </button>
                        </div>
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
                                        <Dropdown.Toggle>
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
                                                <Link to="/profile">
                                                    Lịch sử mua hàng
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item as="div">
                                                <Button
                                                    onClick={handleSwitchShop}
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

export default Navbar
