<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr>
    <p>
      Ad: {{ $route.query.name }}
    </p>
    <p>
      Soyad: {{ $route.query.lastname }}
    </p>
    <button class="btn btn-sm btn-primary" @click="saved = true">Onayla</button>
    <div style="height: 800px;">
      <p id="data">Gelebilecek bazı bilgiler</p>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        saved:false
      }
    },
    beforeRouteLeave(to,from,next){
      if(this.saved){
        next()
      }else{
        if(confirm("Tüm bilgileriniz kaybolacak. Emin misiniz?")){
          next()
        }else{
          next(false)
        }
      }

    }
  }
</script>
