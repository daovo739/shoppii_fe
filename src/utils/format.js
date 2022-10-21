import Moment from 'moment'

const formatDate = date => {
    return Moment(new Date(date)).format('DD-MM-YYYY HH:mm:ss')
}

const formatDay = date => {
    return Moment(new Date(date)).format('DD-MM-YYYY')
}

const getImage = event => {
    let file = event.target.files[0]
    return URL.createObjectURL(file)
    // console.log(file)
    // let result
    // if (file) {
    //     const reader = new FileReader()
    //     reader.onload = () => {
    //         result = reader.result
    //     }
    //     reader.readAsDataURL(file)
    //     console.log(result)
    //     return result
    // }
}

export { formatDate, formatDay, getImage }
