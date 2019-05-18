<template>
  <div>
    <b-button @click="$bvModal.show(modalId)">수정하기</b-button>
    <b-modal :id="modalId" title="수정하기" hide-footer>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group id="form-group-1" label="트리 선택" label-for="form-input-1">
          <b-form-select id="form-input-1" :value="treeName">
            <option disabled selected>{{ treeName }}</option>
          </b-form-select>
        </b-form-group>
        <b-form-group id="form-group-2" label="제목" label-for="form-input-2">
          <b-form-input id="form-input-2" v-model="form.postTitle" required></b-form-input>
        </b-form-group>
        <b-form-group id="form-group-3" label="내용" label-for="form-input-3">
          <b-form-textarea id="form-input-3" v-model="form.postContent" required></b-form-textarea>
        </b-form-group>
        <div class="form-buttons">
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="warning">Reset</b-button>
          <b-button @click="onDelete">Delete</b-button>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["post"],
  data() {
    return {
      form: {
        postId: this.post.postId,
        postTitle: this.post.postTitle,
        postContent: this.post.postContent
      }
    };
  },
  created() {
    this.form = {
      ...this.post
    };
  },
  computed: {
    trees() {
      return this.$store.state.myTrees.map(t => {
        return {
          value: t.treeId,
          text: t.treeName
        };
      });
    },
    treeName() {
      const myTrees = this.$store.state.myTrees;

      for (let i in myTrees) {
        if (this.post.treeId === myTrees[i].treeId) {
          return myTrees[i].treeName;
        }
      }

      return undefined;
    },
    modalId() {
      return "modal-post-update-" + this.post.postId;
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      console.log(this.form);

      try {
        const { data } = await axios.put("http://localhost:8080/post", {
          ...this.form
        });
        this.form = {
          postId: this.post.postId,
          postTitle: "",
          postContent: ""
        };
        alert("Update successful");
        this.$bvModal.hide(this.modalId);
      } catch (e) {
        console.error(e);
      }
    },
    onReset(e) {
      e.preventDefault();
      this.form = {
        postId: this.post.postId,
        postTitle: "",
        postContent: ""
      };
    },
    async onDelete() {
      try {
        const { data } = await axios.delete(`http://localhost:8080/post/${this.post.postId}`);
        alert("Delete successful");
        this.$bvModal.hide(this.modalId);
        this.$store.dispatch('getTreePosts', this.post.treeId);
      } catch (e) {
        alert("Delete fail");
        console.error(e);
      }
    }
  }
};
</script>

<style scoped>
.form-buttons {
  text-align: right;
}
</style>


