<template>
  <div>
    <Header/>
    <nuxt class="nuxt"/>
  </div>
</template>

<script>
import Header from "~/components/Header";

export default {
  components: {
    Header
  },
  created() {
    this.$store.dispatch("getCurrentUser");
    this.$store.dispatch("getMyTrees");
    this.$store.dispatch("getFollowingTrees");
  }
};
</script>


<style>
* {
  margin: 0;
  box-sizing: border-box;
}

.nuxt {
  margin-top: 2vh;
}
</style>