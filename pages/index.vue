<template>
  <div>
    <Header/>
    <div class="container">
      <ul class="post-list">
        <b-card class="post"></b-card>
        <b-card class="post"></b-card>
        <b-card class="post"></b-card>
        <b-card class="post"></b-card>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";

export default {
  components: {
    Header
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
}

.post {
  width: 50vw;
  height: 30vh;
}
</style>
