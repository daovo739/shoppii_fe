import { CrisisAlert } from '@mui/icons-material'
import { Container, Row } from 'react-bootstrap'
import { Button } from '@mui/material'
import RegisterShopForm from '../RegisterShopForm'

function Unregistered({ onClick }) {
    return (
        <>
            <Container fluid="md">
                <Row className="d-flex justify-content-center align-items-center">
                    <CrisisAlert
                        sx={{
                            fontSize: '120px',
                            color: 'var(--main-blue)',
                        }}
                    />
                </Row>
                <Row className="text-lg-center">
                    <div style={{ fontSize: '2.5rem' }}>
                        Đăng ký để trở thành cửa hàng tại Shoppii
                    </div>
                </Row>
                <Row className="d-flex justify-content-center align-items-center mt-4">
                    <Button
                        sx={{ width: '12rem', fontSize: '1.5rem' }}
                        variant="contained"
                        onClick={() => onClick(true)}
                    >
                        Đăng ký
                    </Button>
                </Row>
            </Container>
        </>
    )
}

export default Unregistered
