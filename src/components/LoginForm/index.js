import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import logoGoogle from '../.././assets/images/2991148.png'
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
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { handleChange } from '../.././utils/handleForm'

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [user, setUser] = useState({})

    const handleSubmit = event => {
        event.preventDefault()
    }

    const loginGoole = () => {
        const URI = process.env.REACT_APP_GOOGLE_URL
        const width = 500
        const height = 600
        const h = (window.innerHeight - height) / 2
        const w = (window.innerWidth - width) / 2
        window.open(
            URI,
            '_blank',
            `width=${width},height=${height}px, top=${h}, left=${w}`,
        )
    }
    return (
        <>
            <Container component="div" maxWidth="xs">
                <Box className="d-flex flex-column align-items-center">
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
                            name="email"
                            autoComplete="email"
                            autoFocus
                            InputProps={{
                                onChange: e => handleChange(e, setUser),
                                inputProps: {
                                    pattern: process.env.REACT_APP_REGEX_AUTH,
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
                <Box
                    component="button"
                    sx={{
                        width: '396px',
                        height: '55px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: 'var(--box-shadow-main-2)',
                        borderRadius: '8px',
                        padding: '8px 0',
                        outline: 'none',
                        border: 'none',
                        marginTop: '6px',
                        transition: 'var(--transition-normal)',
                        '&:hover': {
                            transform: 'scale(.95)',
                            border: 'var(--main-blue) 1px solid',
                            // color: 'var(--main-white)',
                        },
                    }}
                    onClick={() => loginGoole()}
                >
                    <img
                        src={logoGoogle}
                        alt=""
                        style={{
                            width: '35px',
                        }}
                    />
                    <Typography
                        component="h2"
                        variant="h5"
                        sx={{
                            marginLeft: '24px',
                        }}
                    >
                        Đăng nhập bằng tài khoản Google
                    </Typography>
                </Box>
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
