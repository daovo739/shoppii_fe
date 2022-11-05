import UserContext from './UserContext'
import { useState, useEffect } from 'react'
import queryString from 'query-string'
import { useAuth } from '../hooks/useAuth'
import { get } from '../utils/httprequest'

function UserProvider({ children }) {
    const { user } = useAuth()
    const [productsData, setProductsData] = useState({})
    const [addresses, setAddresses] = useState([])
    const [cartTotal, setCartTotal] = useState(0)

    const getAddresses = async () => {
        if (user) {
            const q = queryString.stringify({
                userId: user.userId,
            })
            const res = await get('address', q)
            const data = await res.json()
            setAddresses(data)
        }
        return
    }

    const getTotalCart = async () => {
        if (user) {
            const q = queryString.stringify({
                userId: user.userId,
            })
            const res = await get('/cart', q)
            const data = await res.json()
            const total = data.reduce((total, item) => {
                return total + item.products.length
            }, 0)
            setCartTotal(total)
        }
        return
    }

    useEffect(() => {
        getAddresses()
        getTotalCart()
    }, [user])

    const value = {
        productsData,
        setProductsData,
        addresses,
        getAddresses,
        cartTotal,
        getTotalCart,
    }
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
