<template lang="html">
  <b-tabs class="middle">
    <b-tab title="register">Register</b-tab>
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
    <b-tab title="login">Login</b-tab>
    <div style="padding:24px">
      <br/>
      <p style="text-align: left">Name</p>
      <b-form-input type="text" v-model="regNama" placeholder="Enter Your Name"></b-form-input>
      <br>
      <p style="text-align: left">Name</p>
      <b-form-input type="text" v-model="regNama" placeholder="Enter Your Name"></b-form-input>
      <br>
      <p style="text-align: left">Name</p>
      <b-form-input type="text" v-model="regNama" placeholder="Enter Your Name"></b-form-input>
    </div>
  <b-tabs>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
