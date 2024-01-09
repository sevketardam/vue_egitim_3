import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

var app = createApp(App)

app.config.globalProperties.$filters = {
    toLowerCase(value) {
        return value.toLowerCase()
    }
}

app.mixin({
    created(){
        console.log("Global Mixin Created")
    }
});

app.mount('#app')
