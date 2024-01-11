import Home from '@/components/Home.vue'
import User from '@/components/user/User.vue'

const routes = [
    { path: '/', component: Home,name:"Anasayfa" },
    { path: '/user/:id', component: User,name:"Kullanıcı" }
];

export default routes;