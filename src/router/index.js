import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Auth from "@okta/okta-vue";

Vue.use(Auth, {
  client_id: "0oa13czi4oDYSai7U4x7",
  client_secret:'1GCw8vQdPatXz07NhwRu2TGAQBNBjlcyxoPUGQw_',
  issuer: `https://dev-940310.okta.com/oauth2/default`,
  redirectUri: window.location.origin + "/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
});

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
 
  {
    path: "/blog",
    name: "Blog",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Blog.vue"),
  },
  {
    path: "/admin",
    name: "Dashboard",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/admin.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  { path: "/login/callback", component: Auth.handleCallback() },
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

const onAuthRequired = async (from, to, next) => {
  if (
    from.matched.some((record) => record.meta.requiresAuth) &&
    !(await Vue.prototype.$auth.isAuthenticated())
  ) {
    // Navigate to custom login page
   
    next({ path: "/" });
  } else {
    next();
  }
};

router.beforeEach(onAuthRequired);
export default router;
