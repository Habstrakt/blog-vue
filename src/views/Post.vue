<template>
  <div class="col-lg-9">
    <section>
      <article>
        <div>
          <h3>
            <router-link class="text_title" to="/">
              {{ post.title }}
            </router-link>
          </h3>
          <p class="text">{{ post.body }}</p>
          <p class="date">Дата 01.01.2023</p>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      post: {},
    };
  },
  created() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then((response) => {
        this.post = response.data;
      });
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
  margin-bottom: 30px;
}
.date {
  text-align: end;
}
.text {
  font-size: 1.2rem;
  text-align: center;
}
article {
  padding: 50px;
  background-color: white;
  margin: 14px 0 14px;
}
.text_title {
  color: black;
  text-decoration: none;
}
.text_title:hover {
  color: rgb(168, 12, 77);
}
</style>
