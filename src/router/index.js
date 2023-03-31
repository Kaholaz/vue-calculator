import { createRouter, createWebHistory } from "vue-router";

import CalculatorView from "@/views/CalculatorView.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFoundView.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/",
      name: "Calculator",
      component: CalculatorView,
    },
  ],
});
