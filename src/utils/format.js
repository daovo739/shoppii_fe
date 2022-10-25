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
}

const formatPrice = price => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(price)
}
export { formatDate, formatDay, getImage, formatPrice }
