import React from 'react'
import './index.css'
import AddressItem from '../Address'
import AddressModal from '../AddressModal'

const addressList = [
    {
        id: '1',
        name: 'Ton That Khiem',
        address:
            '1x/45x đường Hoàng Diệu, phường Thạch Thang, Quận Hải Châu, Thành phố Đà Nẵng',
        phone: '0159877459',
    },
    {
        id: '2',
        name: 'Vo Van Dao',
        address:
            '1x/45x đường Hoàng Diệu, phường Thạch Thang, Quận Hải Châu, Thành phố Đà Nẵng',
        phone: '0159877459',
    },
    {
        id: '3',
        name: 'Ton That Khiem',
        address:
            '1x/45x đường Hoàng Diệu, phường Thạch Thang, Quận Hải Châu, Thành phố Đà Nẵng',
        phone: '0159877459',
    },
]

function AddressList() {
    return (
        <div className="address-list w-100 h-auto">
            <AddressModal test={false}/>
            {addressList.map(address => (
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
