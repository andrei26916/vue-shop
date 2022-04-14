<template>
    <div>
        <BannerComponent/>
      <div v-for="(category,key) in this.popularCategory ">
        <div class="content">
          <h1 v-if="key === 0" style="margin-top: 0;">{{ category.name }}</h1>
          <h1 v-else>{{ category.name }}</h1>
          <ProductsComponent :products="category.products"/>
        </div>
      </div>
    </div>
</template>

<script>
import ProductsComponent from '../components/ProductsComponent';
import BannerComponent from '../components/layouts/BannerComponent';

export default {
    name: "Home",
    components: {
        ProductsComponent, BannerComponent
    },
    data(){
      return {
        popularCategory: [
          {
            name: 'Проекторы',
            products: [
              {
                id: 1,
                categoryId: 1,
                price: 1350,
                title: 'Проектор XGIMI Elfin',
                rate: 2.5,
                ball: 540,
                image: 'https://avatars.mds.yandex.net/get-mpic/5235397/img_id5560564623219774984.png/5hq'
              },
              {
                id: 2,
                categoryId: 2,
                price: 2350,
                title: 'BENQ Проектор Benq Mw632st',
                rate: 4.9,
                ball: 540,
                image: 'https://avatars.mds.yandex.net/get-marketpic/5487168/picf79c4a3690aa28611a52237a58100d27/200x200'
              },
              {
                id: 3,
                categoryId: 3,
                price: 3350,
                title: 'Проектор XGIMI Elfin',
                rate: 4.5,
                ball: 540,
                image: 'https://avatars.mds.yandex.net/get-mpic/5235397/img_id5560564623219774984.png/5hq'
              },
              {
                id: 4,
                categoryId: 4,
                price: 4350,
                title: 'Проектор XGIMI Elfin',
                rate: 4.5,
                ball: 540,
                image: 'https://avatars.mds.yandex.net/get-mpic/5235397/img_id5560564623219774984.png/5hq'
              },
              {
                id: 5,
                categoryId: 5,
                price: 5350,
                title: 'Проектор XGIMI Elfin',
                rate: 4.5,
                ball: 540,
                image: 'https://avatars.mds.yandex.net/get-mpic/5235397/img_id5560564623219774984.png/5hq'
              },
              {
                id: 6,
                categoryId: 6,
                price: 6350,
                title: 'Проектор XGIMI Elfin',
                rate: 4.5,
                ball: 540,
                image: 'https://avatars.mds.yandex.net/get-mpic/5235397/img_id5560564623219774984.png/5hq'
              },
            ],
          },
          {
            name: 'Ноутбуки',
            products: [
              {
                id: 7,
                categoryId: 6,
                price: 140000,
                title: '15.6" Ноутбук Acer Predator Helios 300 PH315-54-73AS (1920x1080, Intel Core i7 2.3 ГГц, RAM 16 ГБ, SSD 1 ТБ, GeForce RTX 3050 Ti, без ОС), NH.QC5ER.001, черный',
                rate: 5.5,
                ball: 1040,
                image: 'https://avatars.mds.yandex.net/get-mpic/5221826/img_id775860956185804110.jpeg/x248_trim'
              },
            ]
          }
        ]
      }
    },
}
</script>

<style scoped>
  h1{
    margin-top: 10vh;
    text-align: left;
  }

</style>