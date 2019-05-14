<template>
  <b-card class="post" :title="post.postTitle">
    <div>{{ post.postContent }}</div>
    <PostFormUpdate :post="post" v-if="isMyTree"/>
  </b-card>
</template>

<script>
import PostFormUpdate from '~/components/PostFormUpdate';

export default {
  components: {
    PostFormUpdate
  },
  props: ["post"],
  data() {
    return {};
  },
  computed: {
    isMyTree() {
      return this.$store.getters.isMyTree(this.post.treeId);
    }
  }
};
</script>

<style scoped>
.post {
  width: 50vw;
  height: 30vh;
}
</style>