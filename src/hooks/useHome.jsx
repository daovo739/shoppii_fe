import { useContext, createContext, useState, useEffect, useMemo } from 'react'
import { get } from '../utils/httprequest'

const HomeContext = createContext()

export const HomeProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [locations, setLocations] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        Promise.all([
            get('category').then(res => res.json()),
            get('shop/locations').then(res => res.json()),
        ])
            .then(values => {
                setCategories(values[0])
                setLocations(values[1])
            })
            .catch(err => {
                console.log(err)
            })
    }

    const value = {
        categories,
        locations,
    }

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
