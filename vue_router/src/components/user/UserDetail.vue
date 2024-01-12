<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>
    <p>
      Kullanıcını Id Bilgisi : {{ $route.params.id }}
    </p>
    <router-link class="btn btn-sm btn-primary" :to="navigationLink">
      Güncelle
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navigationLink: {
        name: 'userEdit',
        params: { id: this.$route.params.id },
        query: { name: 'sevket', lastname: 'mulazimoglu' },
        hash:'#data'
      }
    }
  },
  beforeRouteEnter(to,from,next){
      console.log("componenet seviyesinde kontrol")
      next()
  }
}
</script>
