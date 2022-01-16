<template>
    <div>
        <div class="header">
            <div class="content">
                <router-link :to="{name: 'home'}">
                    <div class="logo">
                        <img width="50" alt="Vue logo" src="../assets/logo.png">
                        <h1>HelloMarket</h1>
                    </div>
                </router-link>

                <div class="search">
                    <el-dropdown trigger="click">
                        <el-button>
                            <i class="el-icon-s-unfold"></i>
                            Категории
                        </el-button>
                        <el-dropdown-menu slot="dropdown" style="width: 100%">
                            <div class="category">
                                <CategoriesComponent/>
                            </div>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-input placeholder="Please input" v-model="search"></el-input>
                </div>

                <div class="info">
                    <router-link :to="{name: 'orders'}">
                        <div class="icon">
                            <i class="el-icon-notebook-2"></i>
                            <p>Заказы</p>
                        </div>
                    </router-link>
                    <router-link :to="{name: 'favourites'}">
                        <div class="icon">
                            <i class="el-icon-collection-tag"></i>
                            <p>Избранное</p>
                        </div>
                    </router-link>
                    <router-link :to="{name: 'basket'}">
                        <div class="icon">
                            <span v-if="countBasket">{{countBasket}}</span>
                            <i class="el-icon-shopping-cart-full"></i>
                            <p>Корзина</p>
                        </div>
                    </router-link>

                    <el-dropdown trigger="click">
                        <div class="profile">
                            <img src="../assets/no-photo.png" alt="">
                        </div>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item class="clearfix"> <i class="el-icon-s-operation"></i> настройки</el-dropdown-item>
                            <el-dropdown-item class="clearfix"> <i class="el-icon-close"></i> выход</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>


                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import CategoriesComponent from './CategoriesComponent';
    import {mapGetters} from 'vuex';
    export default {
        data() {
            return {
                search: '',
                basketCount: 1
            }
        },
        name: "HeaderComponent",
        computed: mapGetters(['countBasket']),
        components: {
            CategoriesComponent,
        }
    }
</script>

<style scoped>

    .header {
        display: flex;
        height: 100px;
        border-bottom: 1px solid #e7e7e7;
        box-shadow: 0 2px 3px 0 rgb(0 0 0 / 6%);
    }

    .header .content {
        width: 1440px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }


    .logo {
        align-items: center;
        display: flex;
        margin-right: 2em;
    }

    .search {
        width: 700px;
        display: flex;
        margin-right: 2em;
    }

    .search button {
        margin-right: 1em;
    }

    .info {
        display: flex;
        justify-content: center;
    }

    a {
        text-decoration: none;
        color: #2b3e50;
    }

    .info .icon {
        margin-right: 1.5em;
        font-size: 13px;
        text-align: center;
        line-height: 0;
    }

    .icon {
        display: flex;
        flex-direction: column;
    }

    .icon i {
        font-size: 24px;
    }

    .icon span {
        border-radius: 102px;
        width: 16px;
        height: 16px;
        background: #f44336;
        line-height: 16px;
        color: #fff;
        margin-left: 30px;
        margin-top: -9px;
        position: absolute;
        font-size: 10px;
    }

    .profile {
        cursor: pointer;
        width: 50px;
        height: 50px;
        border-radius: 100px;
        background: url('https://static.yandex.net/market-export/_/b-image/ya-plus/avatar-border-2.svg') center center no-repeat;
    }

    .profile img {
        padding: 3px;
        width: 44px;
    }

    .category{
        width: 1000px;
        margin: 0 auto;
    }

</style>