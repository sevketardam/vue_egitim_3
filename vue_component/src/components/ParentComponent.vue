<script setup>
import ChildComponent1 from './ChildComponent1.vue';
import ChildComponent2 from './ChildComponent2.vue';
</script>

<template>
  <div class="parent-div">
    <h1>Parent Component (User)</h1>
    <p>Burası Parent Yani Componenetlerin İmport Edildiği Component</p>
    <button class="btn btn-sm btn-warning" @click="changeName">Adımı Değiştir</button>
    <hr>
    <div class="row">
        <div class="col-md-6">
            <child-component-1 :age="this.age" @data="childData = $event" :name="title"></child-component-1>
            <p>Child Componenet Üzerinden Gelen Veri : {{ childData }} </p>
        </div>
        <div class="col-md-6">
            <child-component-2 @ageData="this.age = $event" :age="this.age"></child-component-2>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            title:"Şevket",
            childData:"",
            age:25
        }
    },
    methods:{
        changeName(){
            this.title = "Arda"
        }
    }
}
</script>

<style scoped>
    .parent-div{
        border: 1px solid black;
        padding: 2rem;
        background: beige;
    }
</style>