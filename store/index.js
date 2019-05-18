import Vuex from 'vuex';
import axios from 'axios';

const store = () => new Vuex.Store({
  state: {
    user: {},
    feed: [],
    myTrees: [],
    followingTrees: [],
    treePosts: []
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
      for (let i in state.myTrees) {
        if (state.myTrees[i].treeId == treeId)
          return true;
      }
      
      return false;
    },
    getTreeById: (state) => (treeId) => {
      for(let i in state.myTrees) {
        if (state.myTrees[i].treeId == treeId)
          return state.myTrees[i];
      }
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setFeed(state, posts) {
      state.feed = posts;
    },
    setMyTrees(state, myTrees) {
      state.myTrees = myTrees;
    },
    setFollowingTrees(state, followingTrees) {
      state.followingTrees = followingTrees;
    },
    setTreePosts(state, posts) {
      state.treePosts = posts;
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
        commit('setFeed', data.data);
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
    },
    async getTreePosts({ commit }, treeId) {
      try {
        const { data } = await axios.get(`http://localhost:8080/tree/${treeId}/post`);
        commit('setTreePosts', data.data);
      } catch (e) {
        console.error(e);
      }
    }
  }
});

export default store;