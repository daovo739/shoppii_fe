/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import queryString from 'query-string'
import { get } from '../../../utils/httprequest'
import ProductDetail from '../../../components/ProductDetail'

function Product() {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    const getProduct = async () => {
        const q = queryString.stringify({ productId: id })
        const res = await get('/product', q)
        const data = await res.json()
        setProduct(data)
    }
    useEffect(() => {
        getProduct()
    }, [id])

    return <ProductDetail product={product} />
}

export default Product
