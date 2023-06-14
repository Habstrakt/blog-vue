<script>
import axios from "axios";
import Spinner from "@/components/Spinner.vue";
import Aside from "@/components/Aside.vue";

export default {
  data() {
    return {
      posts: [],
      currentPage: 1,
      postsPerPage: 10,
      showScrollBtn: false,
    };
  },
  components: {
    Spinner,
    Aside,
  },
  methods: {
    async getPosts() {
      try {
        const response = await axios.get(
          "https://63b30db9ea89e3e3db3cb777.mockapi.io/posts"
        );
        this.posts = response.data.reverse();
        this.posts.sort((a, b) => b.id - a.id);
      } catch (error) {
        console.error(error);
      }
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.getPosts();
        this.updateURL();
      }
    },
    updateURL() {
      const query = {
        page: this.currentPage,
        limit: this.postsPerPage,
      };
      this.$router.push({ query });
    },
  },
  mounted() {
    const { page, limit } = this.$route.query;
    this.currentPage = page ? parseInt(page) : 1;
    this.postsPerPage = limit ? parseInt(limit) : 10;

    this.getPosts();
  },
  computed: {
    totalPages() {
      return Math.ceil(this.posts.length / this.postsPerPage);
    },
    displayedPosts() {
      const startIndex = (this.currentPage - 1) * this.postsPerPage;
      const endIndex = startIndex + this.postsPerPage;
      return this.posts.slice(startIndex, endIndex);
    },
    pageNumbers() {
      const numbers = [];
      for (let i = 1; i <= this.totalPages; i++) {
        numbers.push(i);
      }
      return numbers;
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <Aside />
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
                    {{ post.title }}
                  </router-link>
                </h3>
                <div v-html="post.body" class="text"></div>
              </article>
            </template>
            <template v-else>
              <Spinner />
            </template>
          </section>
        </main>
        <div class="pagination justify-content-end">
          <button
            v-for="pageNumber in pageNumbers"
            :key="pageNumber"
            class="btn btn-primary"
            :class="{ active: pageNumber === currentPage }"
            @click="goToPage(pageNumber)"
          >
            {{ pageNumber }}
          </button>
        </div>
      </div>
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
.btn-secondary {
  position: fixed;
  bottom: 100px;
  right: 60px;
}
</style>
