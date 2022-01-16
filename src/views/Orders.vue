<template>
    <div>
        <h1>Заказы</h1>
        <OrdersComponent/>
    </div>
</template>

<script>
    import OrdersComponent from '../components/OrdersComponent';
    export default {
        name: "Orders",
        components: {
            OrdersComponent,
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