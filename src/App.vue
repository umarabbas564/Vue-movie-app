<template>
  <router-link to="/Login"></router-link>
  <router-view />
</template>

<script>
import "sweetalert2/dist/sweetalert2.min.css";
export default {
  created() {
    const user = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (!user) {
      this.$store.dispatch("authCheck", {});
    }
  },
};
</script>

