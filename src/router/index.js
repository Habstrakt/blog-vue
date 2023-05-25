import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main.vue";
import Post from "@/views/Post.vue";
import NotFound from "@/views/NotFound.vue";
import About from "@/views/About.vue";
import Portfolio from "@/views/Portfolio.vue";
import Todo from "@/views/Todo.vue";
import Counter from "@/views/Counter.vue";
import Weather from "@/views/Weather.vue";
import Pizza from "@/views/Pizza/Main.vue";
import Cart from "@/views/Pizza/Cart.vue";
import Checkout from "@/views/Pizza/Checkout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "main", component: Main },
    { path: "/post/:id", name: "post", component: Post, props: true },
    { path: "/not_found", name: "NotFound", component: NotFound },
    { path: "/:catchAll(.*)", redirect: "/not_found" },
    { path: "/about", component: About },
    { path: "/portfolio", name: "portfolio", component: Portfolio },
    { path: "/portfolio/todo", name: "todo", component: Todo },
    { path: "/portfolio/counter", name: "counter", component: Counter },
    { path: "/portfolio/weather", name: "weather", component: Weather },
    { path: "/portfolio/pizzas", name: "pizzas", component: Pizza },
    { path: "/portfolio/pizzas/cart", name: "cart", component: Cart },
    {
      path: "/portfolio/pizzas/checkout",
      name: "checkout",
      component: Checkout,
    },
  ],
});

export default router;
