<script>
import axios from "axios";
import Spinner from "../components/Spinner.vue";

export default {
  props: ["id"],
  data() {
    return {
      post: {},
    };
  },
  components: { Spinner },
  async created() {
    try {
      const response = await axios.get(
        `http://blog.test/wp-json/wp/v2/posts/${this.id}`
      );
      this.post = response.data;
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<template>
  <div class="col-lg-12">
    <section>
      <article v-if="!!post.content">
        <h3>
          <router-link class="text_title" to="/">
            {{ post.title.rendered }}
          </router-link>
        </h3>
        <div v-html="post.content.rendered" class="text"></div>
        <p class="date">{{ post.formatted_date }}</p>
      </article>
      <div v-else>
        <Spinner />
      </div>
    </section>
  </div>
</template>

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
  margin: 21px 0 14px;
}
.text_title {
  color: black;
  text-decoration: none;
}
.text_title:hover {
  color: rgb(168, 12, 77);
}
ul {
  list-style-type: none;
}
</style>
