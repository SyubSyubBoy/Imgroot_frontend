<template>
  <div>
    <h1>{{ tree.treeName }}</h1>
    <h3>{{ tree.treeGreeting }}</h3>
  </div>  
</template>

<script>
export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  computed: {
    treeId() {
      return this.$route.params.id;
    },
    tree() {
      return this.$store.getters.getTreeById(this.treeId);
    }
  }
};
</script>

<style scoped>

</style>
