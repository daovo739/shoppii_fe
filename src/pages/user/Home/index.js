import { useState, useEffect } from 'react'
import { get } from '../../../utils/./httprequest'
import Categories from './components/Categories'
import Carousel from './components/Carousel'
function Home() {
    const [category, setCategory] = useState([])

    // useEffect(() => {
    //     get('category').then((res) => {
    //         setCategory(res)
    //     }
    // }, [])

    return (
        <div>
            <Carousel />
            <Categories />
        </div>
    )
}

export default Home
