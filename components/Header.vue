<template>
  <div class="header">
    <h1>Imgroot</h1>
    <div class="search-tab">
      <b-form-input class="input-search" v-model=search placeholder="Search text.."></b-form-input>
      <b-button class="btn-search" variant="primary" @click="onSearch">Search</b-button>
    </div>
    <div class="user-tab">
      <img class="img-container" :src=src>
      <p id="username">{{ $store.state.user.email }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      search: ''
    };
  },
  methods: {
    onSearch() {
      this.$router.push('search');
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
  height: 3vh;
  width: 3vh;
  border-radius: 50%;
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
