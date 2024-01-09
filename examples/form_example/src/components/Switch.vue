<script setup>
</script>

<template>
    <div>
        <div id="on" @click="switchMet(true)" :class="{ active: value }">
            Açık
        </div>
        <div id="off" @click="switchMet(false)" :class="{ active: !value }">
            Kapalı
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean
        }
    },
    methods: {
        switchMet(isOn) {
            this.$emit("input", isOn)
        }
    }
}
</script>

<style scoped>
#on,
#off {
    width: 50px;
    background: #eee;
    padding: 2px;
    display: inline-block;
    margin: 10px -2px;
    box-sizing: content-box;
    cursor: pointer;
    text-align: center;
}

#on:hover,
#on.active {
    background: lightgreen;
}

#off:hover,
#off.active {
    background: red;
}
</style>