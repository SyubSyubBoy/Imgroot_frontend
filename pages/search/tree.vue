<template>
  <div class="container">
    <ul>
      <li v-for="result in trees" :key="result.treeId">
        <div>{{ result.treeName }}</div>
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
      trees: []
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
          `http://localhost:8080/search/tree?q=${q}`
        );
        this.trees = data.data;
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>

<style scoped>
</style>