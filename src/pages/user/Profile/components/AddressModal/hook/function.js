import { API_URI } from './instant'

const getCities = async () => {
    const res = await fetch(`${API_URI}/province`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Token: `${process.env.REACT_APP_API_TOKEN_GHN}`,
        },
    })
    const data = await res.json()
    return data.data
}

const getDistricts = async id => {
    const res = await fetch(`${API_URI}/district?province_id=${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Token: `${process.env.REACT_APP_API_TOKEN_GHN}`,
        },
    })
    const data = await res.json()
    return data.data
}

const getWards = async id => {
    const res = await fetch(`${API_URI}/ward?district_id=${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Token: `${process.env.REACT_APP_API_TOKEN_GHN}`,
        },
    })
    const data = await res.json()
    return data.data
}

export { getCities, getDistricts, getWards }
