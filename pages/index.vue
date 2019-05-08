<template>
  <div>
    <Header/>
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
import Header from "~/components/Header";

export default {
  components: {
    Header
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

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

.post-list li:first-child {
  margin-top: 15vh;
}
</style>
