<script setup>

import AppHeader from "./Header.vue";


</script>

<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
a{
  text-decoration: none;
}

</style>
