<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('getCurrentUser');
    this.$store.dispatch('getPosts');
  }
}
</script>


<style>
  * {
    margin: 0;
    box-sizing: border-box;
  }
</style>