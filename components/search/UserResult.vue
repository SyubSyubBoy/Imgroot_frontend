<template>
  <b-card class="user" :title="username">
  </b-card>
</template>

<script>
export default {
  props: ['username'],
  data() {
    return {};
  }
};
</script>

<style scoped>
.user {
  width: 50vw;
  height: 30vh;
}
</style>