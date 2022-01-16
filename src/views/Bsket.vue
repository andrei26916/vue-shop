<template>
    <div>
        <h1>Корзина</h1>
        <BasketComponent/>
    </div>
</template>

<script>
    import BasketComponent from '../components/BsketComponent';
    export default {
        name: "Bsket",
        components: {
            BasketComponent,
        }
    }
</script>

<style scoped>
    div{
        width: 100%;
    }

    h1{
        text-align: left;
    }

</style>