import mutations from "./mutations.js";
import actions from "./action.js";
import getters from "./getters.js";
export default {
  namespace: true,
  state() {
    return {
      favouritesList: JSON.parse(localStorage.getItem("favList"))
        ? JSON.parse(localStorage.getItem("favList"))
        : [],
    };
  },
  getters: getters,
  actions: actions,
  mutations: mutations,
};
