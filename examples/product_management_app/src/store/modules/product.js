import axios from "axios";
import routes from '../../route.js'

const state = {
    products: []
}

const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {

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
    },
    saveProduct({ dispatch, commit, state }, product) {
        console.log(product)

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
                routes.replace({ path: '/' })

            });
    },
    sellProducts({ commit }, payload) {

    }
}

export default {
    state,
    getters,
    mutations,
    actions
}