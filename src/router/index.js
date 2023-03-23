import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main.vue";
import Post from "@/views/Post.vue";
import NotFound from "@/views/NotFound.vue";
import About from "@/views/About.vue";
import Works from "@/views/Works.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Main },
    { path: "/post/:id", name: "post", component: Post, props: true },
    { path: "/not_found", name: "NotFound", component: NotFound },
    { path: "/:catchAll(.*)", redirect: "/not_found" },
    { path: "/about", component: About },
    { path: "/works", component: Works },
  ],
});

export default router;
