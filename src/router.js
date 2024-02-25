import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../src/pages/AppHome.vue";
import AdvancedSearch from "../src/pages/AdvancedSearch.vue";
import DetailDoctor from "../src/pages/DetailDoctor.vue";
import NotFound from "../src/pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: AppHome,
    meta: { title: "BDoctors" },
  },
  {
    path: "/search",
    name: "search",
    component: AdvancedSearch,
    meta: { title: "BDoctors - Cerca" },
  },
  {
    path: "/detail-doctor/:id",
    name: "detail-doctor",
    component: DetailDoctor,
    meta: { title: "BDoctors - Profilo Medico" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
    meta: { title: "BDoctors - Error 404" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Watcher globale per cambiamenti di route
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Titolo Predefinito"; // Imposta il titolo della pagina
  next();
});

export default router;
