<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Main from "@/views/Main.vue";
import Aside from "@/components/Aside.vue";

export default {
  components: { Header, Main, Aside },
};
</script>

<template>
  <Header />
  <router-view></router-view>
</template>
