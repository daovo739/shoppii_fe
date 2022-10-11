import React from 'react'
import { Box, Modal, Typography, TextField } from '@mui/material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import './index.css'
import { Container, Row, Col } from 'react-bootstrap'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
}

function AddressModal() {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div>
            <Box
                className="add-new-address d-flex justify-content-center"
                component="span"
                onClick={handleOpen}
                sx={{ p: 2, border: '1px dashed grey' }}
            >
                <AddOutlinedIcon sx={{ fontSize: '25px', color: 'gray' }} />
                <div className="ms-3 pt-1">THÊM ĐỊA CHỈ MỚI</div>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h4"
                        component="h2"
                        sx={{}}
                    >
                        Thêm địa chỉ mới
                    </Typography>
                    <Container fluid='md'>
                      <Row>
                        <Col md={6}>
                          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        </Col>
                      </Row>
                    </Container>
                </Box>
            </Modal>
        </div>
    )
}

export default AddressModal
