<template>
  <div>
    <h1>{{ tree.treeName }}</h1>
    <h3>{{ tree.treeGreeting }}</h3>
    <div class="container">
      <ul class="post-list">
        <li class="post-list-li" v-for="post in posts" :key="post.postId">
          <PostCard :post="post"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PostCard from "~/components/PostCard";

export default {
  components: {
    PostCard
  },
  async created() {
    this.$store.dispatch('getTreePosts', this.treeId);
  },
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  computed: {
    treeId() {
      return this.$route.params.id;
    },
    tree() {
      return this.$store.getters.getTreeById(this.$route.params.id);
    },
    posts() {
      return this.$store.state.treePosts;
    }
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}

.post-list {
  list-style-type: none;
  margin-right: 10vw;
}

.post-list li {
  margin-top: 2vh;
}
</style>
