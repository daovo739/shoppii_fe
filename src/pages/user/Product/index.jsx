/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import queryString from 'query-string'
import { get } from '../../../utils/httprequest'
import ProductDetail from '../../../components/ProductDetail'
import { faker } from '@faker-js/faker'

function Product() {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    const getProduct = async () => {
        // const q = queryString.stringify({ productId: id })
        // const res = await get('/product', q)
        // const data = await res.json()
        const data = {
            productId: faker.number.int(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            images: [
                faker.image.urlPicsumPhotos(),
                faker.image.urlPicsumPhotos(),
                faker.image.urlPicsumPhotos(),
                faker.image.urlPicsumPhotos(),
            ],
            category: {
                category_name: faker.commerce.department(),
            },
            description: faker.lorem.paragraphs(),
            isAvailable: true,
            shop: {
                shopId: faker.number.int(),
                name: faker.commerce.department(),
                status: true,
                address: faker.location.city(),
            },
        }
        setProduct(data)
    }
    useEffect(() => {
        getProduct()
    }, [id])

    return <ProductDetail product={product} />
}

export default Product
