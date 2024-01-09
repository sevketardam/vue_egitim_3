<script setup>
import BlueVue from "./components/Blue.vue"
import GreenVue from "./components/Green.vue"
import RedVue from "./components/Red.vue";

</script>

<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <button @click="blueBtn()" class="btn btn-sm btn-primary me-2"> Mavi Kutuyu Getir</button>
            <button @click="redBtn()" class="btn btn-sm btn-danger me-2"> Kırmızı Kutuyu Getir</button>
            <button @click="greenBtn()" class="btn btn-sm btn-success me-2"> Yeşil Kutuyu Getir</button>
          </div>

          <component :is="selectedComponent" :content="componentText" v-if="selectedComponent != null">
            <template v-slot:template>
                <h1>{{ componentText }}</h1>
            </template>
          </component>
          <div v-else>
            <h1>Seçili Bir Kutu Yok</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedComponent:null,
      componentText:null
    }
  },
  components:{
    BlueVue,
    GreenVue,
    RedVue
  },
  methods:{
    redBtn(){
      this.selectedComponent = 'RedVue'
      this.componentText = "Kırmızı Kutu Geldi"
    },
    greenBtn(){
      this.selectedComponent = 'GreenVue'
      this.componentText = "Yeşil Kutu Geldi"
    },
    blueBtn(){
      this.selectedComponent = 'BlueVue'
      this.componentText = "Mavi Kutu Geldi"
    },
  }
}
</script>

<style scoped></style>
