import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './index.css'
import { TextField, Button, InputAdornment, IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { handleChange, handleFormData } from '../../../../../utils/handleForm'
import { put } from '../../../../../utils/httprequest'
import { toast } from 'react-toastify'
import { useAuth } from '../../../../../hooks/useAuth'
function ChangPassword() {
    const { user } = useAuth()
    const [showPassword, setShowPassword] = useState(false)
    const [showOldPassword, setShowOldPassword] = useState(false)
    const [showRePassword, setShowRePassword] = useState(false)
    const [auth, setAuth] = useState({
        oldPassword: '',
        newPassword: '',
        reNewPassword: '',
        userId: user.userId,
    })

    const handleSubmit = async e => {
        e.preventDefault()
        if (auth.newPassword !== auth.reNewPassword) {
            toast.error('Mật khẩu không khớp')
        } else {
            const formData = handleFormData(auth)
            const res = await put('user/change-password', formData)
            const data = await res.json()
            if (res.status >= 200 && res.status < 300) {
                toast.success('Đổi mật khẩu thành công')
            } else {
                toast.error('Mật khẩu cũ không đúng')
            }
            setAuth({
                oldPassword: '',
                newPassword: '',
                reNewPassword: '',
                userId: user.userId,
            })
        }
    }

    return (
        <Container fluid="md">
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col md={12} className="d-flex justify-content-center">
                        <TextField
                            className="w-50"
                            required
                            value={auth.oldPassword}
                            size="small"
                            margin="normal"
                            name="oldPassword"
                            label="Mật khẩu hiện tại"
                            type={showOldPassword ? 'text' : 'password'}
                            id="password"
                            autoComplete="current-password"
                            InputProps={{
                                label: 'Mật khẩu hiện tại aaaaaa',
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onMouseDown={e => {
                                                setShowOldPassword(true)
                                            }}
                                            onMouseUp={e => {
                                                setShowOldPassword(false)
                                            }}
                                            edge="end"
                                        >
                                            {showOldPassword ? (
                                                <VisibilityOff
                                                    sx={{
                                                        fontSize: '2.2rem',
                                                    }}
                                                />
                                            ) : (
                                                <Visibility
                                                    sx={{
                                                        fontSize: '2.2rem',
                                                    }}
                                                />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                onChange: e => handleChange(e, setAuth),
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="d-flex justify-content-center">
                        <TextField
                            className="w-50"
                            required
                            value={auth.newPassword}
                            size="small"
                            margin="normal"
                            name="newPassword"
                            label="Mật khẩu mới"
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            autoComplete="current-password"
                            InputProps={{
                                label: 'Mật khẩu mới aaa',
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
                                                        fontSize: '2.2rem',
                                                    }}
                                                />
                                            ) : (
                                                <Visibility
                                                    sx={{
                                                        fontSize: '2.2rem',
                                                    }}
                                                />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                onChange: e => handleChange(e, setAuth),
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="d-flex justify-content-center">
                        <TextField
                            required
                            size="small"
                            value={auth.reNewPassword}
                            margin="normal"
                            className="w-50"
                            name="reNewPassword"
                            label="Nhập lại mật khẩu"
                            type={showRePassword ? 'text' : 'password'}
                            id="repassword"
                            autoComplete="current-password"
                            InputProps={{
                                label: 'Nhập lại mật khẩu aaaaaa',
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onMouseDown={e => {
                                                setShowRePassword(true)
                                            }}
                                            onMouseUp={e => {
                                                setShowRePassword(false)
                                            }}
                                            edge="end"
                                        >
                                            {showRePassword ? (
                                                <VisibilityOff
                                                    sx={{
                                                        fontSize: '2.2rem',
                                                    }}
                                                />
                                            ) : (
                                                <Visibility
                                                    sx={{
                                                        fontSize: '2.2rem',
                                                    }}
                                                />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                onChange: e => handleChange(e, setAuth),
                            }}
                        />
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center mt-4">
                    <Button
                        variant="contained"
                        className="fs-5 w-25"
                        type="submit"
                    >
                        Xác nhận
                    </Button>
                </Row>
            </form>
        </Container>
    )
}

export default ChangPassword
