import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "./assets/scss/style.scss";
import "./assets/css/hamburger.css";

import VueAwesomeSwiper from 'vue-awesome-swiper'
import Toasted from 'vue-toasted';
import 'dotenv/config';

Vue.use(Toasted, {
  duration: 3500,
  iconPack: "fontawesome",
  action: {
      text: "Cancel",
      onClick: (e, toastObject) => {
          toastObject.goAway(0);
      }
  }
});


Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.use(VueAxios, axios)
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.typeAdmin)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
     
          next({
               path:'/auth/login',
               query: { redirect: to.fullPath }
          });
     
  } else {
      next(); // make sure to always call next()!
  }
  
});


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
