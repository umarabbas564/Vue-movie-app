export default {
  favourite(context, payload) {
    context.commit("setFavouriteList", payload);
  },
};
