<template>
  <div class="container">
    <h1>Search Result:</h1>
    <ul>
      <li v-for="result in user" :key="result.userId">
        <div>{{ result.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "search",
  data() {
    return {
      users: []
    };
  },
  async created() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const { q } = this.$route.query;

      try {
        const { data } = await axios.get(
          `http://localhost:8080/search/user?q=${q}`
        );
        this.posts = data.data;
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>

<style scoped>
</style>