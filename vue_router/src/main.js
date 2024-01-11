import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import { createRouter, createWebHistory } from 'vue-router'

import routes from './route.js'

const router = createRouter({
    history: createWebHistory(),
    routes,

})

const app = createApp(App).use(router)

app.mount('#app')
