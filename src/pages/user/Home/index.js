import { useState, useEffect } from 'react'
import { get } from '../../../utils/./httprequest'
function Home() {
    const [category, setCategory] = useState([])

    // useEffect(() => {
    //     get('category').then((res) => {
    //         setCategory(res)
    //     }
    // }, [])

    return <h1>Home</h1>
}

export default Home
