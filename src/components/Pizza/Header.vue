<script>
import { usePizzaStore } from "@/store/PizzaStore.js";

export default {
  setup() {
    const pizzaStore = usePizzaStore();
    return { pizzaStore };
  },
  data() {
    return {
      menuItem: ["Пицца", "Закуски", "Напитки"],
    };
  },
};
</script>

<template>
  <nav>
    <div class="menu-nav">
      <div class="logo">Pizza Vue</div>
      <ul>
        <li v-for="item in menuItem" class="menu-item" :key="item">
          <a href="">{{ item }}</a>
        </li>
      </ul>
      <div class="cart">
        <router-link :to="{ name: 'cart' }">В корзину</router-link>
        <i v-if="pizzaStore.totalCount > 0">
          {{ pizzaStore.totalCount }}
        </i>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  background-color: #f6c6b3;
  padding-top: 10px;
}
.menu-nav {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
ul {
  list-style: none;
  display: inline-block;
}
li,
.logo {
  display: inline-block;
}
.menu-item {
  margin-left: 20px;
}
.cart {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 1;
  height: 100%;
}
i {
  display: inline-block;
  border-radius: 30px;
  background-color: red;
  color: #fff;
  font-weight: 600;
  width: 22px;
  height: 22px;
  font-style: normal;
  font-size: 13px;
  line-height: 22px;
  position: relative;
  top: 0px;
  left: 3px;
  text-align: center;
}
@media (max-width: 414px) {
  a {
    font-size: 12px;
  }
}
</style>
