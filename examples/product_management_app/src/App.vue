<script setup>
import AppHeader from './components/shared/header.vue'
import AppFooter from './components/shared/footer.vue'

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
    created(){
        this.$store.dispatch("getTradeResult")
    }
}
</script>

<style></style>
