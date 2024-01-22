<script setup>
import AppHeader from './components/shared/header.vue'
import AppFooter from './components/shared/footer.vue'

</script>
<template>
    <div>
        <app-header></app-header>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <app-footer></app-footer>
    </div>
</template>

<script>
export default {
    components: { AppHeader, AppFooter },
    created() {
        this.$store.dispatch("getTradeResult")
        this.$store.dispatch("initApp")
    }
}
</script>

<style>

body{
    background-color: blueviolet !important;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s ease-out;
}

.fade-enter-to {
  /* opacity: 1; */
}

.fade-leave-active {
  opacity: 0;
  transition: opacity 1s;
}


</style>
