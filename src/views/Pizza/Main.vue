<script>
import Header from "@/components/Pizza/Header.vue";
import ProductList from "@/components/Pizza/ProductList.vue";

export default {
  components: { Header, ProductList },
};
</script>

<template>
  <Header />
  <main style="background-color: white">
    <div class="container">
      <ProductList />
    </div>
  </main>
</template>
