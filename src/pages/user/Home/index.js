import { useState, useEffect } from 'react'
import { get } from '../../../utils/./httprequest'
<<<<<<< HEAD
import Categories from './components/Categories'
import Carousel from './components/Carousel'
=======
>>>>>>> 52683f55894e4d8c4da12e2201e6b11c49cd72b2
function Home() {
    const [category, setCategory] = useState([])

    // useEffect(() => {
    //     get('category').then((res) => {
    //         setCategory(res)
    //     }
    // }, [])

<<<<<<< HEAD
    return (
        <div>
            <Carousel />
            <Categories />
        </div>
    )
=======
    return <h1>Home</h1>
>>>>>>> 52683f55894e4d8c4da12e2201e6b11c49cd72b2
}

export default Home
