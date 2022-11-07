const handleChange = (e, setValue) => {
    const { name, value } = e.target
    setValue(prevState => ({
        ...prevState,
        [name]: value,
    }))
}

const handleFormData = object => {
    const formData = new FormData()
    for (const key in object) {
        formData.append(key, object[key])
    }
    return formData
}

export { handleChange, handleFormData }
