<template lang="html">
  <b-tabs class="middle">
    <b-tab title="Register">
      <div style="padding:24px">
        <br/>
        <p style="text-align: left">Name</p>
        <b-form-input type="text" v-model="regNama" placeholder="Enter Your Name"></b-form-input>
        <p style="text-align: left">Email</p>
        <b-form-input type="text" v-model="regEmail" placeholder="Enter Your Name"></b-form-input>
        <p style="text-align: left">Password</p>
        <b-form-input type="text" v-model="regPassword" placeholder="Enter Your Name"></b-form-input>
        <b-button class="success" @click="doRegister">Register</b-button>
        <br>
      </div>
    </b-tab>
    <b-tab title="Login">
      <div style="padding:24px">
        <br/>
        <p style="text-align: left">Username</p>
        <b-form-input type="text" v-model="logUsername" placeholder="Enter Your Name"></b-form-input>
        <br>
        <p style="text-align: left">Password</p>
        <b-form-input type="text" v-model="logPassword" placeholder="Enter Your Name"></b-form-input>
        <br>
        <b-button class="success" @click="doLogin">Login</b-button>
      </div>
    </b-tab>
    <div v-if="regStat">
      <p>Akun berhasil dibuat! Silakan login untuk mulai bergabung dalam diskusi!</p>
    </div>
    <div v-if="failedLog">
      <p>Email atau password anda salah!</p>
    </div>
    <div v-if="failedReg">
      <p>Gagal, cek kembali input anda.</p>
    </div>
  <b-tabs>
</template>

<script>
export default {
  data () {
    return {
      regName: null,
      regEmail: null,
      regPassowrd: null,
      logUsername: null,
      logUsername: null,
      regStat: null,
      failedLog: null,
      failedReg: null
    }
  },
  methods: {
    doRegister () {
      var self = this
      self.failedLog = false
      this.axios.post('http://localhost:3000/users/signup', {
        username: self.regName,
        email: self.regEmail,
        password: self.regPassword
      })
      .then( (response) => {
        if(response.data._id) {
          self.regStat = true
        } else {
          self.failedReg = true
        }
      })
      .catch( (err) => {
        console.log(err)
        self.failedReg = true
      })
    },
    doLogin () {
      var self = this
      self.failedReg = false
      this.axios.post('http://localhost:3000/users/login', {
        username: self.logUsername,
        password: self.logPassword
      })
      .then((response) => {
        if(response.data.token) {
          localStorage.getItem('token', response.data.token)
          self.$store.dispatch('getUser')
          self.logName = null,
          self.logPassword = null,
          self.$router.push('./')
        } else {
          self.failedLog = true
        }
      })
      .catch( (err) => {
        console.log(err)
        self.failedLog = true
      })
    }
  }
}
</script>

<style lang="css">
</style>
