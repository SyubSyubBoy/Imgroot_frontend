import Vuex from 'vuex';
import axios from 'axios';

const store = () => new Vuex.Store({
  state: {
    user: { },
    posts: [],
    profilePictrue: '~assets/public/user.png'
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setPost(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    async getCurrentUser({ commit }) {
      try {
        const { data } = await axios.get('http://localhost:8080/user/1');
        commit('setUser', data.data);
      } catch (e) {
        console.error(e);
      }
    },
    async getPosts({ commit }) {
      try {
        const { data } = await axios.get('http://localhost:8080/post/feed/1');
        commit('setPost', data.data);
      } catch (e) {
        console.error(e);
      }
    }
  }
});

export default store;