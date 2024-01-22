<script setup>

</script>

<template>
  <div class="tag-container">
    <span class="tag" v-for="tag in tags" :key="tag">
      <span class="content">{{ tag }}</span>
      <span class="close ms-2">X</span>
    </span>

    <input type="text" @keydown.enter="addTag">
    <div class="error" v-if="error">Bu Etiket Daha Önceden Eklenmiş!</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: ["deneme", "test"],
      error: false
    }
  },
  methods: {
    addTag(event) {
      let text = event.target.value;
      let matchedTag = false;
      if (text.length <= 0) return;

      this.tags.forEach(tag => {
        if (tag.toLowerCase() == text.toLowerCase()) {
          matchedTag = true

        }
      });

      if (matchedTag) {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 2000)
        return;
      }

      this.tags.push(text)
      event.target.value = "";
      this.error = false;

    }
  }
}

</script>

<style scoped>
body {
  font-family: sans-serif;
}

.tag-container {
  border: 1px solid #ccc;
  padding: 20px
}

.tag {
  background: #fbbd08;
  padding: 10px;
  color: #000;
  cursor: default;
  font-size: 14px;
  margin-right: 4px;
}

.tag .close {
  font-size: 12px;
  cursor: pointer;
  font-weight: bold;
}

input {
  outline: none;
  height: 100%;
  width: 100px;
}

.error {
  font-size: 12px;
  color: red;
  margin-top: 10px;
}
</style>
