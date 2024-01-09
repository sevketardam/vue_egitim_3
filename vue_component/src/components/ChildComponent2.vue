<template>
    <div class="child-component">
        <h3>Child Component 1</h3>
        <p>Ben ParentComponent.vue altındaki bir componentim</p>
        <p>Kullanıcı Yaşı : {{ age }}</p>
        <button class="btn btn-sm btn-warning" @click="sendToChild">Child 1'e Veri Gönder</button>
    </div>
</template>

<script>


export default {
    methods:{
        sendToChild(){
            this.$emit("ageData",23);
        }
    },props:{
        age:{
            type:Number,
            default:1
        }
    }
}
</script>

<style scoped>
    .child-component{
        border: 1px solid black;
        padding: 2rem;
        background: #8888f3;
    }
</style>