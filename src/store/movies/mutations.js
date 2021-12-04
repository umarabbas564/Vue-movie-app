export default {
  setMovies(state, payload) {
    state.moviesList = payload.data;
  },
};
