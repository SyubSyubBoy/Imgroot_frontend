<template>
  <div class="body">
    <h1>Search Result: {{ $route.query.q }}</h1>
    <b-card class="container" no-body>
      <b-tabs card v-model="tabIndex">
        <b-tab title="Post" active>
          <nuxt-child/>
        </b-tab>
        <b-tab title="Tree">
          <nuxt-child/>
        </b-tab>
        <b-tab title="User">
          <nuxt-child/>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0
    };
  },
  mounted() {
    this.$router.push({ path: '/search/post', query: this.$route.query });
  },
  watch: {
    tabIndex(newVal, oldVal) {
      if (newVal === oldVal) {
        return;
      }

      switch (newVal) {
        case 0:
          this.$router.push({ path: "/search/post", query: this.$route.query });
          break;
        case 1:
          this.$router.push({ path: "/search/tree", query: this.$route.query });
          break;
        case 2:
          this.$router.push({ path: "/search/user", query: this.$route.query });
          break;
      }
    },
    $route(to, from) {
      console.log(to);
      if (to.path === '/search') {
        this.tabIndex = 0;
        this.$router.push({ path: '/search/post', query: to.query });
      }
    }
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

.body {
  margin-top: 5px;
}

.container {
  width: 60vw;
  min-height: 100px;
  height: auto;
}
</style>