import { TextField, Button, Avatar } from '@mui/material'
import {
    Row,
    Container,
    Col,
    Button as ButtonBootstrap,
    Modal,
    Form,
} from 'react-bootstrap'
import { handleChange } from '../../../../utils/handleForm'

function FormShop({ shopInfo, setInfoUpdate, handleUpdate, infoUpdate }) {
    return (
        <>
            <Col md={7} className="profile-content d-flex align-items-center">
                <Container>
                    <Row>
                        <TextField
                            required
                            id="outlined-required"
                            label="Tên cửa hàng"
                            defaultValue={shopInfo?.name}
                            size="small"
                            margin="normal"
                            fullWidth
                            name="name"
                            onChange={e => handleChange(e, setInfoUpdate)}
                            inputProps={{ style: { fontSize: '1.3rem' } }}
                            InputLabelProps={{
                                style: { fontSize: '1.3rem' },
                            }}
                            InputProps={{
                                label: 'Tên cửa hàng aaaa',
                            }}
                        />
                    </Row>
                    <Row>
                        <TextField
                            id="outlined-required"
                            label="Địa chỉ"
                            defaultValue={shopInfo?.address}
                            size="small"
                            margin="normal"
                            fullWidth
                            name="address"
                            onChange={e => handleChange(e, setInfoUpdate)}
                            inputProps={{ style: { fontSize: '1.3rem' } }}
                            InputLabelProps={{
                                style: { fontSize: '1.3rem' },
                            }}
                            InputProps={{
                                label: 'Địa chỉ aa',
                            }}
                        />
                    </Row>  

                    <Row className="d-flex justify-content-center pt-2">
                        <Button
                            variant="contained"
                            className="fs-4 w-25"
                            onClick={handleUpdate}
                            disabled={infoUpdate.name === '' && infoUpdate.address === '' && infoUpdate.description === ''}
                        >
                            Lưu
                        </Button>
                    </Row>
                </Container>
            </Col>
            <Col
                md={12}
                style={{
                    maxWidth: '50%',
                    marginTop: '10px',
                }}
                className="d-flex justify-content-center flex-column"
            >
                <TextField
                    id="outlined-required"
                    label="Mô tả cửa hàng"
                    defaultValue={shopInfo?.description}
                    size="small"
                    margin="normal"
                    name="description"
                    onChange={e => handleChange(e, setInfoUpdate)}
                    fullWidth
                    multiline
                    minRows={8}
                    maxRows={12}
                    inputProps={{ style: { fontSize: '1.3rem' } }}
                    InputLabelProps={{
                        style: { fontSize: '1.3rem' },
                    }}
                    InputProps={{
                        label: 'Mô tả aaaaaaaaaaaaa',
                    }}
                />
            </Col>
        </>
    )
}

export default FormShop
