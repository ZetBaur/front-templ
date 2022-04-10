import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthRouter from "@/auth/router/auth-router";

const routes = [
  ...AuthRouter,
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      layout: "main",
      auth: false
    }
  },
  {
    path: "/about",
    name: "about",

    component: () => import("../views/AboutView.vue"),
    meta: {
      layout: "auth",
      auth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// router.beforeEach((to, from, next) => {
//   const requireAuth = to.meta.auth

//   if (requireAuth && store.getters['auth/isAuthenticated']) {
//     next()
//   } else if (requireAuth && !store.getters['auth/isAuthenticated']) {
//     next('/auth?message=auth')
//   } else {
//     next()
//   }
// })

export default router;
