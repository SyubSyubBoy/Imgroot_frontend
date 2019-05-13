import Vuex from 'vuex';
import axios from 'axios';

const store = () => new Vuex.Store({
  state: {
    user: {},
    posts: [],
    myTrees: [],
    followingTrees: [],
  },
  getters: {
    isFollowed: (state) => (treeId) => {
      const found = state.followingTrees.find(t => t.treeId === treeId);

      if (found)
        return true;
      else
        return false;
    },
    isMyTree: (state) => (treeId) => {
      const found = state.myTrees.find(t => t.treeId === treeId);

      if (found)
        return true;
      else
        return false;
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setPost(state, posts) {
      state.posts = posts;
    },
    setMyTrees(state, myTrees) {
      state.myTrees = myTrees;
    },
    setFollowingTrees(state, followingTrees) {
      state.followingTrees = followingTrees;
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
    async getFeed({ commit }) {
      try {
        const { data } = await axios.get('http://localhost:8080/post/feed/1');
        commit('setPost', data.data);
      } catch (e) {
        console.error(e);
      }
    },
    async getMyTrees({ commit }) {
      try {
        const { data } = await axios.get('http://localhost:8080/user/1/tree');
        commit('setMyTrees', data.data);
      } catch (e) {
        console.error(e);
      }
    }, 
    async getFollowingTrees({ commit }) {
      try {
        const { data } = await axios.get('http://localhost:8080/user/1/follow/tree');
        commit('setFollowingTrees', data.data);
      } catch (e) {
        console.error(e);
      }
    }
  }
});

export default store;