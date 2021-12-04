import mutations from "./mutations.js";
import actions from "./action.js";
import getters from "./getters.js";
export default {
  namespace: true,
  state() {
    return {
      isLogin: localStorage.getItem("isLoggedIn") ? true : false,
      authUser: {},
      tempLogin: { email: "test@test.com", password: "12345678" },
    };
  },

  getters: getters,
  actions: actions,
  mutations: mutations,
};
