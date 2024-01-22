import { createRouter, createWebHistory } from 'vue-router'

const ProductPurchase = () => import("./components/products/ProductPurchase.vue")
const ProductSell = () => import("./components/products/ProductSell.vue");
const ProductList = () => import("./components/products/ProductList.vue");

const routes = [
    { path: '/', component: ProductList },
    { path: '/urun-cikisi', component: ProductPurchase },
    { path: '/urun-islemleri', component: ProductSell },
    { path: '/:pathMatch(.*)*', redirect: "/" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;