<template>
  <div class="container">
    <h1>Search Result: </h1>
  </div>
</template>

<script>
export default {
  name: "search",
  created() {
    console.log('Param: ', this.$route.params);
  }
};
</script>

<style scoped>
</style>
