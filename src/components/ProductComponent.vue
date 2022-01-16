<template>
    <div>
        <h1>{{product.title}}</h1>
        <div class="product">
            <div class="images">
                <el-carousel indicator-position="outside" style="width: 500px;">
                    <el-carousel-item v-for="item in product.images" :key="item">
                        <el-image :src="item" fit="scale-down" :preview-src-list="product.images"></el-image>
<!--                        <h3>{{ item }}</h3>-->
                    </el-carousel-item>
                </el-carousel>
            </div>

            <div class="info">
                <div class="prices">
                    <div class="card">
                        <p>Рейтинг:</p>
                        <el-rate v-model="product.rate" disabled />
                        <p style="margin-right: 20px" >{{product.rate}}</p>
                        <p style="color: #00000066 ">{{product.ball}} баллов на Плюс</p>
                    </div>
                    <br>
                    <div class="card">
                        <h2>{{product.price}} ₽</h2>
                        <el-button ><i class="el-icon-collection-tag"></i> Избранное</el-button>
                        <el-button type="warning"><i class="el-icon-shopping-cart-full"></i> В корзину</el-button>
                    </div>
                </div>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="Описание" name="first">
                        <p>{{product.description}}</p>
                    </el-tab-pane>
<!--                    <el-tab-pane label="Характеристики" name="second">Config</el-tab-pane>-->
                </el-tabs>
            </div>

        </div>
        <FeedbacksCommponent/>



    </div>
</template>

<script>
    import FeedbacksCommponent from "../components/FeedbacksComponent";
    export default {
        name: "ProductComponent",
        components: {
            FeedbacksCommponent,
        },
        data(){
            return {
                loh: [
                    'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
                ],
                rate: 3.2,
                activeName: 'first',
                product: {
                    id: 1,
                    price: 350,
                    title: 'Проектор XGIMI Elfin',
                    description: 'Проводной геймпад для ПК и PlayStation 3 Defender Omega USB.\n' +
                        '                            прекрасная модель для начинающих геймеров. При доступной цене геймпад имеет все необходимые функциональные клавиши и комфортно лежит в руках;\n' +
                        '                            12 функциональных кнопок;\n' +
                        '                            2 аналоговых джойстика. Два мини джойстика позволяют играть в дополнительные игры, например, в футбольные симуляторы.\n' +
                        '                            8-позиционный переключатель видов;\n' +
                        '                            Эффект вибрации. Делает аварии и столкновения более реалистичными (игра должна поддерживать функцию вибрации игрового контроллера);\n' +
                        '                            Питание от порта USB.',
                    rate: 2.5,
                    ball: 540,
                    images: [
                        'https://c.dns-shop.ru/thumb/st1/fit/500/500/e3c0f578139091a82d4676bb6faef4c7/0a064994d0720dcd8d6e163d86c5b4f2e953dfd412070cea72e7766222e110d0.jpg.webp',
                        'https://c.dns-shop.ru/thumb/st1/fit/500/500/e3c0f578139091a82d4676bb6faef4c7/0a064994d0720dcd8d6e163d86c5b4f2e953dfd412070cea72e7766222e110d0.jpg.webp',
                        'https://c.dns-shop.ru/thumb/st1/fit/500/500/e3c0f578139091a82d4676bb6faef4c7/0a064994d0720dcd8d6e163d86c5b4f2e953dfd412070cea72e7766222e110d0.jpg.webp',
                        ]
                },
            }
        }
    }
</script>

<style scoped>

    div h1{
        text-align: left;
    }

    .product{
        width: 100%;
        display: flex;
        border: 1px solid #e7e7e7;
        border-radius: 5px;
        padding: 20px;
        margin-bottom: 1.5em;

    }

    .images{
        width: 570px;
        margin-right: 50px;
    }

    .info{
        display: flex;
        flex-direction: column;
    }

    .prices{
        margin-bottom: 24px;
        box-shadow: 0 8px 24px rgb(0 0 0 / 12%);
        border-radius: 11px;
        padding: 16px 12px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 515px;
    }

    .prices .card{
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center
    }

    .prices .card h2{
        width: 200px;
        text-align: left;
        background: #f6f6f6;
        border-radius: 5px;
        padding: 10px;
        margin: 0 20px 0 0;
    }

    .prices .card p{
        color: #000000a6;
        font-size: 15px;
        margin: 0 4px 0 0;

    }

    .info p{
        text-align: left;
        font-size: 16px;
        line-height: 1.5;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 250px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>