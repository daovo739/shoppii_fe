import React from 'react'
import {
    Button,
    Typography,
    Modal,
    Box,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
} from '@mui/material'
import { Container, Row, Col } from 'react-bootstrap'
import { style } from '../../../../../components/ModalStyle'
import { Business } from '@mui/icons-material'
import ChangeAddressItem from '../ChangeAddressItem'
import { addressList } from '../SendTo'
import './index.css'

function ChangeAddressModal({ onClick }) {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [selected, setSelected] = React.useState('1')
    return (
        <>
            <Button sx={{ fontSize: '1.2rem' }} onClick={handleOpen}>
                Thay đổi
            </Button>
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
                    >
                        <Business
                            sx={{ fontSize: '27px', marginRight: '2rem' }}
                        />
                        Thay đổi địa chỉ
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} component="div">
                        <FormControl sx={{ width: '100%' }}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                value={selected}
                                onChange={e => setSelected(e.target.value)}
                            >
                                {addressList.map(item => (
                                    <ChangeAddressItem
                                        key={item.id}
                                        isDefault={item.isDefault}
                                        name={item.name}
                                        phone={item.phone}
                                        id={item.id}
                                        address={item.address}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </Typography>
                    <Button
                        onClick={() => {
                            handleClose()
                            return onClick(selected)
                        }}
                        className="change-address-btn"
                        sx={{
                            width: '20%',
                            backgroundColor: '#2877ee',
                            color: 'white',
                            fontSize: '1.3rem',
                            margin: '1.5rem',
                            float: 'right',
                            border: '2px solid #2877ee'
                        }}
                    >
                        Xác nhận
                    </Button>
                </Box>
            </Modal>
        </>
    )
}

export default ChangeAddressModal
