import { useState, useEffect } from 'react'
import { get } from '../../../utils/./httprequest'
import Categories from './components/Categories'
function Home() {
    const [category, setCategory] = useState([])

    // useEffect(() => {
    //     get('category').then((res) => {
    //         setCategory(res)
    //     }
    // }, [])

    return <Categories/>
}

export default Home
