import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {
    InputAdornment,
    IconButton,
    Container,
    Typography,
    Avatar,
    Button,
    TextField,
    Box,
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { handleChange, handleFormData } from '../.././utils/handleForm'
import { GoogleLogin } from '@react-oauth/google'
import { post } from '../.././utils/httprequest'
import { toast } from 'react-toastify'
import { useAuth } from '../.././hooks/useAuth'
import { ROLE_ADMIN, ROLE_USER } from '../.././hooks/constants'
import jwt_decode from 'jwt-decode'
import { userSchema } from '../common/schema/authenticateSchema'

function LoginForm() {
    const { login } = useAuth()
    const toastId = useRef()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [user, setUser] = useState({})
    const [errors, setErrors] = useState({})

    const handleLoginGoogle = async response => {
        const decoded = jwt_decode(response.credential)
        const { email } = decoded
        const res = await post('auth/check-email', { email })
        if (res.status === 404) {
            navigate('/registerGG', { state: decoded }, { replace: true })
        } else if (res.status === 200) {
            const data = await res.json()
            login(
                {
                    ...data,
                    isGoogle: true,
                    avatar: decoded.picture,
                },
                ROLE_USER,
            )
        } else {
            toast.error('Đăng nhập thất bại')
        }
    }

    const handleSubmit = async event => {
        event.preventDefault()
        const { info, password } = user
        if (info === 'admin' && password === 'admin') {
            login(null, ROLE_ADMIN)
        } else {
            console.log(user)
            try {
                await userSchema.validate(user, {
                    abortEarly: false,
                })
            } catch (error) {
                const newErrors = {}
                error.inner.forEach(err => {
                    newErrors[err.path] = err.message
                })
                setErrors(newErrors)
                return
            }
            setErrors({})
            toastId.current = toast('Đang đăng nhập', { autoClose: false })
            const res = await post('auth/login', user)
            const data = await res.json()
            if (res.status === 200) {
                login(data, ROLE_USER)
                toast.update(toastId.current, {
                    render: 'Đăng nhập thành công',
                    type: toast.TYPE.SUCCESS,
                    autoClose: 600,
                })
            } else {
                toast.update(toastId.current, {
                    render: data?.msg || 'Đăng nhập thất bại',
                    type: toast.TYPE.ERROR,
                    autoClose: 600,
                })
            }
        }
    }

    return (
        <>
            <Container component="div" maxWidth="xs">
                <Box className="d-flex flex-column align-items-center mt-4">
                    <Avatar
                        sx={{
                            m: 1,
                            bgcolor: 'primary.main',
                            width: '50px',
                            height: '50px',
                        }}
                    >
                        <LockOutlinedIcon sx={{ fontSize: '24px' }} />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        Đăng Nhập
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Nhập email hoặc số điện thoại"
                            name="info"
                            autoComplete="email"
                            autoFocus
                            onChange={e => handleChange(e, setUser)}
                            error={!!errors?.info}
                            helperText={errors?.info}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Mật khẩu"
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            autoComplete="current-password"
                            InputProps={{
                                label: 'Mật khẩu aaa',
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onMouseDown={e => {
                                                setShowPassword(true)
                                            }}
                                            onMouseUp={e => {
                                                setShowPassword(false)
                                            }}
                                            edge="end"
                                        >
                                            {showPassword ? (
                                                <VisibilityOff
                                                    sx={{
                                                        fontSize: '2.5rem',
                                                    }}
                                                />
                                            ) : (
                                                <Visibility
                                                    sx={{
                                                        fontSize: '2.5rem',
                                                    }}
                                                />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                onChange: e => handleChange(e, setUser),
                            }}
                            error={!!errors?.password}
                            helperText={errors?.password}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, fontSize: '1.4rem' }}
                        >
                            Đăng Nhập
                        </Button>
                    </Box>
                </Box>
            </Container>
            <Box
                component="div"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    // alignItems: 'center',
                    padding: '0 24px',
                }}
            >
                <Typography
                    component="h1"
                    variant="h5"
                    sx={{
                        margin: '0 auto',
                        fontWeight: 'bold',
                    }}
                >
                    HOẶC
                </Typography>

                <div className=" d-flex justify-content-center py-3">
                    <GoogleLogin
                        clientId={import.meta.env.REACT_APP_GOOGLE_CLIENT_ID}
                        buttonText="Đăng nhập bằng tài khoản Google"
                        onSuccess={handleLoginGoogle}
                        onError={res => {
                            toast.error('Đăng nhập thất bại')
                        }}
                        cookiePolicy={'single_host_origin'}
                        className="btn-google"
                    />
                </div>

                <Box
                    component="div"
                    className="d-flex justify-content-between align-items-center"
                    sx={{
                        marginTop: '12px',
                    }}
                >
                    <Link to="/forget-password">
                        <Typography component="h5" sx={{ fontSize: '1.5rem' }}>
                            Quên mật khẩu?
                        </Typography>
                    </Link>
                    <Link to="/register">
                        <Typography component="h5" sx={{ fontSize: '1.5rem' }}>
                            Đăng ký
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </>
    )
}

export default LoginForm
