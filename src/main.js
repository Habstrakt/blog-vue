import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import VueTheMask from "vue-the-mask";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(VueTheMask);

app.mount("#app");
