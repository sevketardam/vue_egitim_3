<script setup>
import Home from './components/Home.vue';
import AppFooter from './components/common/AppFooter.vue';
import AppHeader from './components/common/AppHeader.vue';
</script>

<template>
  <div class="container">
    <app-header />
    <hr>
    <Home />
    <hr>
    <AppFooter />
  </div>
</template>

<script>

export default {
  components: { AppHeader },
  data() {
    return {
      status: "pasif"
    }
  }
}
</script>


<style scoped></style>
