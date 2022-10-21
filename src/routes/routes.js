// Pages
// User
import * as paths from '../pages/user/index'
import * as shopPaths from '../pages/shop/index'
// Shop

// Admin
import Dashboard from '../pages/admin/Dashboard'
import Requests from '../pages/admin/Requests'

const {
    AlertToken,
    Profile,
    Home,
    Products,
    Cart,
    Checkout,
    ForgetPassword,
    ViewShop,
    Product,
    CardAuth,
} = paths

const { shopHomePage } = shopPaths
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
        component: ForgetPassword,
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
        path: '/shop/:id',
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
]

const shopRoutes = [
    {
        path: '/shop',
        component: shopHomePage,
    },
]
const privateRoutes = [
    {
        path: '/admin',
        component: Dashboard,
    },
    {
        path: '/admin/requests',
        component: Requests,
    },
]

export { publicRoutes, privateRoutes, shopRoutes }
