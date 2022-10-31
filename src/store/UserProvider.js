import UserContext from './UserContext'
import { useReducer, useState } from 'react'
<<<<<<< HEAD

function UserProvider({ children }) {
    const [products, setProducts] = useState([])
    const [addresses, setAddresses] = useState([])

    const value = {
        products,
        setProducts,
        addresses,
        setAddresses
=======
import reducer, { initState } from './AddressHook/reducer'

function UserProvider({ children }) {
    const [productsData, setProductsData] = useState({})
    const [state, dispatch] = useReducer(reducer, initState)

    const value = {
        productsData,
        setProductsData,
        addressHook: {
            state,
            dispatch,
        },
>>>>>>> 23afe75d35b4df3f1b5f47a48c98f34ab5f17098
    }
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
