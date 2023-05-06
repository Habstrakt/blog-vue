<script>
export default {
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
@media (max-width: 414px) {
  a {
    font-size: 12px;
  }
}
</style>
