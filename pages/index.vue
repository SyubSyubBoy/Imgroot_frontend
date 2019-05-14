<template>
  <div>
    <div class="container">
      <div class="left-aside">
        <PostForm/>
        <div>
          <router-link to="/mytrees">
            <b-button>내 트리 보기</b-button>
          </router-link>
        </div>
      </div>
      <ul class="post-list">
        <li v-for="post in posts" :key="post.postId">
          <PostCard :post="post"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PostCard from "~/components/PostCard";
import PostForm from "~/components/PostForm";

export default {
  components: {
    PostCard,
    PostForm
  },
  mounted() {
    this.$store.dispatch("getFeed");
  },
  computed: {
    posts() {
      return this.$store.state.feed;
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

.left-aside {
  width: 10vw;
  margin-top: 2vh;
  position: sticky;
  z-index: 1;
  text-align: left;
}

.left-aside > * {
  margin-bottom: 0.5em;
}
</style>
