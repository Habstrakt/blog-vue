<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Main from "@/views/Main.vue";
import Aside from "@/components/Aside.vue";

export default {
  components: { Header, Main, Aside },
  methods: {
    scrollUp() {
      const scrollDuration = 300;
      const scrollStep = -window.pageYOffset / (scrollDuration / 15);
      let scrollInterval = setInterval(() => {
        if (window.pageYOffset !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    },
  },
};
</script>

<template>
  <Header />
  <div class="container">
    <div class="row">
      <Aside />
      <router-view></router-view>
    </div>
  </div>
  <div @click="scrollUp" class="btn btn-secondary">
    <img src="./assets/img/arrow-up.svg" alt="" />
  </div>
</template>

<style>
.btn-secondary {
  position: fixed;
  bottom: 100px;
  right: 60px;
}
</style>
