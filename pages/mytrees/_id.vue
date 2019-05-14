<template>
  <div>
    <h1>{{ tree.treeName }}</h1>
    <h3>{{ tree.treeGreeting }}</h3>
    <div class="container">
      <ul class="post-list">
        <li class="post-list-li" v-for="post in posts" :key="post.postId">
          <PostCard :postId="post.postId" :title="post.postTitle" :content="post.postContent"/>
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
  data() {
    return {
      posts: []
    }
  },
  async created() {
    try {
        const { data } = await axios.get("http://localhost:8080/tree/1/post");
        this.posts = data.data;
        console.log(data);
      } catch (e) {
        console.error(e);
      }
  },
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  computed: {
    treeId() {
      return this.$route.params.id;
    },
    tree() {
      return this.$store.getters.getTreeById(this.treeId);
    }
  },
  methods: {
    async getPosts() {
      
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
