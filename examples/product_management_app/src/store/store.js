import { createStore } from 'vuex'
import product from './modules/product'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'


// Create a new store instance.
export const store = createStore({
    state() {
        return {
            purchase: 0.0,
            sale: 0.0,
            balance: 0.0
        }
    },
    getters,
    actions,
    mutations,
    modules: {
        product
    }
})