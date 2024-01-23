import { createApp } from 'vue'
import App from './App.vue'
import Tags from "vuejs-egitim-tag-component-sevket"



let app = createApp(App)

app.component("vtag",Tags)

app.mount('#app')
