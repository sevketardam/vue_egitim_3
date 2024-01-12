import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      counter: 0
    }
  },
  getters:{
    getDoubleCounter(state){
        return state.counter * 2;
    },
    stringCounter(state){
        return state.counter + " kez tıklandı"
    }
  }
})