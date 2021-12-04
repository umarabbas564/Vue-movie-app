export default {
  authMutation(state, payload) {
    if (
      state.tempLogin.email == payload.email &&
      state.tempLogin.password == payload.password
    ) {
      state.isLogin = true;
      state.authUser = payload;
      localStorage.setItem("isLoggedIn", true);
    } else {
      state.isLogin = false;
    }
  },
  logout(state) {
    state.isLogin = false;
    localStorage.clear();
  },
};
