<script>
import Header from "@/components/Pizza/Header.vue";
import Card from "@/components/Pizza/Card.vue";

export default {
  components: { Header, Card },
};
</script>

<template>
  <Header />
  <main style="background-color: white">
    <div class="container">
      <Card />
    </div>
  </main>
</template>
