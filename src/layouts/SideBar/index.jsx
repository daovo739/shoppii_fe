import './index.css'
import { useAuth } from '.././../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import { ROLE_USER } from '../../hooks/constants'
import {
    Home,
    StoreMallDirectory,
    Inventory,
    History,
} from '@mui/icons-material'
import { Nav, Button } from 'react-bootstrap'

function SideBar() {
    const navigate = useNavigate()
    const { changeRole } = useAuth()

    const handleSwitchUser = () => {
        changeRole(ROLE_USER)
        navigate('/', { replace: true })
    }

    return (
        <nav className="sidebar ">
            <header className="d-flex" style={{ paddingRight: '20px' }}>
                <Button
                    variant="secondary"
                    onClick={handleSwitchUser}
                    className="backBtn"
                >
                    Trở lại shoppii
                </Button>
            </header>

            <Nav variant="pills" className="flex-column menu">
                <Link className="link" to="/shop">
                    <Home className="icon" />
                    <Nav.Item>Trang chủ</Nav.Item>
                </Link>
                <Link className="link" to="/shop/profiles">
                    <StoreMallDirectory className="icon" />
                    <Nav.Item>Thông tin cửa hàng</Nav.Item>
                </Link>
                <Link className="link" to="/shop/products">
                    <Inventory className="icon" />
                    <Nav.Item>Quản lý sản phẩm</Nav.Item>
                </Link>
                <Link className="link" to="/shop/orders">
                    <History className="icon" />
                    <Nav.Item>Quản lý đơn hàng</Nav.Item>
                </Link>
            </Nav>
        </nav>
    )
}

export default SideBar
