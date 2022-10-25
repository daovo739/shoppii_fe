import { useContext, createContext, useState, useEffect, useMemo } from 'react'
import { get } from '../utils/httprequest'

const HomeContext = createContext()

export const HomeProvider = ({ children }) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = async () => {
        const res = await get('/category')
        setCategories(await res.json())
    }

    const value = useMemo(() => ({ categories }), [categories])

    return (
        categories && (
            <HomeContext.Provider value={value}>
                {children}
            </HomeContext.Provider>
        )
    )
}

export const useHome = () => {
    return useContext(HomeContext)
}
