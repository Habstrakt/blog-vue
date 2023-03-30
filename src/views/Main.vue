<script>
import axios from "axios";
import Spinner from "@/components/Spinner.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  data() {
    return {
      posts: [],
      currentPage: 1,
      postsPerPage: 20,
    };
  },
  components: {
    Spinner,
    Pagination,
  },
  methods: {
    async getPosts() {
      try {
        const response = await axios.get(
          "http://blog.test/wp-json/wp/v2/posts"
        );
        this.posts = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    up() {
      const scrollDuration = 300;
      const scrollStep = -window.pageYOffset / (scrollDuration / 15);
      let scrollInterval = setInterval(() => {
        if (window.pageYOffset !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    },
    nextPage() {
      this.currentPage++;
      this.up();
    },
    prevPage() {
      this.currentPage--;
      this.up();
    },
  },
  mounted() {
    this.getPosts();
  },
  computed: {
    totalPages() {
      console.log(Math.ceil(this.posts.length / this.postsPerPage));
      return Math.ceil(this.posts.length / this.postsPerPage);
    },
    displayedPosts() {
      const startIndex = (this.currentPage - 1) * this.postsPerPage;
      const endIndex = startIndex + this.postsPerPage;
      return this.posts.slice(startIndex, endIndex);
    },
  },
};
</script>

<template>
  <div class="col-lg-9">
    <main>
      <section>
        <template v-if="posts.length > 0">
          <article v-for="post in displayedPosts" :key="post.id">
            <h3>
              <router-link
                class="text_title"
                :to="{ name: 'post', params: { id: post.id } }"
              >
                {{ post.title.rendered }}
              </router-link>
            </h3>
            <div v-html="post.content.rendered" class="text"></div>
            <p class="date">{{ post.formatted_date }}</p>
          </article>
        </template>
        <template v-else>
          <Spinner />
        </template>
      </section>
    </main>
    <div class="pagination justify-content-end">
      <button
        class="btn btn-primary"
        v-if="currentPage < totalPages"
        @click="nextPage"
      >
        Next
      </button>
      <button class="btn btn-primary" v-if="currentPage > 1" @click="prevPage">
        Preview
      </button>
    </div>
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
ul {
  list-style-type: none;
}
.pagination {
  margin: 20px 0;
}
</style>
