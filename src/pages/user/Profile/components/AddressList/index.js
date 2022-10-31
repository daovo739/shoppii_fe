import { useEffect, useState, useReducer, useCallback } from 'react'
import './index.css'
import AddressItem from '../Address'
import AddressModal from '../AddressModal'
import useStore from '../../../../../store/hooks'
import { get } from '../../../../../utils/httprequest'
import queryString from 'query-string'
import { useAuth } from '../../../../../hooks/useAuth'
import { Box, Button, Modal, Typography } from '@mui/material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import reducer, { initState } from '../AddressModal/hook/reducer'
import { reset } from '../AddressModal/hook/instant'
import { handleFormData } from '../../../../../utils/handleForm'
import { post, put } from '../../../../../utils/httprequest'

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

function AddressList() {
    const { user } = useAuth()
    const [state, dispatch] = useReducer(reducer, initState)
    const { addresses, getAddresses } = useStore()
    const [open, setOpen] = useState(false)
    const [openModalEdit, setOpenModalEdit] = useState(false)
    const [openModalCreate, setOpenModalCreate] = useState(false)
    const [idAction, setIdAction] = useState('')
    const [addressAction, setAddressAction] = useState({
        userId: user.userId,
        receiverAddress: '',
        receiverName: '',
        receiverPhone: '',
    })

    const handleOpen = useCallback(id => {
        console.log(id)
        setIdAction(id)
        setOpen(true)
    }, [])

    const handleOpenModalEdit = useCallback(
        id => {
            const address = addresses.find(address => address.addressId === id)
            console.log(address)
            setAddressAction(address)
            setIdAction(id)
            setOpenModalEdit(true)
        },
        [addresses],
    )

    const handleClose = useCallback(() => {
        setOpen(false)
    }, [])

    const handleCloseModalEdit = useCallback(() => {
        setOpenModalEdit(false)
    }, [])

    const handleOpenModalCreate = useCallback(() => {
        setAddressAction({
            userId: user.userId,
            addressId: '',
            receiverAddress: '',
            receiverName: '',
            receiverPhone: '',
        })
        setOpenModalCreate(true)
    }, [])

    const handleCloseModalCreate = useCallback(() => {
        setOpenModalCreate(false)
    }, [])

    const handleDelete = async () => {
        console.log(idAction)
    }

    const handleEdit = async e => {
        e.preventDefault()
        console.log(idAction)
    }

    const handleCreate = async e => {
        e.preventDefault()
        const data = {
            ...addressAction,
            province: state.city.ProvinceName,
            district: state.district.DistrictName,
            ward: state.ward.WardName,
        }
        const formData = handleFormData(data)
        console.log(data)
        setAddressAction({
            userId: user.userId,
            receiverAddress: '',
            receiverName: '',
            receiverPhone: '',
        })
        dispatch({ type: reset })
        setOpenModalCreate(false)
    }

    return (
        <div className="address-list w-100 h-auto">
            {addresses.map(address => (
                <AddressItem
                    key={address.addressId}
                    address={address}
                    open={open}
                    handleOpen={handleOpen}
                    handleOpenModalEdit={handleOpenModalEdit}
                />
            ))}
            <Box
                className="add-new-address d-flex justify-content-center"
                component="span"
                onClick={handleOpenModalCreate}
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
                <Box sx={{ ...style, width: '400px' }}>
                    <Typography
                        id="modal-modal-title"
                        variant="h4"
                        component="h2"
                        style={{
                            textAlign: 'center',
                            marginBottom: '2rem',
                        }}
                    >
                        Xóa địa chỉ này
                    </Typography>
                    <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2 }}
                        component="div"
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Button
                                sx={{
                                    marginRight: '8rem',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    color: 'var(--main-green)',
                                }}
                                onClick={handleClose}
                            >
                                Hủy
                            </Button>
                            <Button
                                sx={{
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    color: 'var(--main-red)',
                                }}
                                onClick={handleDelete}
                            >
                                Có
                            </Button>
                        </div>
                    </Typography>
                </Box>
            </Modal>
            <AddressModal
                open={openModalEdit}
                handleClose={handleCloseModalEdit}
                isEdit={true} // isEdit = true => update address
                handleFunction={handleEdit}
                addressAction={addressAction}
                setAddressAction={setAddressAction}
                state={state} // state for modal create address
                dispatch={dispatch} // dispatch for modal create address
            />
            <AddressModal
                open={openModalCreate}
                handleClose={handleCloseModalCreate}
                isEdit={false} // isEdit = true => update address
                handleFunction={handleCreate}
                addressAction={addressAction}
                setAddressAction={setAddressAction}
                state={state} // state for modal create address
                dispatch={dispatch} // dispatch for modal create address
            />
        </div>
    )
}

export default AddressList
