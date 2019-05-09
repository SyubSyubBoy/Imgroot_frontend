<template>
  <div>
    <div class="container">
      <ul class="post-list">
        <li v-for="post in posts" :key="post.postId">
          <PostCard :title="post.postTitle" :content="post.postContent"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PostCard from '~/components/PostCard';

export default {
  components: {
    PostCard
  },
  data() {
    return {};
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  }
};
</script>

<style scoped>
.post-list {
  list-style-type: none;
}

.post-list li {
  margin-top: 2vh;
}
</style>
