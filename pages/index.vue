<template>
  <div>
    <div class="container">
      <ul class="post-list">
        <li v-for="post in posts">
          <b-card class="post" :title=post.postTitle>
            {{ post.postContent }}
          </b-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
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

.post {
  width: 50vw;
  height: 30vh;
}

.post-list li {
  margin-top: 2vh;
}
</style>
