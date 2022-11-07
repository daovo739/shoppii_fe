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
import { toast } from 'react-toastify'
import { put } from '../../../../utils/httprequest'
import { handleChange } from '../../../../utils/handleForm'
import { handleFormData } from '../../../../utils/handleForm'
import { useNavigate } from 'react-router-dom'

function FormReset({ tokens }) {
    // console.log(tokens)
    const navigate = useNavigate()
    const [reset, setReset] = useState({})
    const [showPassword, setShowPassword] = useState(false)
    const [showRePassword, setReShowPassword] = useState(false)

    const handleAuth = async e => {
        e.preventDefault()
        if (reset.password !== reset.rePassword) {
            toast.error('Mật khẩu không khớp')
            return
        }

        const formData = handleFormData({ ...reset, ...tokens })
        const res = await put('reset-password', formData)
        const data = await res.json()
        if (res.status === 200) {
            toast.success('Đổi mật khẩu thành công')
            navigate('/login', { replace: true })
        } else {
            toast.error('Đổi mật khẩu thất bại')
        }
        console.log(res)
        console.log(data)
    }
    return (
        <>
            <Typography component="h1" variant="h4">
                Thay đổi mật khẩu
            </Typography>
            <Box component="form" onSubmit={handleAuth} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Nhập mật khẩu mới"
                    name="password"
                    autoFocus
                    onChange={e => handleChange(e, setReset)}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="current-password"
                    InputProps={{
                        label: 'Nhập mật khẩu mới aaaaaaaaaaa',
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
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="rePassword"
                    label="Nhập lại mật khẩu mới"
                    id="token"
                    onChange={e => handleChange(e, setReset)}
                    type={showRePassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    InputProps={{
                        label: 'Nhập lại mật khẩu mới aaaaaa',
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onMouseDown={e => {
                                        setReShowPassword(true)
                                    }}
                                    onMouseUp={e => {
                                        setReShowPassword(false)
                                    }}
                                    edge="end"
                                >
                                    {showRePassword ? (
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

export default FormReset
