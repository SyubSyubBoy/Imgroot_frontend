<template>
  <b-card class="tree" :title="tree.treeName">
    {{ tree.treeGreeting }}
    <b-button @click="goTree">Go to the tree</b-button>
    <TreeFormUpdate :tree="tree" v-if="isMyTree"/>
  </b-card>
</template>

<script>
import TreeFormUpdate from '~/components/TreeFormUpdate';

export default {
  components: {
    TreeFormUpdate
  },
  props: ['tree'],
  data() {
    return {};
  },
  computed: {
    isMyTree() {
      return this.$store.getters.isMyTree(this.tree.treeId);
    }
  },
  methods: {
    goTree() {
      this.$router.push({ path: `/mytrees/${this.tree.treeId}` });
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