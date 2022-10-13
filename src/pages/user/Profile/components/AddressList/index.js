import React from 'react'
import './index.css'
import AddressItem from '../Address'
import AddressModal from '../AddressModal'

function AddressList() {
    return (
        <div className="address-list w-100 h-auto">
            <AddressModal/>
            {[0, 1, 2].map(item => (
                <AddressItem key={item} />
            ))}
        </div>
    )
}

export default AddressList
