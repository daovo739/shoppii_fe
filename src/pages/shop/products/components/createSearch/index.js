import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Box, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'
import { handleChange } from '../../../../../utils/handleForm'
import { get } from '../../../../../utils/httprequest'
import queryString from 'query-string'
import { useAuth } from '../../../../../hooks/useAuth'
import CreateProductModal from '../CreateProductModal'
function CreateAndSearch({ setProducts, fetchProducts }) {
    const { user } = useAuth()
    const [search, setSearch] = useState({ keyword: '', shopId: user.userId })
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useEffect(() => {
        getProducts()
    }, [search])

    const getProducts = async () => {
        const q = queryString.stringify(search)
        const res = await get('shop/products', q)
        const data = await res.json()
        setProducts(data)
    }
    return (
        <>
            <Button
                variant="primary"
                className="h-100"
                style={{
                    fontSize: '1.6rem',
                    maxWidth: '80%',
                    padding: '1.5rem 1.7rem',
                }}
                onClick={handleOpen}
            >
                Tạo sản phẩm mới
            </Button>
            <CreateProductModal fetchProducts={fetchProducts} open={open} handleOpen={handleOpen} handleClose={handleClose} />
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
                    name="keyword"
                    value={search.keyword}
                    sx={{
                        width: '100%',
                    }}
                    onChange={e => handleChange(e, setSearch)}
                />
            </Box>
        </>
    )
}

export default CreateAndSearch
