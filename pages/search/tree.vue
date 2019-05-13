<template>
  <div class="container">
    <ul>
      <li v-for="result in trees" :key="result.treeId">
        <TreeCard :treeName="result.treeName" :treeGreeting="result.treeGreeting" :treeId="result.treeId"/>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import TreeCard from '~/components/TreeCard';

export default {
  name: 'search',
  components: {
    TreeCard
  },
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