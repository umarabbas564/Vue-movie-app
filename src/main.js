import VueSweetalert2 from "vue-sweetalert2";
import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/js/bootstrap.js";
createApp(App).use(VueSweetalert2).use(store).use(router).mount("#app");
