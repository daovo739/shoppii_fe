import { set_city, set_ward, set_district, set_cities, set_districts, set_wards } from "./instant";

export const setCity = (city) => {
  return {
    type: set_city,
    payload: city
  }
}

export const setWard = (ward) => {
  return {
    type: set_ward,
    payload: ward
  }
}

export const setDistrict = (district) => {
  return {
    type: set_district,
    payload: district
  }
}

export const setCities = (cities) => {
  return {
    type: set_cities,
    payload: cities
  }
}

export const setDistricts = (districts) => {
  return {
    type: set_districts,
    payload: districts
  }
}

export const setWards = (wards) => {
  return {
    type: set_wards,
    payload: wards
  }
}