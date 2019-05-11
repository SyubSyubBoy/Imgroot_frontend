<template>
  <div class="header">
    <router-link to="/" class="logo">
      <h1>Imgroot</h1>
    </router-link>
    <div class="search-tab">
      <b-form-input class="input-search" v-model="query" placeholder="Search text.."></b-form-input>
      <b-button class="btn-search" variant="primary" @click="onSearch">Search</b-button>
    </div>
    <div class="user-tab">
      <img class="img-container" src="user.png">
      <p id="username">{{ $store.state.user.email }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      query: ""
    };
  },
  computed: {
    src() {
      return this.$store.state.profilePicture;
    }
  },
  methods: {
    onSearch() {
      this.$router.push({ path: '/search', query: { q: this.query } });
    }
  }
};
</script>

<style scoped>
.header {
  height: 10vh;
  width: 100vw;
  box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  background-color: white;
  padding-left: 5vw;
  padding-right: 5vw;
  margin: 0;
  position: sticky;
  top: 0;
}

.logo {
  color: #000;
  text-decoration: none;
}

.logo :hover {
  color: #000;
}

.user-tab {
  width: 10vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.search-tab {
  width: 40vw;
  display: flex;
  justify-content: space-around;
}

.img-container {
  height: 5vh;
  width: 5vh;
  border-radius: 50%;
  margin-right: 1vw;
}

.input-search {
  margin-left: 1vw;
}

.btn-search {
  margin-left: 1vw;
}

#username {
  display: flex;
  text-align: center;
  align-items: center;
  margin: 0;
}
</style>
