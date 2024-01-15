const state = {
    counter: 0
}

const getters = {
    getDoubleCounter(state) {
        return state.counter * 2;
    },
    stringCounter(state) {
        return state.counter + " kez tıklandı"
    },
}

const mutations = {
    increaseCounter(state, payload) {
        state.counter += payload;
    },
    decreaseCounter(state) {
        state.counter--;
    },
}

const actions = {
    increase({ commit }) {
        commit("increaseCounter", 5)
    },
    decrease({ commit }) {
        commit("decreaseCounter", 5)
    },
    incAsync({ commit }, payload) {
        setTimeout(() => {
            commit("increaseCounter", 5)
        }, payload.time)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}