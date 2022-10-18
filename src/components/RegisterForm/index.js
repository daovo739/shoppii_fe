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
    Modal,
    Tooltip,
} from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import { useState } from 'react'
import { handleChange, handleFormData } from '../.././utils/handleForm'
import { toast } from 'react-toastify'
import { post } from '../../utils/httprequest'
import { style } from '.././ModalStyle/index'
import { Link } from 'react-router-dom'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [showRePassword, setShowRePassword] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [token, setToken] = useState('')
    const [user, setUser] = useState({})

    const handleSubmit = async event => {
        event.preventDefault()
        const { password, rePassword } = user
        console.log(user)
        if (password !== rePassword) {
            toast.error('Mật khẩu không khớp')
        } else {
            const formData = handleFormData(user)
            const res = await post('user/register', formData)
            const data = await res.json()
            console.log(res)
            if (res.status === 201) {
                toast.success('Đăng ký thành công')
                setToken(data.securityCode)
                setShowModal(true)
            } else {
                toast.error(data.message)
            }
        }
    }

    return (
        <>
            <Container component="div" maxWidth="xs">
                <Box className="d-flex flex-column align-items-center mt-5">
                    <Avatar
                        sx={{
                            m: 1,
                            bgcolor: 'primary.main',
                            width: '50px',
                            height: '50px',
                        }}
                    >
                        <AppRegistrationIcon sx={{ fontSize: '24px' }} />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        Đăng Ký
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
                            label="Nhập số điện thoại"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            InputProps={{
                                onChange: e => handleChange(e, setUser),
                                inputProps: {
                                    pattern:
                                        process.env
                                            .REACT_APP_REGEX_AUTH_REGISTER,
                                    title: 'Vui lòng số điện thoại',
                                },
                                label: 'Nhập số điện thoại aaaaasa',
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
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="rePassword"
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
                            Đăng Ký
                        </Button>
                    </Box>
                </Box>
            </Container>
            <Modal
                open={showModal}
                onClose={(_, reason) => {
                    if (reason !== 'backdropClick') {
                        setShowModal(false)
                    }
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableEscapeKeyDown
                BackdropProps={{}}
            >
                <Box
                    sx={{
                        ...style,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '5rem',
                        width: '550px',
                    }}
                >
                    <Typography
                        id="modal-modal-title"
                        variant="h4"
                        component="h1"
                        className="text-center w-100"
                    >
                        Lưu lại mã bảo mật để khôi phục tài khoản
                        <br />
                        Đừng chia sẻ nó với bất kì ai
                    </Typography>
                    <Box
                        component="div"
                        className="d-flex justify-content-between align-items-end"
                    >
                        <Typography
                            id="modal-modal-description"
                            sx={{
                                mt: 2,
                                fontWeight: 'bold',
                                fontSize: '3.2rem',
                            }}
                            className="text-center"
                        >
                            {token}
                        </Typography>
                        <Tooltip
                            title={<p style={{ fontSize: '1rem' }}>Copy</p>}
                        >
                            <Button
                                className="mb-2"
                                onClick={() => {
                                    navigator.clipboard.writeText(token)
                                    toast('Đã copy mã bảo mật')
                                }}
                            >
                                <ContentCopyIcon />
                            </Button>
                        </Tooltip>
                    </Box>

                    <Button
                        variant="contained"
                        color="success"
                        sx={{
                            marginTop: '10px',
                        }}
                    >
                        <Link
                            to="/login"
                            style={{
                                color: '#fff',
                                fontSize: '1.5rem',
                            }}
                        >
                            Đăng nhập
                        </Link>
                    </Button>
                </Box>
            </Modal>
        </>
    )
}

export default RegisterForm
