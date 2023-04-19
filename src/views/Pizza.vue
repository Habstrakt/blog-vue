<template>
  <nav>
    <div class="menu-nav">
      <div class="logo">Vue Pizza Logo</div>
      <ul>
        <li class="menu-item">
          <a href="">Пицца</a>
        </li>
        <li class="menu-item">
          <a href="">Закуски</a>
        </li>
        <li class="menu-item">
          <a href="">Напитки</a>
        </li>
      </ul>
      <div class="cart"><a href="">В корзину</a></div>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="wrapper">asd</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  background-color: #f6c6b3;
  padding-top: 10px;
}
.menu-nav {
  width: 1280px;
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
</style>
