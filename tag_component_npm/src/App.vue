<script setup>
</script>

<template>
  <div>
    <vtag v-model="tags" color="danger"></vtag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: "sevket,videosevket"
    }
  }
}
</script>

<style scoped>
body {
  font-family: sans-serif;
}
</style>
