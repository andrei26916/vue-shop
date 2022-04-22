import Vue from 'vue';
import Router from 'vue-router';
import Home from "./views/Home";
import Basket from "./views/Basket";
import Favourites from "./views/Favourites";
import Orders from "./views/Orders";
import Order from "./views/Order";
import Product from "./views/Product";
import Category from "./views/Category";
import Settings from "@/views/User/Profile";
import AdminOrders from "@/views/Admin/AdminOrders";
import AdminOrder from "@/views/Admin/AdminOrder";
import AdminIndex from "@/views/Admin/AdminIndex";
import AdminProducts from "@/views/Admin/AdminProducts";
import AdminProduct from "@/views/Admin/AdminProduct";
import NotFound from "@/views/NotFound";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            name: '404',
            path: '/404',
            component: NotFound
        },
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'category',
            path: '/category/:id',
            component: Category,
        },
        {
            name: 'product',
            path: '/product/:id',
            component: Product
        },
        {
            name: 'product',
            path: '/product/:id',
            component: Home
        },
        {
            name: 'basket',
            path: '/basket',
            component: Basket
        },
        {
            name: 'favourites',
            path: '/favourites',
            component: Favourites
        },
        {
            name: 'orders',
            path: '/orders',
            component: Orders
        },
        {
            name: 'order',
            path: '/order',
            component: Order
        },
        {
            name: 'userSettings',
            path: '/user/settings',
            component: Settings
        },
        {
            name: 'AdminPanel',
            path: '/admin',
            component: AdminIndex
        },
        {
            name: 'AdminOrders',
            path: '/admin/orders',
            component: AdminOrders,
        },
        {
            name: 'AdminOrder',
            path: '/admin/order/create',
            component: AdminOrder,
        },
        {
            name: 'AdminProducts',
            path: '/admin/products',
            component: AdminProducts,
        },
        {
            name: 'AdminProduct',
            path: '/admin/product/create',
            component: AdminProduct,
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]


});