import Vue from 'vue';
import Vuex from 'vuex';
import Basket from './modules/Basket';
import Favourites from './modules/Favourites';

Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        Basket, Favourites
    }
});