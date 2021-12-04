<template>
  <Navbar></Navbar>
  <div class="container">
    <div class="row">
      <div class="col-md-4 mt-4" v-for="list in moviesList" :key="list.id">
        <div class="card">
          <img
            :src="'https://image.tmdb.org/t/p/w500/' + list.poster_path"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">
              {{ list.original_title }}
              <span
                id="lst"
                v-if="this.$store.getters.auth.isLogin"
                @click="add(index, list)"
                :class="list.isActive ? 'fav' : ''"
                ><a href="javascript:void(0)"><i class="bi bi-heart"></i></a
              ></span>
            </h5>
            <p class="card-text">{{ list.overview.substr(0, 100) }}</p>
            <router-link
              to="/detail"
              class="card-link btn btn-secondary"
              @click="detail(index, list)"
              >Detail</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "List",
  components: {
    Navbar,
  },

  data() {
    return {
      moviesList: {},
    };
  },
  methods: {
    add(index, list) {
      let newList = [...this.moviesList];
      newList.map((item) => {
        if (item.id === list.id) {
          item["isActive"] = true;
        }
      });
      this.$store.dispatch("favourite", list);
      this.$store.commit("setMovies", { data: newList });
    },
    detail(index, list) {
      this.$store.dispatch("Detail", list);
    },
  },
  created() {
    this.$store.dispatch("getMovies", this.moviesList).then(() => {
      this.moviesList = this.$store.getters.getMoviesList.data.results;
    });
  },
};
</script>
<style scoped lang="scss">
#lst {
  float: right;
  &.fav {
    .bi-heart {
      color: orangered;
    }
  }
}
a.card-link {
  bottom: 15px;
  position: absolute;
  width: calc(100% - 30px);
}
div.card {
  height: 100%;
  padding: 20px;
  .card-body {
    position: relative;
    padding-bottom: 55px;
    .card-title {
      padding-right: 15px;
      #lst {
        position: absolute;
        right: 15px;
        top: 15px;
        line-height: 1.2;
      }
    }
  }
}
</style>
