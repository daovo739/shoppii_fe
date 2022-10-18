import React from 'react'
import { Button, Typography, Modal, Box } from '@mui/material'
import { style } from '../../../../../components/ModalStyle'
import ShippingUnit from '../ShippingUnit'
import { LocalShippingOutlined } from '@mui/icons-material'
import { shippingUnit } from '../CheckoutShop/ShippingUnitData'
import './index.css'

const normalStyle = {
    padding: '2rem',
    borderRadius: '6px',
    cursor: 'pointer',
}
const selectedStyle = {
    padding: '2rem',
    backgroundColor: '#f0f8ff',
    borderRadius: '6px',
    cursor: 'pointer',
}

function ShippingUnitModal({ onClick }) {
    const [selected, setSelected] = React.useState(0)
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const getSelectedUnit = index => {
        setSelected(index)
    }

    return (
        <>
            <Button
                onClick={handleOpen}
                sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            >
                THAY ĐỔI
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
                        <LocalShippingOutlined
                            sx={{ fontSize: '27px', marginRight: '2rem' }}
                        />
                        Chọn đơn vị vận chuyển
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {shippingUnit.map((unit, index) => (
                            <ShippingUnit
                                key={index}
                                index={index}
                                name={unit.name}
                                price={unit.price}
                                style={
                                    index === selected
                                        ? selectedStyle
                                        : normalStyle
                                }
                                onClick={getSelectedUnit}
                            />
                        ))}
                        <div className="d-flex justify-content-end">
                          <Button
                              onClick={() => {
                                handleClose()
                                return onClick(selected)
                              }}
                              className="shipping-unit-btn"
                              sx={{
                                  width: '20%',
                                  backgroundColor: '#2877ee',
                                  color: 'white',
                                  fontSize: '1.3rem',
                                  margin: '1.5rem'
                              }}
                          >
                              Hoàn thành
                          </Button>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default ShippingUnitModal
