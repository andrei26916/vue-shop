<template>
    <div>
        <ProductComponent/>
    </div>
</template>

<script>
    import ProductComponent from '../components/ProductComponent';
    export default {
        name: "Product",
        components: {
            ProductComponent,
        }
    }
</script>

<style scoped>
    div{
        width: 100%;
    }
</style>