<script setup>
import AppResult from "./components/Result.vue";
import AppCounter from "./components/Counter.vue";
import AppSecondResult from './components/SecondResult.vue';

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h1 class="text-center">VUEX</h1>
        <hr>
        <app-result :counter="counter"></app-result>
        <hr>
        <app-second-result :counter="counter"></app-second-result>
        <hr>
        <app-counter @counterEvent="counter += $event"></app-counter>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      counter: 0
    }
  }
}
</script>

<style></style>
