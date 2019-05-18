<template>
  <b-button @click="login">Facebook Login</b-button>
</template>

<script>
export default {
  data() {
    return {
      app_id: '619281488557270',
      redirect_uri: 'http://localhost:3000/oauth/login/facebook'
    };
  },
  methods: {
    login() {
      window.location.href = `https://www.facebook.com/v3.3/dialog/oauth`
                          + `?client_id=${this.app_id}`
                          + `&redirect_uri=${this.redirect_uri}`;
    }
  }
};
</script>

<style scoped>
</style>


