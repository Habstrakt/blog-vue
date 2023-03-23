<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Main from "@/views/Main.vue";
import Aside from "@/components/Aside.vue";

export default {
  components: { Header, Main, Aside },
  data() {
    return {
      showScrollBtn: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollBtn() {
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
    handleScroll() {
      if (window.pageYOffset > 1000) {
        this.showScrollBtn = true;
      } else {
        this.showScrollBtn = false;
      }
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
  <div v-if="showScrollBtn" @click="scrollBtn" class="btn btn-secondary">
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
