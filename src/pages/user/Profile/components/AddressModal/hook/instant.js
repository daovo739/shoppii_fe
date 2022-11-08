export const set_city = 'set_city'
export const set_district = 'set_district'
export const set_ward = 'set_ward'
export const set_cities = 'set_cities'
export const set_districts = 'set_districts'
export const set_wards = 'set_wards'
export const reset = 'reset'
export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
}
export const API_URI =
    'https://dev-online-gateway.ghn.vn/shiip/public-api/master-data'

export const provinces = [
    { ProvinceID: 269, ProvinceName: 'Lào Cai' },
    { ProvinceID: 268, ProvinceName: 'Hưng Yên' },
    { ProvinceID: 267, ProvinceName: 'Hòa Bình' },
    { ProvinceID: 266, ProvinceName: 'Sơn La' },
    { ProvinceID: 265, ProvinceName: 'Điện Biên' },
    { ProvinceID: 264, ProvinceName: 'Lai Châu' },
    { ProvinceID: 263, ProvinceName: 'Yên Bái' },
    { ProvinceID: 262, ProvinceName: 'Bình Định' },
    { ProvinceID: 261, ProvinceName: 'Ninh Thuận' },
    { ProvinceID: 260, ProvinceName: 'Phú Yên' },
    { ProvinceID: 259, ProvinceName: 'Kon Tum' },
    { ProvinceID: 258, ProvinceName: 'Bình Thuận' },
    { ProvinceID: 253, ProvinceName: 'Bạc Liêu' },
    { ProvinceID: 252, ProvinceName: 'Cà Mau' },
    { ProvinceID: 250, ProvinceName: 'Hậu Giang' },
    { ProvinceID: 249, ProvinceName: 'Bắc Ninh' },
    { ProvinceID: 248, ProvinceName: 'Bắc Giang' },
    { ProvinceID: 247, ProvinceName: 'Lạng Sơn' },
    { ProvinceID: 246, ProvinceName: 'Cao Bằng' },
    { ProvinceID: 245, ProvinceName: 'Bắc Kạn' },
    { ProvinceID: 244, ProvinceName: 'Thái Nguyên' },
    { ProvinceID: 243, ProvinceName: 'Quảng Nam' },
    { ProvinceID: 242, ProvinceName: 'Quảng Ngãi' },
    { ProvinceID: 241, ProvinceName: 'Đắk Nông' },
    { ProvinceID: 240, ProvinceName: 'Tây Ninh' },
    { ProvinceID: 239, ProvinceName: 'Bình Phước' },
    { ProvinceID: 238, ProvinceName: 'Quảng Trị' },
    { ProvinceID: 237, ProvinceName: 'Quảng Bình' },
    { ProvinceID: 236, ProvinceName: 'Hà Tĩnh' },
    { ProvinceID: 235, ProvinceName: 'Nghệ An' },
    { ProvinceID: 234, ProvinceName: 'Thanh Hóa' },
    { ProvinceID: 233, ProvinceName: 'Ninh Bình' },
    { ProvinceID: 232, ProvinceName: 'Hà Nam' },
    { ProvinceID: 231, ProvinceName: 'Nam Định' },
    { ProvinceID: 230, ProvinceName: 'Quảng Ninh' },
    { ProvinceID: 229, ProvinceName: 'Phú Thọ' },
    { ProvinceID: 228, ProvinceName: 'Tuyên Quang' },
    { ProvinceID: 227, ProvinceName: 'Hà Giang' },
    { ProvinceID: 226, ProvinceName: 'Thái Bình' },
    { ProvinceID: 225, ProvinceName: 'Hải Dương' },
    { ProvinceID: 224, ProvinceName: 'Hải Phòng' },
    { ProvinceID: 223, ProvinceName: 'Thừa Thiên - Huế' },
    { ProvinceID: 221, ProvinceName: 'Vĩnh Phúc' },
    { ProvinceID: 220, ProvinceName: 'Cần Thơ' },
    { ProvinceID: 219, ProvinceName: 'Kiên Giang' },
    { ProvinceID: 218, ProvinceName: 'Sóc Trăng' },
    { ProvinceID: 217, ProvinceName: 'An Giang' },
    { ProvinceID: 216, ProvinceName: 'Đồng Tháp' },
    { ProvinceID: 215, ProvinceName: 'Vĩnh Long' },
    { ProvinceID: 214, ProvinceName: 'Trà Vinh' },
    { ProvinceID: 213, ProvinceName: 'Bến Tre' },
    { ProvinceID: 212, ProvinceName: 'Tiền Giang' },
    { ProvinceID: 211, ProvinceName: 'Long An' },
    { ProvinceID: 210, ProvinceName: 'Đắk Lắk' },
    { ProvinceID: 209, ProvinceName: 'Lâm Đồng' },
    { ProvinceID: 208, ProvinceName: 'Khánh Hòa' },
    { ProvinceID: 207, ProvinceName: 'Gia Lai' },
    { ProvinceID: 206, ProvinceName: 'Bà Rịa - Vũng Tàu' },
    { ProvinceID: 205, ProvinceName: 'Bình Dương' },
    { ProvinceID: 204, ProvinceName: 'Đồng Nai' },
    { ProvinceID: 203, ProvinceName: 'Đà Nẵng' },
    { ProvinceID: 202, ProvinceName: 'Hồ Chí Minh' },
    { ProvinceID: 201, ProvinceName: 'Hà Nội' },
]

// const getCities = async () => {
//     const res = await fetch(`${API_URI}/province`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             Token: `9c88f8b0-5619-11ed-b26c-02ed291d830a`,
//         },
//     })
//     const data = await res.json()
//     console.log(
//         data.data.map(item => {
//             return {
//                 ProvinceID: item.ProvinceID,
//                 ProvinceName: item.ProvinceName,
//             }
//         }),
//     )
// }

// getCities()
// console.log(provinces)
