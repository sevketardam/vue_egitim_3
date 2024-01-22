import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './assets/loading.css'
import { store } from './store/store.js'

import router from './route.js'

import axios from 'axios'


axios.defaults.baseURL = 'https://add-product-b17ed-default-rtdb.europe-west1.firebasedatabase.app/'




var app = createApp(App)

app.config.globalProperties.$filters = {
    currency(value) {
        return parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 2 }) + " TL"
    }
}

app.config.globalProperties.$axios = axios

app.use(router)
app.use(store)

app.mount('#app')
