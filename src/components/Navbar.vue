<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">VueMovie</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-if="this.$store.getters.auth.isLogin">
            <router-link class="nav-link" to="/">Movies List </router-link>
          </li>
          <li class="nav-item" v-if="this.$store.getters.auth.isLogin">
            <router-link to="/favourite" class="nav-link"
              >My Favourites
            </router-link>
          </li>
        </ul>
        <ul
          class="navbar-nav ms-auto mb-2 mb-lg-0"
          v-if="this.$store.getters.auth.isLogin"
        >
          <li class="nav-item ms-auto mb-2 mb-lg-0" style="float: right">
            <router-link class="nav-link" to="" type="submit" @click="logout()"
              >Logout</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0" v-else>
          <li class="nav-item ms-auto mb-2 mb-lg-0" style="float: right">
            <a class="nav-link" href="/login" type="submit">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",

  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    },
  },
};
</script>
