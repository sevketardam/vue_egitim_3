<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter(4)">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseCounter(4)">- Azalt</button>
    <hr>
    <button class="btn btn-success" @click="increase">+ Arttır</button>
    <button class="btn btn-danger" @click="decrease">- Azalt</button> 
    <hr>
    <button class="btn btn-success" @click="incAsync({ time: 1000 })">+ Async Arttır</button>

  </div>
</template>

<script>

import { mapMutations, mapActions } from 'vuex'

export default {
  methods: {
    ...mapMutations([
      'increaseCounter',
      'decreaseCounter'
    ]),
    ...mapActions([
      'increase',
      'decrease',
      'incAsync'
    ]),

    // incrementCounter() {
    // this.$store.state.counter++;
    // this.$store.commit("increaseCounter")
    // },
    // decrementCounter() {
    // this.$store.commit("decreaseCounter")
    // }
  }
}
</script>

<style></style>
