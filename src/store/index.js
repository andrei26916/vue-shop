import Vue from 'vue';
import Vuex from 'vuex';
import Basket from './modules/Basket';
import Favourites from './modules/Favourites';
import User from "@/store/modules/User";

Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        Basket, Favourites, User
    }
});