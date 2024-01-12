import Home from '@/components/Home.vue'
import Header from '@/Header.vue'

import { defineAsyncComponent } from 'vue';

const User = defineAsyncComponent(() => import("./components/user/User.vue"));
const UserStart = defineAsyncComponent(() => import("./components/user/UserStart.vue"));
const UserDetail = defineAsyncComponent(() => import("./components/user/UserDetail.vue"));
const UserEdit = defineAsyncComponent(() => import("./components/user/UserEdit.vue"));

// import User from '@/components/user/User.vue'
// import UserStart from '@/components/user/UserStart.vue'
// import UserDetail from '@/components/user/UserDetail.vue'
// import UserEdit from '@/components/user/UserEdit.vue'

const routes = [
    {
        path: '/', name: "Anasayfa", components: {
            default: Home,
            'header-top': Header
        }
    },
    {
        path: '/user', components: {
            default: User,
            'header-top': Header
        },
        name: "Kullanıcı",
        children: [
            { path: '', component: UserStart }, // /user
            {
                path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                    console.log("root seviyesinde kontrol")
                    next()
                }
            }, // /user/10
            { path: ':id/edit', component: UserEdit, name: 'userEdit' }, // /user/12/edit
        ]
    },
    { path: '/redirect', redirect: "/user" },
    { path: '/:pathMatch(.*)*', redirect: "/user" }
];

export default routes;