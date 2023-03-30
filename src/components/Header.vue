<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <router-link :to="{ name: 'main' }"
            ><img class="logo" src="../assets/img/logo.png" alt="logo"
          /></router-link>
        </div>
        <div class="col-6">
          <nav>
            <ul class="menu-items">
              <li v-for="link in links">
                <router-link class="menu_item" :to="link.url">{{
                  link.name
                }}</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Portfolio",
          url: "/portfolio",
        },
        {
          name: "/b/",
          url: "/bred",
        },
        {
          name: "About",
          url: "/about",
        },
      ],
    };
  },
};
</script>

<style scoped>
header {
  background-color: #323e4e;
  padding: 18px;
  height: auto;
}
.row {
  align-items: center;
}
.menu-items {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
}
li {
  padding-right: 20px;
}
.menu_item {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
}
.menu_item:hover {
  color: #fff;
}
.logo {
  width: 177px;
}
@media screen and (max-width: 414px) {
  .menu-items {
    justify-content: flex-start;
  }
}
</style>
