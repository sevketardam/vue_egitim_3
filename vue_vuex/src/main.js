import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { store } from '../store/store.js'


var app = createApp(App)

app.use(store)

app.mount('#app')
