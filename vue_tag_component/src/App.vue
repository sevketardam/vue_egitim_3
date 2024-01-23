<script setup>
import AppTags from './components/Tags.vue'

</script>

<template>
  <div>
    <app-tags v-model="tags" color="success"></app-tags>
    <app-tags v-model="tags2" color="danger"></app-tags>
    <app-tags v-model="tags2" color="info"></app-tags>
    <app-tags v-model="tags2" color="primary"></app-tags>
    <app-tags v-model="tags2" color="warning"></app-tags>
    <app-tags v-model="tags2" color="secondary"></app-tags>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: "deneme,test",
      tags2: "deneme,test"
    }
  },
}

</script>

<style scoped>
body {
  font-family: sans-serif;
}
</style>
