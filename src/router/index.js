import Vue from "vue";
import store from "@/store/index";
import VueRouter from "vue-router";
import auth from "@/middleware/auth";
import admin from "@/middleware/admin";
import guest from "@/middleware/guest";

import middlewarePipeline from "@/router/middlewarePipeline";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    meta: { middleware: [auth] },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard"),
  },
  {
    path: "/category",
    name: "category",
    meta: { middleware: [auth] },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Category"),
  },
  {
    path: "/want-to-read",
    name: "want-to-read",
    meta: { middleware: [auth] },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/WantToRead"),
  },
  {
    path: "/category-detail/:id",
    name: "category-detail",
    meta: { middleware: [auth] },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/CategoryDetail"),
  },
  {
    path: "/book-detail/:id",
    name: "book-detail",
    meta: { middleware: [auth] },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/BookDetail"),
  },
  {
    path: "/category-book-detail/:id",
    name: "category-book-detail",
    meta: { middleware: [auth] },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/BookDetail"),
  },
  {
    path: "/want-to-read-book-detail/:id",
    name: "want-to-read-book-detail",
    meta: { middleware: [auth] },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/BookDetail"),
  },
  {
    path: "/update-category",
    name: "updateCategory",
    meta: { middleware: [auth] },

    component: () =>
      import(/* webpackChunkName: "not-found" */ "../views/SelectCategory"),
  },
  {
    path: "/user",
    name: "user",
    meta: { middleware: [auth] },
    component: () => import(/* webpackChunkName: "user" */ "../views/User"),
  },
  {
    path: "/users",
    name: "users",
    meta: { middleware: [auth, admin] },
    component: () => import(/* webpackChunkName: "users" */ "../views/Users"),
  },
  {
    path: "/login",
    name: "login",
    meta: { middleware: [guest] },
    component: () => import(/* webpackChunkName: "login" */ "../views/Login"),
  },
  {
    path: "/register",
    name: "register",
    meta: { middleware: [guest] },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register"),
  },
  {
    path: "/reset-password",
    name: "resetPassword",
    meta: { middleware: [guest] },
    component: () =>
      import(/* webpackChunkName: "reset-password" */ "../views/ResetPassword"),
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    meta: { middleware: [guest] },
    component: () =>
      import(
        /* webpackChunkName: "forgot-password" */ "../views/ForgotPassword"
      ),
  },
  {
    path: "/verification-notice",
    name: "verificationNotice",
    meta: { middleware: [guest] },
    component: () =>
      import(
        /* webpackChunkName: "forgot-password" */ "../views/VerificationNotice"
      ),
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "../views/NotFound"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const middleware = to.meta.middleware;
  const context = { to, from, next, store };

  if (!middleware) {
    return next();
  }

  middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
