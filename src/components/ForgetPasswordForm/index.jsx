import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Password } from '@mui/icons-material'
import { Box, Avatar } from '@mui/material'
import FormAuth from './components/FormAuth'
import FormReset from './components/FormReset'

function ForgetPasswordForm() {
    const [isAuth, setIsAuth] = useState(false)

    return (
        <>
            <Container component="div">
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
                    {isAuth ? (
                        <FormReset />
                    ) : (
                        <FormAuth setIsAuth={setIsAuth} />
                    )}
                </Box>
            </Container>
        </>
    )
}

export default ForgetPasswordForm
