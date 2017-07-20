<template lang="html">
  <div class="navbar">
    <b-navbar toggleable type"inverse" variant="succes">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-link class="navbar-brand" to="./">
        <span>Blog Firefox</span>
      </b-link>
      <b-collapse is-nav id="nav_collapse">
        <b-nav v-if="user._id" is-nav-bar >
        <b-button to="./create">Create New Article</b-button>
          <b-nav-item>Welcome , {{user.username}}</b-nav-item>
            <b-nav-item-dropdown right>
            <!-- Using text slot -->
              <template slot="text">
                <span style="font-weight: bold;">User</span>
              </template>
              <b-dropdown-item to="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="doLogout">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>
        <b-nav v-else is-nav-bar>
          <b-nav-item to="./registration"></b-nav-item>
        </b-nav>
     </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    doLogout () {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.$store.commit('logout')
    }
  },
  computed: {
    user () {
      return.this.$store.getters.user
    }
  }
}
</script>

<style lang="css">
</style>
