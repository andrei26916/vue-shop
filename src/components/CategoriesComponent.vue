<template>
    <div>
        <div class="category" v-for="category in categories">
            <h2>{{category.name}}</h2>
            <div class="item">
                <div class="itemChildren" v-for="children in category.children">
                    <router-link :to="{name: 'category', params: {id: children.id}}">
                        {{children.name}}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CategoriesComponent",
        data(){
            return {
                categories: [
                    {
                        id: 1, name: 'Phone', children: [
                            {id: 3, name: 'samsung'},
                            {id: 4, name: 'apple'},
                            {id: 5, name: 'huawei'},
                            {id: 6, name: 'HTC'},
                        ]
                    },
                    {
                        id: 1, name: 'Phone', children: [
                            {id: 3, name: 'samsung'},
                            {id: 4, name: 'apple'},
                            {id: 5, name: 'huawei'},
                            {id: 6, name: 'HTC'},
                            {id: 7, name: 'HTC'},
                        ]
                    },
                    {
                        id: 1, name: 'Phone', children: [
                            {id: 3, name: 'samsung'},
                            {id: 4, name: 'apple'},
                            {id: 5, name: 'huawei'},
                            {id: 6, name: 'HTC'},
                            {id: 7, name: 'HTC'},
                        ]
                    },
                ]
            }
        }
    }
</script>

<style scoped>

    .category{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 10px;
    }

    .category h2{
        margin: 0;
    }

    .item{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        margin-left: 2em;
        align-content: stretch;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .item a{
        color: #2c3e50;
        text-decoration: none;
        margin: 10px 0 0;
    }

    .itemChildren {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 2em;
        margin-top: 5px;
    }

</style>