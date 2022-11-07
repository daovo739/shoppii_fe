const API_URL = import.meta.env.REACT_APP_BASE_API_URL

const post = async (path, formData) => {
    const res = await fetch(`${API_URL}/${path}`, {
        method: 'POST',
        body: formData,
    })
    return res
}

const put = async (path, formData) => {
    const res = await fetch(`${API_URL}/${path}`, {
        method: 'PUT',
        body: formData,
    })
    return res
}

const _delete = async (path, formData) => {
    const res = await fetch(`${API_URL}/${path}`, {
        method: 'DELETE',
        body: formData,
    })
    return res
}

const get = async (path, q = '') => {
    const URI = q ? `${API_URL}/${path}?${q}` : `${API_URL}/${path}`
    const res = await fetch(URI, {
        method: 'GET',
    })
    return res
}

export { post, get, put, _delete }
