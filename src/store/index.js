import { createStore } from "vuex";
import auth from "./auth/index.js";
import movies from "./movies/index.js";
import favourites from "./Favourites/index.js";
import detail from "./Detail/index";
const store = createStore({
  modules: {
    auth,
    movies,
    favourites,
    detail,
  },
});

export default store;
