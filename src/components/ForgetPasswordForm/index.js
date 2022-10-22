import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {Password} from '@mui/icons-material';
import {
    Box,
    Avatar,
    Typography,
    TextField,
    InputAdornment,
    IconButton,
    Button,
} from '@mui/material'

function ForgetPasswordForm() {
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
                        <Password sx={{ fontSize: '24px' }} />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        Quên Mật Khẩu
                    </Typography>
                    <Box
                        component="form"
                        // onSubmit={handleSubmit}
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
                                // onChange: e => handleChange(e, setUser),
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
                            name="token"
                            label="Nhập mã bảo mật"
                            id="token"
                            InputProps={{
                                label: 'Nhập mã bảo mật aaaaaa'
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
                </Box>
            </Container>
        </>
    )
}

export default ForgetPasswordForm
