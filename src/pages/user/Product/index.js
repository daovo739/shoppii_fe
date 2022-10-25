import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import queryString from 'query-string'
import { get } from '../../../utils/httprequest'

function Product() {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    const getProduct = async () => {
        const q = queryString.stringify({ productId: id })
        const res = await get('/product', q)
        const data = await res.json()
        setProduct(data)
    }
    console.log(product)
    useEffect(() => {
        getProduct()
    }, [id])

    console.log(product)
    return <h1>Product detail page</h1>
}

export default Product
