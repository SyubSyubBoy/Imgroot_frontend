<template>
  <b-card class="post" :title="title">
    {{ content }}
  </b-card>
</template>

<script>
export default {
  props: ['title', 'content'],
  data() {
    return {};
  }
};
</script>

<style scoped>
.post {
  width: 50vw;
  height: 30vh;
}
</style>


