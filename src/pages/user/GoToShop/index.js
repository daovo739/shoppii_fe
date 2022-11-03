import { useAuth } from '../../../hooks/useAuth'
import RegisterShopTab from './components/RegisterShopTab'

function GoToShop() {
    const { user } = useAuth()
    console.log(user)
    return (
        <div style={{ backgroundColor: 'white', padding: '3rem', boxShadow: 'var(--box-shadow-main)' }}>
            <RegisterShopTab />
        </div>
    )
}

export default GoToShop
