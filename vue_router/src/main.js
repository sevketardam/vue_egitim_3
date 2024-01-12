import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import { createRouter, createWebHistory } from 'vue-router'

import routes from './route.js'

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    }
})

router.beforeEach((to, from, next) => {
    console.log("global seviyesinde kontrol")
    next();  

});

const app = createApp(App).use(router)

app.mount('#app')
