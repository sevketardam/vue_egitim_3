import { defineAsyncComponent } from 'vue';

const ProductPurchase = () => import("./components/products/ProductPurchase.vue")
const ProductSell = () => import("./components/products/ProductSell.vue");
const ProductList = () => import("./components/products/ProductList.vue");

const routes = [
    { path: '/', component: ProductList },
    { path: '/urun-cikisi', component: ProductPurchase },
    { path: '/urun-islemleri', component: ProductSell },
    { path: '/:pathMatch(.*)*', redirect: "/" },
];

export default routes;