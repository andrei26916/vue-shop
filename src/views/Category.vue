<template>
    <div>
        <BannerComponent/>
        <ProductsComponent/>
    </div>
</template>

<script>
    import ProductsComponent from '../components/ProductsComponent';
    import BannerComponent from '../components/BannerComponent';
    export default {
        name: "Category",
        components: {
            ProductsComponent, BannerComponent
        }
    }
</script>

<style scoped>

</style>