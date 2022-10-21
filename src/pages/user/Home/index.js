import { useState, useEffect } from 'react'
import { get } from '../../../utils/./httprequest'
import ShopHeader from '../ViewShop/components/ShopHeader'

function Home() {
    const [category, setCategory] = useState([])

    // useEffect(() => {
    //     get('category').then((res) => {
    //         setCategory(res)
    //     }
    // }, [])

    return <ShopHeader/>
}

export default Home
