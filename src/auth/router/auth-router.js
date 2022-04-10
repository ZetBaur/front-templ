export default [
  {
    path: "/login-form",
    name: "Login-form",
    meta: { requiresAuth: false, layout: "auth" },
    component: () => import("../views/login-form.vue")
  }
];
