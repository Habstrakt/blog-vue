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
        `https://63b30db9ea89e3e3db3cb777.mockapi.io/posts/${this.id}`
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
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <section>
          <article v-if="post.body">
            <h3>
              <router-link class="text_title" to="/">
                {{ post.title }}
              </router-link>
            </h3>
            <div v-html="post.body" class="text"></div>
          </article>
          <div v-else>
            <Spinner />
          </div>
        </section>
      </div>
    </div>
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
