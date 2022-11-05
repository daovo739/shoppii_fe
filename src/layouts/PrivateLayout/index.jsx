import SideBar from '../SideBar'
import { useAuth } from '../../hooks/useAuth'
import { ROLE_ADMIN } from '../../hooks/constants'

function PrivateLayout({ children }) {
    const { role } = useAuth()
    const marginLeftStyle = role === ROLE_ADMIN ? '0' : '250px'
    return (
        <div>
            {role === ROLE_ADMIN ? null : <SideBar />}
            <div
                style={{
                    marginLeft: marginLeftStyle,
                    padding: '40px 30px',
                    minHeight: '100vh',
                    backgroundColor: 'var(--box-color)',
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default PrivateLayout
