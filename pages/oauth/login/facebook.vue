<template>
  <div>
    Login is processing...
  </div>
</template>

<script>
import axios from 'axios';

export default {
  async mounted() {
    try {
      const result = await axios.post('http://localhost:8080/oauth/login/facebook', {
      code: this.code
    });

    console.log('result', result);
    } catch (e) {
      console.error(e);
    }
    
  },
  computed: {
    code() {
      return this.$route.query.code;
    }
  }
}
</script>

<style scoped>

</style>