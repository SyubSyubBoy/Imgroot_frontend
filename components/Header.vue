<template>
  <header class="header">
    <h1>Imgroot</h1>
    <div class="user-tab">
      <img class="img-container" :src="src">
      <p id="username">{{ username }}</p>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      src: '',
      username: '12345',
    };
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
  position: fixed;
  z-index: 1;
  background-color: white;
  padding-left: 5vw;
  padding-right: 5vw;
  margin: 0;
}

.user-tab {
  width: 10vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.img-container {
  height: 3vh;
  width: 3vh;
  border-radius: 50%;
}

#username {
  display: flex;
  text-align: center;
  align-items: center;
  margin: 0;
}
</style>
