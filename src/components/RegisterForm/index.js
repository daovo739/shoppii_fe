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
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import { useState } from 'react'
import { handleChange } from '../.././utils/handleForm'
import { toast } from 'react-toastify'
import { post } from '../../utils/httprequest'
import { style } from '.././ModalStyle/index'
import Modal from '@mui/material/Modal';

function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [showRePassword, setShowRePassword] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [token, setToken] = useState('')
    const [user, setUser] = useState({})
    const handleSubmit = async (event) => {
        event.preventDefault()
        const { email, password, repassword } = user
        console.log(user);
        if (password !== repassword) {
            toast.error('Mật khẩu không khớp')
        } else {
            const formData = new FormData()
            formData.append('email', email)
            formData.append('password', password)
            formData.append('rePassword', repassword)
            // const data = await post('user/register', formData)
            // console.log(data)
            setToken('AJDAJNDANDAJDNJ')
            toast.success('Đăng ký thành công')
            setShowModal(true)
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
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="repassword"
                            label="Nhập lại mật khẩu"
                            type={showRePassword ? 'text' : 'password'}
                            id="repassword"
                            autoComplete="current-password"
                            InputProps={{
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
                    if (reason !== "backdropClick") {
                        setShowModal(false);
                    }
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableBackdropClick={false}
                disableEscapeKeyDown
                BackdropProps={
                    {}
                }
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center'>
                        Lưu lại mã bảo mật để khôi phục tài khoản
                        <br />Đừng chia sẻ nó với bất kì ai
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight: 'bold' }} className='text-center'>
                        {token}
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default RegisterForm
