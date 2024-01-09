<script setup>
import AppProgress from './components/Progress.vue';
import NewProduct from './components/NewProduct.vue';
import Products from './components/Products.vue';


</script>

<template>
  <div class="container">
    <h1 class="text-center">Ürün Ekleme Uygulaması</h1>
    <hr>
    <new-product></new-product>
    <br><br>
    <app-progress></app-progress>
    <br><br>

    <products></products>
  </div>
</template>

<script>
export default {
  data() {

  },
}
</script>

<style>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
