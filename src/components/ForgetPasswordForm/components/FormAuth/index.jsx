import { useState } from 'react'
import {
    Typography,
    TextField,
    Button,
    Box,
    InputAdornment,
    IconButton,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { post } from '../../../../utils/httprequest'
import { handleChange, handleFormData } from '../../../../utils/handleForm'
import { toast } from 'react-toastify'

function FormAuth({ setIsAuth, setTokens }) {
    const [auth, setAuth] = useState({})
    const [showPassword, setShowPassword] = useState(false)

    const handleReset = async e => {
        e.preventDefault()
        const formData = handleFormData(auth)
        console.log(auth)
        const res = await post('reset-password', formData)
        const data = await res.json()
        console.log(res)
        console.log(data)
        if (res.status === 200) {
            setTokens(data)
            setIsAuth(true)
        }
        if (res.status === 500) {
            toast.error('Yêu cầu thất bại')
        }
    }

    return (
        <>
            <Typography component="h1" variant="h4">
                Quên mật khẩu
            </Typography>
            <Box component="form" onSubmit={handleReset} sx={{ mt: 1 }}>
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
                        // onChange: e => handleChange(e, setUser),
                        inputProps: {
                            pattern: import.meta.env.REACT_APP_REGEX_AUTH_LOGIN,
                            title: 'Vui lòng nhập email hoặc số điện thoại',
                        },
                    }}
                    onChange={e => handleChange(e, setAuth)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="code"
                    type={showPassword ? 'text' : 'password'}
                    label="Nhập mã bảo mật"
                    id="token"
                    InputProps={{
                        label: 'Nhập mã bảo mật aaaaaa',
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
                    }}
                    onChange={e => handleChange(e, setAuth)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, fontSize: '1.4rem' }}
                >
                    Gửi
                </Button>
            </Box>
        </>
    )
}

export default FormAuth
