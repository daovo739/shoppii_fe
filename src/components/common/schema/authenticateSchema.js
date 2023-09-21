import { object, string } from 'yup'

export const userSchema = object({
    info: string()
        .required('Vui lòng nhập thông tin đăng nhập')
        .matches(
            /\b(?:0\d{9}|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})\b/,
            'Vui lòng nhập đúng định dạng email hoặc số điện thoại',
        ),
    password: string()
        .required('Vui lòng nhập mật khẩu')
        .matches(/^[^\s]{6,}$/, 'Mật khẩu phải có ít nhất 6 ký tự'),
})

export const registerSchema = object({
    phone: string()
        .required('Vui lòng nhập số điện thoại')
        .matches(/^0\d{9}$/, 'Vui lòng nhập đúng định dạng số điện thoại'),
    password: string()
        .required('Vui lòng nhập mật khẩu')
        .matches(/^[^\s]{6,}$/, 'Mật khẩu phải có ít nhất 6 ký tự'),
    rePassword: string()
        .required('Vui lòng nhập mật khẩu')
        .matches(/^[^\s]{6,}$/, 'Mật khẩu phải có ít nhất 6 ký tự')
        .test('password-match', 'Mật khẩu không khớp', function (value) {
            return this.parent.password === value
        }),
})

export const registerGoogleSchema = object({
    password: string()
        .required('Vui lòng nhập mật khẩu')
        .matches(/^[^\s]{6,}$/, 'Mật khẩu phải có ít nhất 6 ký tự'),
    rePassword: string()
        .required('Vui lòng nhập mật khẩu')
        .matches(/^[^\s]{6,}$/, 'Mật khẩu phải có ít nhất 6 ký tự')
        .test('password-match', 'Mật khẩu không khớp', function (value) {
            return this.parent.password === value
        }),
})
