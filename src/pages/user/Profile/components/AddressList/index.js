import {useEffect} from 'react'
import './index.css'
import AddressItem from '../Address'
import AddressModal from '../AddressModal'
import useStore from '../../../../../store/hooks'
import { get } from '../../../../../utils/httprequest'
import queryString from 'query-string'
import { useAuth } from '../../../../../hooks/useAuth'

function AddressList() {
    const { addresses, setAddresses } = useStore()
    const { user } = useAuth()
    
    const getAddresses = async () => {
        const q = queryString.stringify({
            userId: user.userId,
        })
        const res = await get('address', q)
        const data = await res.json()
        setAddresses(data)
    }

    useEffect(() => {
        getAddresses()
    }, [])

    return (
        <div className="address-list w-100 h-auto">
            <AddressModal action={false} />
            {addresses.map(address => (
                <AddressItem
                    key={address.addressId}
                    address={address}
                />
            ))}
        </div>
    )
}

export default AddressList
