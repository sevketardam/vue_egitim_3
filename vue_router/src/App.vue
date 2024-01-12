<script setup>

import AppHeader from "./Header.vue";


</script>

<template>
  <div>
    <!-- <app-header></app-header> -->
    <router-view name="header-top"></router-view>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <transition name="slide" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
    <router-view name="header-bottom"></router-view>
  </div>
</template>

<style>
a {
  text-decoration: none;
}

.slide-enter-from {
  opacity: 0;

}

.slide-enter-active {
  transition: opacity 1s;
  animation: slide-in 1s ease-out;
}

.slide-enter-to {}

.slide-leave-active {
  opacity: 0;
  /* transition: opacity 1s; */
  animation: slide-out 1s ease-out;
  position: absolute;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }

  to {
    transform: translateY(0px);

  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(20px);

  }
}
</style>
