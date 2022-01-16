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
    name: "Home",
    components: {
        ProductsComponent, BannerComponent
    }
}
</script>

<style scoped>

</style>