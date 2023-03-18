<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: {},
    };
  },
  methods: {
    async getPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.posts = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<template>
  <div class="col-lg-9">
    <main>
      <section>
        <article v-for="post in posts" :key="post.id">
          <h3>
            <router-link class="text_title" :to="`/post/${post.id}`">
              {{ post.title }}
            </router-link>
          </h3>
          <p class="text">
            {{ post.body }}
          </p>
          <p class="date">Дата 01.01.2023</p>
        </article>
      </section>
    </main>
  </div>
</template>

<style scoped>
main {
  margin-top: 21px;
}
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
  margin-top: 14px;
}
.text_title {
  color: black;
  text-decoration: none;
}
.text_title:hover {
  color: rgb(168, 12, 77);
}
</style>
