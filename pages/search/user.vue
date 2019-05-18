<template>
  <div class="container">
    <ul>
      <li v-for="result in users" :key="result.userId">
        <UserCard :username="result.username"/>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import UserCard from '~/components/search/UserResult';

export default {
  name: 'search',
  components: {
    UserCard
  },
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
        this.users = data.data;
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>

<style scoped>
</style>