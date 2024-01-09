import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"



const app = createApp(App)
// app.directive("color", {
//     mounted(el, bind, vnode) {

//         if (bind.modifiers["delay"]) {
//             setTimeout(() => {
//                 if (bind.arg == "background") {
//                     el.style.backgroundColor = bind.value
//                 } else {

//                     el.style.color = bind.value
//                 }
//             }, 2000)
//         } else {
//             if (bind.arg == "background") {
//                 el.style.backgroundColor = bind.value
//             } else {

//                 el.style.color = bind.value
//             }
//         }


//     }
// })

app.mount('#app')
