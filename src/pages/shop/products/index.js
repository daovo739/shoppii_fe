import './index.css'
import { Box, TextField, Divider } from '@mui/material'
import { Search } from '@mui/icons-material'
import { Row, Col, Button } from 'react-bootstrap'

function ShopProducts() {
    return (
        <Box sx={{ paddingTop: '120px' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}
            >
                <Button
                    variant="primary"
                    className="h-100"
                    style={{
                        fontSize: '1.6rem',
                        maxWidth: '80%',
                        padding: '1.5rem 1.7rem',
                    }}
                >
                    Tạo sản phẩm mới
                </Button>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '3rem',
                        width: '600px',
                        maxWidth: '600px',
                    }}
                >
                    <Search
                        sx={{
                            color: 'action.active',
                            mr: 1,
                            my: 0.5,
                            fontSize: '3rem',
                        }}
                    />
                    <TextField
                        id="input-with-sx"
                        label="Tìm kiếm sản phẩm"
                        variant="filled"
                        sx={{
                            width: '100%',
                        }}
                    />
                </Box>
            </Box>

            <Box sx={{ marginTop: '2rem' }}>
                <Row>
                    <Col md={1}>NO</Col>
                    <Col md={4}>Hình ảnh</Col>
                    <Col md={5}>Thông tin sản phẩm</Col>
                    <Col md={2}></Col>
                </Row>
                <Divider sx={{ borderColor: '#333' }} />
            </Box>
        </Box>
    )
}

export default ShopProducts
