import mutations from "./mutations.js";
import actions from "./action.js";
import getters from "./getters.js";
export default {
  namespace: true,
  state() {
    return {
      moviesList: {},
    };
  },

  getters: getters,
  actions: actions,
  mutations: mutations,
};
