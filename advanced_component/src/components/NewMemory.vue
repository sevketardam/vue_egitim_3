<template>
  <div>
    <h1>New Memory Componeneti</h1>
    <p>{{ counter }}</p>
    <button @click="counter++" class="btn btn-sm btn-primary">Arttır</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            counter:0
        }
    },
    destroyed(){
        console.log("Destroyed!!")
    },
    activated(){
        console.log("Activated!!")
    },
    deactivated(){
        console.log("Desactived!!")
    }
}
</script>

<style>

</style>