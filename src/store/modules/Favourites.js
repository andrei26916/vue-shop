export default {
    action: {},
    mutations: {
        createFavourites(state, newProduct){
            newProduct.count = 1;
            state.favourites.unshift({...newProduct});
        },

        removeFavourites(state, id) {
            state.favourites = state.favourites.filter(t => t.id !== id)

        }
    },
    state: {
        favourites: [
            {id: 1, title: 'Проектор XGIMI Elfin', rate: 2.5, ball: 540, image: 'https://avatars.mds.yandex.net/get-mpic/5235397/img_id5560564623219774984.png/5hq'},
            {id: 2, title: 'BENQ Проектор Benq Mw632st', rate: 4.9, ball: 540, image: 'https://avatars.mds.yandex.net/get-marketpic/5487168/picf79c4a3690aa28611a52237a58100d27/200x200'},
        ]
    },
    getters: {
        allFavourites(state){
            return state.favourites;
        },
        countFavourites(state){
            return state.favourites.length;
        },
    }
}