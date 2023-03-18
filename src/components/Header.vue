<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <router-link to="/"
            ><img src="../assets/img/logo.png" alt="logo"
          /></router-link>
        </div>
        <div class="col-6">
          <nav>
            <ul>
              <li>
                <a class="menu_text" href="/projects">Проекты</a>
              </li>
              <li>
                <a class="menu_text" href="/bred">/b/</a>
              </li>
              <li>
                <a class="menu_text" href="/about">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script></script>

<style scoped>
header {
  background-color: #323e4e;
  padding: 18px;
  height: auto;
}
.row {
  align-items: center;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
}
li {
  padding-right: 20px;
}
.menu_text {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
}
.menu_text:hover {
  color: #fff;
}
img {
  width: 180px;
}
</style>
