<template>
  <div class="container">
    <h3 class="text-center mt-3">Vuelidate ile Form Kontrolü</h3>
    <div class="d-flex justify-content-center align-content-center flex-row">
      <div class="card p-4 mt-3 me-3 shadow">
        <form style="width: 350px" @submit.prevent="onSubmit">
          <div class="mb-3">
            <label>E-posta Adresiniz</label>
            <input @blur="v$.email.$touch()" v-model="email" type="email" class="form-control"
              :class="{ 'is-invalid': v$.email.$error }" placeholder="E-posta adresini giriniz">

            <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
              <small class="form-text text-danger">{{ error.$message }}</small>
            </div>

          </div>
          <div class="mb-3">
            <label>Şifre</label>
            <input v-model="v$.password.$model" type="password" class="form-control" placeholder="Şifrenizi giriniz">

            <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
              <small class="form-text text-danger">{{ error.$message }}</small>
            </div>
          </div>
          <div class="mb-3">
            <label>Şifre Tekrar</label>
            <input v-model="v$.repassword.$model" type="password" class="form-control"
              placeholder="Şifrenizi tekrar giriniz">

            <div class="input-errors" v-for="error of v$.repassword.$errors" :key="error.$uid">
              <small class="form-text text-danger">{{ error.$message }}</small>
            </div>
          </div>
          <div class="mb-3">
            <label>Yaşınız</label>
            <input @blur="v$.age.$touch()" v-model="age" type="number" class="form-control"
              :class="{ 'is-invalid': v$.age.$error }" placeholder="E-posta adresini giriniz">

            <div class="input-errors" v-for="error of v$.age.$errors" :key="error.$uid">
              <small class="form-text text-danger">{{ error.$message }}</small>
            </div>

          </div>
          <div class="mb-3">
            <label>Kayıt olmak istediğiniz kategori</label>
            <select v-model="v$.selectedCategory.$model" class="form-control">
              <option v-for="category in categories" :value="category" :key="category">{{ category }}</option>
            </select>

            <div class="input-errors" v-for="error of v$.selectedCategory.$errors" :key="error.$uid">
              <small class="form-text text-danger">{{ error.$message }}</small>
            </div>
          </div>

          <!-- <a @click="newHobby" class="text-white btn btn-secondary rounded-0 btn-sm">İlgi Alanı Ekle</a> -->

          <!-- <ul class="list-group mt-3 mb-3 border-0">
            <li v-for="(hobby, index) in this.hobbies" :key="hobby" class="list-group-item d-flex pl-2">
              <input @blur="v$.hobbies.$each.$response[index].value.$touch()"
                 type="text" class="form-control mr-2"
                v-model="hobby.value">
              <button class="btn btn-sm btn-danger rounded-0" @click="hobbies.splice(index, 1)">Sil</button>
            </li>
          </ul> -->

          <!-- <div class="input-errors" v-for="error of v$.hobbies.$errors" :key="error.$uid">
            <small class="form-text text-danger">{{ error.$message }}</small>
          </div> -->

          <button class="btn btn-outline-secondary rounded-0" :disabled="v$.$invalid">Kaydet</button>
        </form>
      </div>
      <div class="card p-4 mt-3  shadow" style="width:400px;">
        <p>{{ v$ }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, numeric, minLength, maxLength, sameAs, between, helpers } from '@vuelidate/validators'

export default {
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      email: null,
      password: null,
      repassword: null,
      selectedCategory: null,
      categories: ["Yazılım", "Donanım", "Cloud", "Sunucular", "Unix", "Linux", "Mac OS", "Windows"],
      hobbies: [],
      age: null

    }
  },
  validations() {
    return {
      email: {
        required,
        email,
        uniq: helpers.withAsync(async (val) => {
          var response = await new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(val != "test@test.com")
            }, 1000)
          })

          return response;
        })
      },
      password: {
        required,
        numeric,
        minLength: minLength(6),
        maxLength: maxLength(10)
      },
      repassword: {
        required,
        numeric,
        minLength: minLength(6),
        maxLength: maxLength(10),
        sameAsPassword: sameAs(this.password)
      },
      age: {
        required,
        numeric,
        between: between(18, 60)
      },
      selectedCategory: {
        isYazilim: helpers.withMessage(() => "test", (val, vm) => {
          return vm.selectedCategory == "Yazılım" ? true : false
        })
      },
      // hobbies: {
      //   required,
      //   minLength: minLength(2),
      //   $each: helpers.forEach({
      //     value: {
      //       required,
      //       minLength: minLength(6)
      //     }
      //   })
      // }
    }
  },
  methods: {
    onSubmit() {
      let form = {
        email: this.email,
        password: this.password,
        category: this.category,
        // hobbies: this.hobbies,
      }
      console.log(form)
    },
    // newHobby() {
    //   let hobby = {
    //     id: Math.random() * Math.random() * 1000,
    //     value: ''
    //   }
    //   this.hobbies.push(hobby)
    //   console.log(v$.hobbies)
    // }
  }
}
</script>
