import { memo } from 'react'
import './index.css'
import Product from '../../../../../assets/images/bd2e86e454da37f2e6c9a128c8e9a2b8.png'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material'
import { formatPrice } from '../../../../../utils/format'

function ProductCard({ product }) {
    console.log('render')
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
            <CardContent sx={{ padding: '0 8px 8px 8px' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    component="div"
                ></Typography>
            </CardContent>
            <CardActions className="d-flex justify-content-between">
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: '#ff424e' }}
                >
                    {formatPrice(product.price)}
                </Typography>
                <Button className="add-cart-btn">
                    <AddShoppingCartIcon
                        fontSize="large"
                        color="primary"
                    ></AddShoppingCartIcon>
                </Button>
            </CardActions>
        </Card>
    )
}

export default memo(ProductCard)
