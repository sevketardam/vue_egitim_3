import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { VueResource } from 'vue-resource/dist/vue-resource'


var app = createApp(App)

app.use(VueResource)

app.mount('#app')
