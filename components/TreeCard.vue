<template>
  <b-card class="tree" :title="treeName">
    <h3>{{ treeGreeting }}</h3>
    <p>{{ totalFollowers }}</p>
    <div v-if="isNotMyTree">
      <b-button v-if="isFollowed" @click="unfollow">Unfollow</b-button>
      <b-button v-else @click="follow">Follow</b-button>
    </div>
  </b-card>
</template>

<script>
import axios from "axios";

export default {
  props: ["treeId", "treeName", "treeGreeting", "totalFollowers"],
  data() {
    return {};
  },
  computed: {
    isFollowed() {
      return this.$store.getters.isFollowed(this.treeId);
    },
    isNotMyTree() {
      return !this.$store.getters.isMyTree(this.treeId);
    }
  },
  methods: {
    async follow() {
      try {
        const { data } = await axios.post(
          `http://localhost:8080/user/1/follow/${this.treeId}`,
          {}
        );
        const { code } = data;

        console.log("Success");
        this.$store.dispatch("getFollowingTrees");
      } catch (e) {
        console.log(e);
      }
    },
    async unfollow() {
      try {
        const { data } = await axios.post(
          `http://localhost:8080/user/1/unfollow/${this.treeId}`,
          {}
        );
        const { code } = data;

        console.log("Success");
        this.$store.dispatch("getFollowingTrees");
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style scoped>
.tree {
  width: 50vw;
  height: 30vh;
}
</style>