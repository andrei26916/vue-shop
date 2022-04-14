<template>
    <div class="banner">
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
<!--                <img src="https://avatars.mds.yandex.net/get-adfox-content/2367573/211222_market_1790507_4903358_4.a278a44d1a485305fee563a10f495f02.png/optimize.webp" alt="">-->
            </el-carousel-item>
        </el-carousel>
    </div>

</template>

<script>
    export default {
        name: "BannerComponent"
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>