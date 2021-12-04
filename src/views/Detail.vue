<template>
  <Navbar></Navbar>
  <div class="container mt-5">
    <h1 class="mt-2">{{ detail.original_title }}</h1>
    <small>Realease Date: {{ detail.release_date }}</small>
    <div class="row">
      <div class="col-md-12">
        <ul class="list-group">
          <li class="list-group-item">
            Production companies:<span
              class="badge bg-secondary float-right ml-1"
              >889977</span
            >
            <span class="badge bg-secondary float-right ml-1"
              >Seven Bucks Productions</span
            >
            <span class="badge bg-secondary float-right ml-1"
              >Legendary Pictures</span
            >
            <span class="badge bg-secondary float-right ml-1"
              >Bad Version, Inc.</span
            >
          </li>
          <li class="list-group-item">
            Production countries:<span class="badge bg-info float-right ml-1"
              >United States of America</span
            >
          </li>
          <li class="list-group-item">
            Original language:<span class="badge bg-success float-right ml-1">{{
              detail.original_language
            }}</span>
          </li>
          <li class="list-group-item">
            Total Vote:<span class="badge bg-dark float-right">{{
              detail.vote_count
            }}</span>
          </li>
          <li class="list-group-item">
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/Pj0wz7zu3Ms"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            >
            </iframe>
          </li>
          <li class="list-group-item">
            An Interpol-issued Red Notice is a global alert to hunt and capture
            the world's most wanted. But when a daring heist brings together the
            FBI's top profiler and two rival criminals, there's no telling what
            will happen.
          </li>
          <li class="list-group-item">
            <img
              :src="'https://image.tmdb.org/t/p/w500/' + detail.poster_path"
              class="mt-2 card-img-top"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Detail",
  components: {
    Navbar,
  },

  data() {
    return {
      detail: {},
    };
  },

  created() {
    this.detail = this.$store.getters.getDetail;
    console.log(this.detail);
  },
};
</script>
<style lang="scss" scoped>
.list-group {
  .list-group-item {
    span.badge {
      float: right;
      margin: 0px 5px;
    }
    iframe {
      height: 620px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .list-group {
    .list-group-item {
      span.badge {
        float: none;
        margin: 5px 5px;
      }
      iframe {
        height: 250px;
      }
    }
  }
}
</style>
