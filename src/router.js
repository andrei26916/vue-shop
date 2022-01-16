import Vue from 'vue';
import Router from 'vue-router';
import Home from "./views/Home";
import Basket from "./views/Bsket";
import Favourites from "./views/Favourites";
import Orders from "./views/Orders";
import Order from "./views/Order";
import Product from "./views/Product";
import Category from "./views/Category";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'category',
            path: '/category/:id',
            component: Category
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
        }
    ]


});