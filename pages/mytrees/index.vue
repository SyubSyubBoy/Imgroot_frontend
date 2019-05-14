<template>
  <div>
    <div class="container">
      <ul class="post-list">
        <li v-for="tree in myTrees" :key="tree.treeId">
          <TreeCard  :treeId="tree.treeId" :treeName="tree.treeName" :treeGreeting="tree.treeGreeting"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TreeCard from '~/components/TreeCard';

export default {
  components: {
    TreeCard
  },
  mounted() {
    this.$store.dispatch("getMyTrees");
  },
  computed: {
    myTrees() {
      return this.$store.state.myTrees;
    },
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}

.post-list {
  list-style-type: none;
  margin-right: 10vw;
}
</style>
