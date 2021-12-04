import axios from "axios";
export default {
  async getMovies(context, payload) {
    await axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=6f6c017e129ccffdede5afeec3ad19c0&language=en-US&page=1",
      headers: {
        // key: '6f6c017e129ccffdede5afeec3ad19c0'
      },
    })
      .then((data) => {
        context.commit("setMovies", { data, payload });
      })
      .catch((error) => console.log(error));
  },
};
