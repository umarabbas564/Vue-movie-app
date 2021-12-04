<template>
  <div class="container">
    <form @submit.prevent="login()">
      <div class="inner_wrapper">
        <h4 class="text-center">LOGIN</h4>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            v-model="formData.email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            v-model="formData.password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn_submit">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.formData.email != "" && this.formData.password != "") {
        this.$store.dispatch("authCheck", this.formData);
        console.log(this.$store.getters.auth.isLogin);
        if (this.$store.getters.auth.isLogin) {
          this.$router.push("/");
        }
      }
    },
  },
  created() {
    this.$store.commit("logout");
  },
};
</script>

<style lang="scss">
section {
  margin: 50%;
}

form {
  max-width: 400px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .inner_wrapper {
    width: 100%;
    padding: 30px 15px;
    background: #c7c7c766;
    border-radius: 4px;
    .form-group {
      margin-bottom: 15px;
      width: 100%;
      label {
        margin-bottom: 5px;
        font-size: 14px;
      }
      .form-control {
        font-size: 14px;
        &:focus {
          outline: none;
          box-shadow: none;
        }
      }
    }
    .input__wrapper {
      display: flex;
      flex-direction: column;
    }
    .btn_submit {
      display: block;
      margin: 15px auto;
      padding: 5px 30px;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
      background: #238b08;
      color: #ffffff;
      font-weight: 500;
      border: none;
      border-radius: 4px;
    }
  }
}
</style>
