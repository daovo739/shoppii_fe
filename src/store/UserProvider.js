import UserContext from './UserContext'
import { useReducer, useState } from 'react'

function UserProvider({ children }) {
    const [products, setProducts] = useState([])
    const [addresses, setAddresses] = useState([])

    const value = {
        products,
        setProducts,
        addresses,
        setAddresses
    }
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
