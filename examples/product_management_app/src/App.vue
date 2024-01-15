<script setup>
import AppHeader from './components/shared/header.vue'
import AppFooter from './components/shared/footer.vue'
import AppProductPurchase from './components/products/productPurchase.vue'

</script>
<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
export default {
    components: { AppHeader, AppFooter },

}
</script>

<style></style>
