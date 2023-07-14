import { useContext, createContext, useState, useEffect, useMemo } from 'react'
import { get } from '../utils/httprequest'
import { faker } from '@faker-js/faker'

const HomeContext = createContext()

export const HomeProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [locations, setLocations] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        const categoriesFaker = []
        const locationsFaker = []
        for (let i = 0; i < 10; i++) {
            categoriesFaker.push({
                category_id: faker.number.int(),
                category_name: faker.commerce.department(),
                categoryImg: faker.image.urlPicsumPhotos(),
            })
            locationsFaker.push({
                shopId: faker.number.int(),
                address: faker.location.city(),
            })
        }
        // Promise.all([
        //     get('category').then(res => res.json()),
        //     get('shop/locations').then(res => res.json()),
        // ])
        //     .then(values => {
        //         setCategories(values[0])
        //         setLocations(values[1])
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        setCategories(categoriesFaker)
        setLocations(locationsFaker)
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
