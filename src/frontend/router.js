import { createRouter, createWebHistory } from "vue-router";
import Gallery from "./components/Gallery.vue";
import Details from "./components/Details.vue";
import NotFound from "./components/NotFound.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Gallery,
    },
    {
      path: "/not-found",
      component: NotFound,
    },
    {
      path: "/:movieId",
      component: Details,
    },
  ],
});

export default router;
