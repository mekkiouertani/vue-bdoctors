import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../src/pages/AppHome.vue";
import AdvancedSearch from "../src/pages/AdvancedSearch.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/search",
      name: "search",
      component: AdvancedSearch,
    },
    /*  {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    }, */
  ],
});

export default router;
