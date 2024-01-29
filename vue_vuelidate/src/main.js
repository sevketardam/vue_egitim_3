import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import  VuelidatePlugin  from '@vuelidate/core'



createApp(App).use(VuelidatePlugin).mount('#app')
