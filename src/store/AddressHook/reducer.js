import * as instants from './instant'
import { addressList } from '../../assets/fakedata/addressList'

export const initState = {
  addressInput: {
    name: '',
    phone: '',
    city: '',
    district: '',
    ward: '',
    address: ''
  },
  addresses: addressList
}

const reducer  = (state, action) => {
  switch(action.type){
    case instants.set_address:
      return {
        ...state,
        addressInput: action.payload
      }
    case instants.add_address:
      return {
        ...state,
        addresses: action.payload
      }
    case instants.delete_address:
      return {
        ...state,
        addresses: action.payload
      }
    case instants.update_address:
      return {
        ...state,
        addresses: action.payload
      }
    default: return state
  }
}

export default reducer;