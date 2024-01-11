import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'


var app = createApp(App)
axios.defaults.baseURL = 'https://vuejs-vue-recourse-2b25a-default-rtdb.firebaseio.com'

axios.interceptors.request.use((config) => {
    // if(config.method == "post"){
    //     config.method = "put"
    // }
    // Modify the request config here
    // console.log(config)
    return config;
})



axios.interceptors.response.use((response) => {
    if (response.config.method == "get") {
        var responseData = Object.entries(response.data).map(([key, value]) => ({
            ...value,
            id: key
        }));

        response.convertedData = responseData
    }


    console.log(response)
    return response
}, (error) => {
    // Handle errors here
    console.error(error)
    return Promise.reject(error)
})

app.config.globalProperties.$axios = axios



app.mount('#app')
