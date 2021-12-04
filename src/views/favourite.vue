<template v-if="this.$store.getters.auth.isLogin">
  <Navbar></Navbar>

  <div class="container">
    <div
      class="alert alert-info"
      v-if="
        this.$store.getters.auth.isLogin &&
        this.$store.getters.getFavouriteList.length > 0
      "
    >
      My Favourite Movies
    </div>
    <div class="row" v-if="favourites.length > 0">
      <div
        class="col-md-4 mt-4"
        v-for="(list, index) in this.$store.getters.getFavouriteList"
        :key="list.id"
      >
        <div class="card">
          <img
            :src="'https://image.tmdb.org/t/p/w500/' + list.poster_path"
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">
              {{ list.title }}
            </h5>
            <p class="card-text">{{ list.overview }}</p>
            <div class="buttons-wrapper">
              <a href="#" class="card-link btn btn-dark">Detail</a>
              <span
                ><a
                  href="javascript:void(0)"
                  @click="removeItem(index, list)"
                  class="card-link"
                  id="rmv"
                  ><i class="bi bi-trash"></i></a
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row" v-else>
      <div class="alert alert-danger">No Favourite Movies Found</div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "favourite",
  components: {
    Navbar,
  },
  data() {
    return {
      favourites: {},
    };
  },
  created() {
    this.favourites = this.$store.getters.getFavouriteList;
  },
  updated() {
    this.favourites = this.$store.getters.getFavouriteList;
  },
  methods: {
    removeItem(index, item) {
      this.$store.commit("removeItem", item);
    },
  },
};
</script>
<style lang="scss" scoped>
#rmv {
  float: right;
}
#lst {
  float: right;
}
div.alert {
  position: relative;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  margin-top: 15px;
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
    .buttons-wrapper {
      position: absolute;
      width: calc(100% - 30px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      bottom: 0;
      .card-link.btn-dark {
        min-width: 100px;
      }
    }
  }
}
</style>
