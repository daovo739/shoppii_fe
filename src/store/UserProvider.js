import UserContext from './UserContext'
import { useReducer, useState } from 'react'
import reducer, {initState} from './AddressHook/reducer'

function UserProvider({ children }) {
    const [products, setProducts] = useState([])
    const [state, dispatch] = useReducer(reducer, initState)

    const value = {
        products,
        setProducts,
        addressHook: {
            state,
            dispatch
        }
    }
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
