<template>
  <b-card class="post" :title="title">
    {{ content }}
    <b-button v-if="isMyTree">수정</b-button>
  </b-card>
</template>

<script>
export default {
  props: ['postId', 'title', 'content'],
  data() {
    return {};
  },
  computed: {
    isMyTree() {
      
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