import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"


const emitter = mitt()
export const eventBus = createApp(App)
eventBus.provide('eventBus',emitter);

eventBus.mount('#app')
