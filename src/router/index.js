import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main.vue";
import Post from "@/views/Post.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Main },
    { path: "/post/:id", name: "Post", component: Post, props: true },
    { path: "/not_found", name: "NotFound", component: NotFound },
    { path: "/:catchAll(.*)", redirect: "/not_found" },
  ],
});

export default router;
