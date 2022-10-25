import ProductContext from './ProductContext'
import { useReducer } from 'react'
import reducer, { initState } from './reducer'

function ProductProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <ProductContext.Provider value={[state, dispatch]}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider
