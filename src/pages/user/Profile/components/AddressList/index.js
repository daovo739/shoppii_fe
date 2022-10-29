import React from 'react'
import './index.css'
import AddressItem from '../Address'
import AddressModal from '../AddressModal'
import useStore from '../../../../../store/hooks'
function AddressList() {
    const {addressHook} = useStore()
    const {state, dispatch} = addressHook
    const {addresses} = state
    return (
        <div className="address-list w-100 h-auto">
            <AddressModal action={false}/>
            {addresses.map(address => (
                <AddressItem
                    key={address.id}
                    name={address.name}
                    address={address.address}
                    phone={address.phone}
                />
            ))}
        </div>
    )
}

export default AddressList
