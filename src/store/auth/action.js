export default {
  authCheck(context, payload) {
    context.commit("authMutation", payload);
  },
};
