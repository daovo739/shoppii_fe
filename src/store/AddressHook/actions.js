import * as instants from './instant'

export const setAddress = (name, value, address) => {
  return {
    type: instants.set_address,
    payload: {
      ...address,
      [name] : value
    }
  }
}

export const addAddress = (address, addresses) => {
  return {
    type: instants.add_address,
    payload: [...addresses, address]
  }
}

export const deleteAddress = (id, addresses) => {
  return {
    type: instants.delete_address,
    payload: addresses.filter(address => address.id !== id)
  }
}

export const updateAddress = (address, addresses) => {
  const i = 0
  addresses.map((ad, index) => {
    if (ad.id === address.id){
      i = index
    }
  })
  addresses[i] = address
  return {
    type: instants.update_address,
    payload: addresses
  }
}