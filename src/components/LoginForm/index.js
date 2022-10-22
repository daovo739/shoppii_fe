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
import { useState, useEffect } from 'react'
import { handleChange, handleFormData } from '../.././utils/handleForm'
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'
import { post } from '../.././utils/httprequest'
import { toast } from 'react-toastify'
import { useAuth } from '../.././hooks/useAuth'
import { ROLE_ADMIN, ROLE_USER } from '../.././hooks/constants'

function LoginForm() {
    const { login } = useAuth()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [user, setUser] = useState({})
    useEffect(() => {
        gapi.load('client:auth2', () => {
            gapi.auth2.getAuthInstance({
                clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            })
        })
    }, [])

    const handleLoginGoogle = async response => {
        console.log(response)
        const { email } = response.profileObj
        const formData = handleFormData({ email })
        const res = await post('isRegistered', formData)
        const data = await res.json()

        if (data.statusCode === 404) {
            navigate('/registerGG', { state: response }, { replace: true })
        } else {
            login(data, ROLE_USER)
        }
    }

    const handleSubmit = async event => {
        event.preventDefault()
        const { email, password } = user
        if (email === 'admin' && password === 'admin') {
            login(null, ROLE_ADMIN)
        }
        const formData = handleFormData(user)
        const res = await post('auth', formData)
        const data = await res.json()
        console.log(user)
        console.log(data)
        if (res.status === 200) {
            login(data, ROLE_USER)
        } else {
            toast.error(data.message)
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
                            required
                            fullWidth
                            id="email"
                            label="Nhập email hoặc số điện thoại"
                            name="info"
                            autoComplete="email"
                            autoFocus
                            InputProps={{
                                label: 'Nhập email hoặc số điện thoại aaaaaaaaaaa',
                                onChange: e => handleChange(e, setUser),
                                inputProps: {
                                    pattern:
                                        process.env.REACT_APP_REGEX_AUTH_LOGIN,
                                    title: 'Vui lòng nhập email hoặc số điện thoại',
                                },
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
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

                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Đăng nhập bằng tài khoản Google"
                    onSuccess={handleLoginGoogle}
                    onFailure={() => {
                        toast.error('Đăng nhập thất bại')
                    }}
                    cookiePolicy={'single_host_origin'}
                    className="btn-google"
                    style={{
                        marginTop: '10px',
                    }}
                />

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
