<template lang="html">
  <div class="navbar">
    <b-navbar toggleable type"inverse" variant="succes">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-link class="navbar-brand" to="./">
        <span>Blog Firefox</span>
      </b-link>
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
        <b-nav-item>Login</b-nav-item>
        <b-nav-item>Docs</b-nav-item>
        <b-nav-item>Contact Us</b-nav-item>
      </b-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="css">
</style>
