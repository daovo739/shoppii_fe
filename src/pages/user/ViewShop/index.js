import { useEffect, useState } from 'react'
import ShopHeader from './components/ShopHeader'
import BasicTabs from '../../../components/Tab'
import { useParams } from 'react-router-dom'
import { get } from '../../.././utils/./httprequest'
import queryString from 'query-string'

function ViewShop() {
    const { id } = useParams()
    const [products, setProducts] = useState([])
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        const q = queryString.stringify({ shopId: id })
        Promise.all([
            get(`/shop/products`, q).then(res => res.json()),
            get(`/shop/profile`, q).then(res => res.json()),
        ])
            .then(values => {
                setProducts(values[0])
                setProfile(values[1])
            })
            .then(() => {
                setLoading(true)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        loading && (
            <div className="view-shop">
                <ShopHeader profile={profile} />
                <div
                    className="shop-content"
                    style={{
                        backgroundColor: 'var(--white)',
                        marginTop: '3rem',
                        paddingTop: '3rem',
                        paddingLeft: '6rem',
                        paddingRight: '6rem',
                    }}
                >
                    <BasicTabs />
                </div>
            </div>
        )
    )
}

export default ViewShop
