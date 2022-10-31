import UserContext from './UserContext'
import { useState, useEffect } from 'react'
import queryString from 'query-string'
import { useAuth } from '../hooks/useAuth'
import { get } from '../utils/httprequest'

function UserProvider({ children }) {
    const { user } = useAuth()
    const [products, setProducts] = useState([])
    const [addresses, setAddresses] = useState([])

    const getAddresses = async () => {
        const q = queryString.stringify({
            userId: user.userId,
        })
        const res = await get('address', q)
        const data = await res.json()
        setAddresses(data)
    }

    useEffect(() => {
        getAddresses()
    }, [])

    const value = {
        products,
        setProducts,
        addresses,
        getAddresses,
    }
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
