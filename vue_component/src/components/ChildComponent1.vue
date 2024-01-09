<template>
  <div class="child-component">
    <h3>Child Component 1</h3>
    <p>Ben ParentComponent.vue altındaki bir componentim</p>
    <p>Kullanıcı Adı: {{ name }}</p>
    <p>Kullanıcı Adı: {{ switchName() }}</p>
    <p>Kullanıcı Yaşı: {{ age }}</p>
    <button @click="sendToParent">Veriyi Parent'e Gönder</button>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        name:{
            type:String,
            default:"test veri",
        },
        age:{
            type:Number,
            default:0
        }
    },
    methods:{
        switchName(){
            return this.name.split("").reverse().join("")
        },
        sendToParent(){
            this.$emit("data","Şevket Arda");
        }
    }

}
</script>

<style scoped>
    .child-component{
        border: 1px solid black;
        padding: 2rem;
        background: #f16464;
    }
</style>