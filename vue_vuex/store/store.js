import { createStore } from 'vuex'
import counter from './modules/counter'
import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      value: 10
    }
  },
  getters,
  mutations,
  actions,
  modules:{
    counter
  }
})