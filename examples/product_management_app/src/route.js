import { defineAsyncComponent } from 'vue';

const ProductPurchase = defineAsyncComponent(() => import("./components/products/ProductPurchase.vue"));
const ProductSell = defineAsyncComponent(() => import("./components/products/ProductSell.vue"));
const ProductList = defineAsyncComponent(() => import("./components/products/ProductList.vue"));

const routes = [
    { path: '/', component: ProductList },
    { path: '/urun-cikisi', component: ProductPurchase },
    { path: '/urun-islemleri', component: ProductSell },
    { path: '/:pathMatch(.*)*', redirect: "/" },
];

export default routes;