import { Typography, TextField, Button, Box } from '@mui/material'
import { post } from '../../../../utils/httprequest'

function FormReset() {
    const handleAuth = async () => {}
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
                    id="email"
                    label="Nhập mật khẩu mới"
                    name="info"
                    autoComplete="email"
                    autoFocus
                    InputProps={{
                        label: 'Nhập mật khẩu mới aaaaaaaaaaa',
                        // onChange: e => handleChange(e, setUser),
                    }}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="token"
                    label="Nhập lại mật khẩu mới"
                    id="token"
                    InputProps={{
                        label: 'Nhập lại mật khẩu mới aaaaaa',
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
