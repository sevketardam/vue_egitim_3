import axios from "axios";
import router from '@/route'

const state = {
    products: []
}

const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {
        return key => state.products.filter(element => {
            return element.id == key
        })
    }
}

const mutations = {
    updateProductList(state, product) {
        state.products.push(product)
    }
}

const actions = {
    initApp({ commit }) {
        // commit("updateProductList",product)

        axios.get("/products.json")
            .then(response => {
                let data = Object.entries(response.data).map(([key, value]) => ({
                    ...value,
                    id: key
                }));

                data.forEach(a => {
                    commit("updateProductList", a)
                })

            })
    },
    saveProduct({ dispatch, commit, state }, product) {

        axios.post("products.json", product)
            .then(response => response.data)
            .then(response => {
                product.id = response.name;
                commit("updateProductList", product)

                let tradeResult = {
                    purchase: product.price,
                    sale: 0,
                    count: product.count
                }
                dispatch("setTradeResult", tradeResult)

                router.push('/');
            });
    },
    sellProducts({ state, commit, dispatch }, payload) {

        let product = state.products.filter(element => {
            return element.id == payload.key
        })

        if (product) {

            let totalCount = product[0].count - parseInt(payload.count);

            axios.patch("products/" + payload.key + ".json", { count: totalCount })
                .then(response => {
                    if (response.status == 200) {
                        product[0].count = totalCount;

                        let tradeResult = {
                            purchase: 0,
                            sale: product[0].price,
                            count: payload.count
                        }
                        dispatch("setTradeResult", tradeResult)

                        router.push('/');
                    }
                })
        }

    }
}

export default {
    state,
    getters,
    mutations,
    actions
}