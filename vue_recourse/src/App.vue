<script setup>

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h3>Vue Recourse</h3>
        <div class="form-group">
          <input type="text" class="form-control" v-model="userName">
        </div>
        <button class="btn btn-sm btn-primary mt-3" @click="saveUser">Kaydet</button>
        <button class="btn btn-sm btn-success ms-3 mt-3" @click="getUsers">Verileri Getir</button>
        <hr>
        <ul class="list-group">
          <li class="list-group-item" v-for="user in userList" :key="user.id">
            <span> {{ user.userName }}</span>
            <button class="btn btn-sm btn-danger ms-2" @click="deleteUser(user.id)">Sil</button>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: null,
      userList: []
    }
  },
  methods: {

    saveUser() {
      const self = this;
      this.$axios.post("users.json", { userName: this.userName }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(async (response) => {
          if (response.status == 200) {
            self.userName = null;
          }
          await this.getUsers();
        })
    },
    async getUsers() {
      var getUsers = await this.$axios.get("users.json", {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(getUsers.convertedData)

      this.userList = getUsers.convertedData
    },
    async deleteUser(userKey) {

      await this.$axios.delete("users/" + userKey + ".json", {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      }).then(async (response) => {
        if (response.status == 200) {
          await this.getUsers();
        }
      }).catch((error) => {
        console.log(error)
      })

    }
  }
}
</script>

<style scoped></style>
