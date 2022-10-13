import { set_city, set_ward, set_district, set_cities, set_districts, set_wards } from "../instant";

export const initState = {
  city: null,
  district: null,
  ward: null,
  cities: [],
  districts: [],
  wards: []
}

const reducer = (state, action) => {
  switch(action.type){
    case set_city:
      return {
        ...state,
        city: action.payload
      }
    case set_ward:
      return {
        ...state,
        ward: action.payload
      }
    case set_district:
      return {
        ...state,
        district: action.payload
      }
    case set_cities:
      return {
        ...state,
        cities: action.payload
      }
    case set_districts:
      return {
        ...state,
        districts: action.payload
      }
    case set_wards: 
      return {
        ...state,
        wards: action.payload
      }
    default: throw new Error('Invalid action')
  }
}

export default reducer