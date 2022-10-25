import UserContext from './UserContext'
import { useState } from 'react'

function UserProvider({ children }) {
    const [products, setProducts] = useState([])

    const value = {
        products,
        setProducts,
    }
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
