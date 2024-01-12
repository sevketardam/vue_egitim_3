<template>
  <div class="container">
    <router-view></router-view>
<!--     
    <p>User Id:{{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p> -->
    <hr>
    <button class="btn btn-sm btn-success" @click="navigateToHome">Home Component</button>
    <hr>
  </div>
</template>
<script>
export default {
  data(){
    return{
      id:this.$route.params.id
    }
  },
  methods: {
    navigateToHome() {
      // this.$router.push("/")
      // this.$router.push({ path: "/" })
      this.$router.push({ name: "Anasayfa" })
    }
  },
  watch:{
    "$route"(to,from){
      this.id = to.params.id
    }
  }
}
</script>
