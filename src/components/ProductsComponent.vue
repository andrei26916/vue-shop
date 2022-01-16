<template>
    <div class="c">
        <div class="card" v-for="product in products">
            <router-link :to="{name: 'product', params: {id: product.id}}">
                <el-image
                        style="width: 100%; height: 100%"
                        :src="product.image"></el-image>
            </router-link>
            <h3>{{product.price}} <span style="font-size: 16px">₽</span> </h3>
            <span style="color: #9e9e9e;font-size: 13px;">{{product.ball}}&nbsp;баллов на Плюс</span>
            <el-rate v-model="product.rate" disabled />
            <p>{{product.title}}</p>
            <el-button v-if="!isCheck(product)" type="warning" @click="submit(product)">В корзину </el-button>
            <el-button v-else type="danger" @click="remove(product.id)">Убрать из корзины </el-button>
        </div>
    </div>

</template>

<script>
    import {mapMutations} from 'vuex';
    import {mapGetters} from 'vuex';
    export default {
        name: "ProductsComponent",
        data(){
            return {
                products: [
                    {id: 1, price: 350, title: 'Проектор XGIMI Elfin', rate: 2.5, ball: 540, image: 'https://avatars.mds.yandex.net/get-mpic/5235397/img_id5560564623219774984.png/5hq'},
                    {id: 2, price: 350, title: 'BENQ Проектор Benq Mw632st', rate: 4.9, ball: 540, image: 'https://avatars.mds.yandex.net/get-marketpic/5487168/picf79c4a3690aa28611a52237a58100d27/200x200'},
                    {id: 3, price: 350, title: 'Проектор XGIMI Elfin', rate: 4.5, ball: 540, image: 'https://avatars.mds.yandex.net/get-mpic/5235397/img_id5560564623219774984.png/5hq'},
                    {id: 4, price: 350, title: 'Проектор XGIMI Elfin', rate: 4.5, ball: 540, image: 'https://avatars.mds.yandex.net/get-mpic/5235397/img_id5560564623219774984.png/5hq'},
                    {id: 5, price: 350, title: 'Проектор XGIMI Elfin', rate: 4.5, ball: 540, image: 'https://avatars.mds.yandex.net/get-mpic/5235397/img_id5560564623219774984.png/5hq'},
                    {id: 6, price: 350, title: 'Проектор XGIMI Elfin', rate: 4.5, ball: 540, image: 'https://avatars.mds.yandex.net/get-mpic/5235397/img_id5560564623219774984.png/5hq'},
                ]
            }
        },
        methods:{
            ...mapMutations(['createBasket', 'removeBasket']),
            ...mapGetters(['allBasket']),
            submit(product){
                this.createBasket(product)
            },
            remove(id){
                this.removeBasket(id);
            },
            isCheck(product){
                let result = false;
                this.allBasket().forEach(function (item) {
                    if (item.id === product.id){
                        result = true;
                    }
                });
                return result;
            },
        },
    }
</script>

<style scoped>
    .card{
        width: 207px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        margin-right: 20px;
    }

    .card img{
        width: 100%;
        margin: 20px 0;
    }

    .card p{
        font-size: 15px;
        color: #626262;
    }

    .card h3{
        padding: 0;
        margin: 0 0 5px;
    }

    .card p{
        margin: 10px 0;
    }

    .card button{
        margin-top: 10px;
        width: 100%;
    }

    .c{
        display: flex;
        align-items: flex-end;
        height: auto;
        position: absolute;
        flex-wrap: wrap;
        width: 1440px;
        justify-content: flex-start;
    }


</style>