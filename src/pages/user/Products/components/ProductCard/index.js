import { memo } from 'react'
import './index.css'
import Product from '../../../../../assets/images/bd2e86e454da37f2e6c9a128c8e9a2b8.png'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
} from '@mui/material'
import { formatPrice } from '../../../../../utils/format'
import { post } from '../../../../../utils/httprequest'
import { handleFormData } from '../../../../../utils/handleForm'
import { useAuth } from '../../../../../hooks/useAuth'
import { toast } from 'react-toastify'

function ProductCard({ product }) {
    const { user } = useAuth()
    const handleAddToCart = async (e, id) => {
        e.preventDefault()
        const formData = handleFormData({
            productId: id,
            quantity: 1,
            userId: user.userId,
        })
        const res = await post('cart', formData)
        const data = await res.json()
        if (res.status > 200 && res.status < 300) {
            toast.success('Thêm vào giỏ hàng thành công')
        } else {
            toast.error('Có lỗi xảy ra! Thử lại sau')
        }
    }

    return (
        <Card
            sx={{
                maxWidth: '200px',
                height: '340px',
                borderRadius: 'transparent',
            }}
            className="d-flex flex-column justify-content-between product-card"
        >
            <CardMedia
                component="img"
                height="200"
                image={Product}
                alt="green iguana"
            />
            <CardContent sx={{ padding: '8px' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
            </CardContent>
            <CardActions className="d-flex justify-content-between align-items-center">
                <IconButton
                    className="add-cart-container "
                    onClick={e => handleAddToCart(e, product.productId)}
                >
                    <AddShoppingCartIcon fontSize="large" color="primary" />

                    <p className="add-cart-content">Add to cart</p>
                </IconButton>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: '#ff424e' }}
                    className="product-price-main"
                >
                    {formatPrice(product.price)}
                </Typography>
            </CardActions>
        </Card>
    )
}

export default memo(ProductCard)
