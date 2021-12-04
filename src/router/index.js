import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import List from "../views/List.vue";
import favourite from "../views/favourite.vue";
import detail from "../views/Detail.vue";

const routes = [
  {
    path: "/",
    name: "list",
    component: List,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/favourite",
    name: "favourite",
    component: favourite,
  },
  {
    path: "/detail",
    name: "detail",
    component: detail,
  },

  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
