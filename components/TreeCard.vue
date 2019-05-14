<template>
  <b-card class="tree" :title="treeName">
    {{ treeGreeting }}
    <b-button @click="goTree">Go to the tree</b-button>
  </b-card>
</template>

<script>
export default {
  props: ['treeId', 'treeName', 'treeGreeting'],
  data() {
    return {};
  },
  methods: {
    goTree() {
      this.$router.push({ path: `/mytrees/${this.treeId}` })
    }
  }
};
</script>

<style scoped>
.tree {
  width: 30vw;
  height: 20vh;
}
</style>