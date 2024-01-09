<script setup>
import AppSwitch from './components/Switch.vue'

</script>

<template>
  <div class="container">
    <h3>Form Verileriyle Çalışmak</h3>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <div class="panel panel-warning">
          <div class="panel-heading">
            <h4>Başvuru Formu</h4>
          </div>
          <div class="panel-body">
            <form>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="username">Kullanıcı Adı</label>
                    <input type="text" id="username" class="form-control" :value="user.user_name" @input="user.user_name = $event.target.value">
                  </div>
                  <div class="form-group">
                    <label for="password">Şifre</label>
                    <input type="password" id="password" v-model.lazy.trim="user.password" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="age">Yaş</label>
                    <input type="number" id="age" v-model.number.lazy.trim="user.age" class="form-control">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label for="message">Açıklama</label><br>
                  <textarea id="message" rows="3" v-model="user.message" class="form-control">

                  </textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>
                      <input type="checkbox" v-model="user.interests" value="yazilim"> Yazılım
                    </label>
                    <label>
                      <input type="checkbox" v-model="user.interests" value="donanim"> Donanım
                    </label>
                  </div>

                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label>
                    <input type="radio" v-model="user.gender" value="erkek"> Erkek
                  </label>
                  <label>
                    <input type="radio" v-model="user.gender" value="kadin"> Kadın
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label>Şehir</label>
                  <select class="form-control" v-model="user.city">
                    <option  :selected="city == 'Ankara'" v-for="city in cities" :key="city">{{ city }}</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <app-switch :value="switched" @input="val => switched = val"></app-switch>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-md-12">
                  <button @click.prevent="submit" class="btn btn-primary">Gönder!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6" v-if="isSubmited">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h4>Form Verileri</h4>
          </div>
          <div class="panel-body">
            <p>Kullanıcı Adı: {{ user.user_name }}</p>
            <p>Şifre: {{ user.password }}</p>
            <p>Yaş: {{ user.age }}</p>
            <p style="white-space: pre;">Açıklama: {{ user.message }} </p>
            <p><strong>İlgi Alanları</strong></p>
            <ul>
              <li v-for="interest in user.interests" :key="interest">{{ interest }}</li>
            </ul>
            <p>Cinsiyet: {{ user.gender }}</p>
            <p>Şehir: {{ user.city }}</p>
            <p>Toggle:{{ switched }}</p>
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
      user: {
        user_name: "",
        password: "",
        age: 0,
        message: "",
        interests: [],
        gender: null,
        city:""
      },
      cities: ["İstanbul", "Ankara", "Adana", "Konya"],
      switched:true,
      isSubmited:false
    }
  },
  methods:{
    submit(){
      this.isSubmited = true;
    }
  }
}
</script>