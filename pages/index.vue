<template>
  <div>
    <div class="container">
      <div class="left-aside">
        <b-button v-b-modal.modal-post>새 글 추가</b-button>
        <b-modal id="modal-post" title="새 글 쓰기" hide-footer>
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group id="form-group-1" label="트리 선택" label-for="form-input-1">
              <b-form-select id="form-input-1" v-model="form.tree" :options="trees" required></b-form-select>
            </b-form-group>
            <b-form-group id="form-group-2" label="제목" label-for="form-input-2">
              <b-form-input id="form-input-2" v-model="form.title" required></b-form-input>
            </b-form-group>
            <b-form-group id="form-group-3" label="내용" label-for="form-input-3">
              <b-form-textarea id="form-input-3" v-model="form.content" required></b-form-textarea>
            </b-form-group>
            <div class="form-buttons">
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </div>
          </b-form>
        </b-modal>
      </div>
      <ul class="post-list">
        <li v-for="post in posts" :key="post.postId">
          <PostCard :title="post.postTitle" :content="post.postContent"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PostCard from "~/components/PostCard";

export default {
  components: {
    PostCard
  },
  created() {
    this.$store.dispatch("getFeed");
  },
  data() {
    return {
      form: {
        tree: '',
        title: '',
        content: '',
      }
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    trees() {
      return this.$store.state.myTrees.map(t => {
        return {
          value: t.treeId,
          text: t.treeName
        }
      });
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
    },
    onReset(e) {
      e.preventDefault();
      this.form = {
        tree: '',
        title: '',
        content: ''
      }
    }
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}

.post-list {
  list-style-type: none;
  margin-right: 10vw;
}

.post-list li {
  margin-top: 2vh;
}

.left-aside {
  width: 10vw;
  margin-top: 2vh;
  position: sticky;
  z-index: 1;
  text-align: left;
}

.form-buttons {
  text-align: right;
}
</style>
