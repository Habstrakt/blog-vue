import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/views/NotFound.vue";

const Main = () => import("@/views/Main.vue");
const Post = () => import("@/views/Post.vue");
const About = () => import("@/views/About.vue");
const Portfolio = () => import("@/views/Portfolio.vue");
const Todo = () => import("@/views/Todo.vue");
const Counter = () => import("@/views/Counter.vue");
const Weather = () => import("@/views/Weather.vue");
const Cart = () => import("@/views/Pizza/Cart.vue");
const Checkout = () => import("@/views/Pizza/Checkout.vue");

const Pizza = () => import("@/views/Pizza/Main.vue");

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
