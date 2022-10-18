const API_URL = process.env.REACT_APP_BASE_API_URL

const post = async (path, formData) => {
    const res = await fetch(`${API_URL}/${path}`, {
        method: 'POST',
        body: formData,
    })
    return res
}

const get = async (path, queries = {}) => {
    const res = await fetch(`${API_URL}/${path}`, {
        method: 'GET',
    })
    return res
}

export { post, get }
