<script setup>
import AppCelebrate from './components/Celebrate.vue'
import AppFailure from './components/Failure.vue'
import AppGameCard from './components/GameCard.vue'

</script>

<template>
  <div>
    <transition-group name="slide-container" mode="out-in">
      <component @activeComponentEmit="activeComponent = $event" :is="activeComponent" key="mainComponent">
      </component>
      <canvas id="canvas" key="canvas" v-show="activeComponent == 'AppCelebrate'"></canvas>
    </transition-group>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeComponent: "appGameCard"
    }
  },
  components: {
    AppGameCard,
    AppFailure,
    AppCelebrate
  },
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "/src/assets/confetti.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  }
}

</script>

<style>
.slide-container-enter-active {
  animation: slide-in ease-in-out .5s forwards;
}

.slide-container-leave-active {
  animation: slide-out ease-in-out .5s forwards;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(-1200px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);

  }
}


@keyframes slide-out {
  from {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 0;
    transform: translateX(1200px);

  }
}


body {
  overflow: hidden;
  font-family: sans-serif;
}
</style>
