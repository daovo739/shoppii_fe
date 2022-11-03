// Pages
// User
import * as paths from '../pages/user/index'
import * as shopPaths from '../pages/shop/index'
// Shop

// Admin
import Dashboard from '../pages/admin/Dashboard'
import Requests from '../pages/admin/Requests'
import NotFound from '../errors/notFound'

const {
    AlertToken,
    Profile,
    Home,
    Products,
    Cart,
    Checkout,
    ForgetPassword,
    GoToShop,
    ViewShop,
    Product,
    CardAuth,
} = paths

const {
    ShopHomePage,
    ShopOrders,
    ShopProducts,
    ShopProfile,
    SingleShopProduct,
} = shopPaths
// Routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/products',
        component: Products,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/checkout',
        component: Checkout,
    },
    {
        path: '/forget-password',
        // component: ForgetPassword,
        component: CardAuth,
    },
    {
        path: '/login',
        component: CardAuth,
    },
    {
        path: '/register',
        component: CardAuth,
    },
    {
        path: '/viewshop/:id',
        component: ViewShop,
    },
    {
        path: '/product/:id',
        component: Product,
    },
    {
        path: '/register-success',
        component: AlertToken,
    },
    {
        path: '/registerGG',
        component: CardAuth,
    },
    { path: '/register-shop', component: GoToShop },
    {
        path: '*',
        component: NotFound,
    },
]
const shopRoutes = [
    {
        path: '/shop',
        component: ShopHomePage,
        // component: user.hasShop ? ShopHomePage : GoToShop,
    },
    { path: '/shop/profiles', component: ShopProfile },
    { path: '/shop/products', component: ShopProducts },
    { path: '/shop/orders', component: ShopOrders },
    { path: '/shop/product/:id', component: SingleShopProduct },
   
    { path: '*', component: ShopHomePage },
]

const privateRoutes = [
    {
        path: '/admin',
        component: Requests,
    },
]

export { publicRoutes, privateRoutes, shopRoutes }
