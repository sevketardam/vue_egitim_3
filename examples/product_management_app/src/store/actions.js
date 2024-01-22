import axios from "axios"


export const setTradeResult = ({ state, commit }, tradeResult) => {
    commit("updateTradeResult", tradeResult)
    let tradeData = {
        purchase: state.purchase,
        sale: state.sale
    }

    axios.put("trade-result.json", tradeData)
        .then(response => {

        })
}



export const getTradeResult = ({ commit }) => {
    axios.get("trade-result.json").then(response => {
        response.data.count = 1;
        commit("updateTradeResult",response.data)
    })
}