<template>
  <router-link to="/Login"></router-link>
  <router-view />
</template>

<script>
export default {
  created() {
    const user = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (!user) {
      this.$store.dispatch("authCheck", {});
    }
  },
};
</script>
