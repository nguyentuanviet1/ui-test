<template>
  <div >
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href=""><h2>Pluvego</h2></a>
            <div class="absolute navbar-brand">Martin.D. <a href=""> Se déconnecter</a></div>
        </nav>
    </header>
    <div class="">
      <b-row>
        <b-col sm="2" class="content">
          <div class="note-content">
            <h4>Mes alertes</h4>
            <h4>Mes assets</h4>
            <h4>Mes contacts</h4>
            <h4>Profil</h4>
          </div>
        </b-col>
        <b-col sm="10">
            <div class="a">
            <h2>Profil</h2>
            </div>
            <div class="container note-content">
              <label class="name"><b>Name</b></label>
              <b-form-input class="style-input" v-model="fromLogin.name" placeholder="Enter your name"></b-form-input>
              <br>
              <label class="name"><b>password</b></label>
              <b-form-input class="style-input" v-model="fromLogin.pass" placeholder="Enter your name"></b-form-input>
              <br>
              <b-button @click.prevent="clickLogin()"  variant="primary" class=" btn-login">Login</b-button>
            </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
    
<script>
import Vue from 'vue'
import axios from 'axios'
// import router from '../routes';
// import VueRouter from 'vue-router';
    
// Vue.use(VueRouter);
    
// const router = new VueRouter({
//   routes: Routes,
// });
export default  class login extends Vue  {
  fromLogin = {
      name: '',
      pass: '',
  }
  router
  listUser = null
    async clickLogin() {
      await axios.get('http://localhost:8002/getdata')
      .then(response => (this.listUser = response.data.data))
      this.listUser.forEach(element => 
      {
          if (element.name == this.fromLogin.name && element.pass == this.fromLogin.pass) {
              this.$router.push({ path: '/user' })
          }
      })
  }
}
</script>
    
<style scoped>
.a {
  text-align: center;
}
.content {
  height: 900px;
 border-right: 1px solid black;
}
.note-content {
  margin: 20px;
}
.name {
  width: 180px;
  margin-top: 30px;
}
.box {
    display: flex;
    flex-wrap: nowrap;
}
.dropdown-data {
  margin-top: 20px;
  width: 120px;
}
.phone-number {
  margin-top: 20px;
}
.style-input {
  width: 400px;
}
.absolute {
  position: absolute;
  right: 0;
  /* color:; */
}
.btn-login {
    margin: 30px 180px;
}
</style>