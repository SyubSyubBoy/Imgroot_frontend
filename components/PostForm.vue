<template>
  <div>
    <b-button v-b-modal.modal-post>새 글 추가</b-button>
    <b-modal id="modal-post" title="새 글 쓰기" hide-footer>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group id="form-group-1" label="트리 선택" label-for="form-input-1">
          <b-form-select id="form-input-1" v-model="form.treeId" :options="trees" required></b-form-select>
        </b-form-group>
        <b-form-group id="form-group-2" label="제목" label-for="form-input-2">
          <b-form-input id="form-input-2" v-model="form.postTitle" required></b-form-input>
        </b-form-group>
        <b-form-group id="form-group-3" label="내용" label-for="form-input-3">
          <b-form-textarea id="form-input-3" v-model="form.postContent" required></b-form-textarea>
        </b-form-group>
        <div class="form-buttons">
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        treeId: "",
        postTitle: "",
        postContent: ""
      }
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
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      console.log(this.form);

      try {
        const { data } = await axios.post("http://localhost:8080/post", {
          ...this.form
        });
        this.form = {
          treeId: "",
          postTitle: "",
          postContent: ""
        };
        alert("Upload successful");
        this.$bvModal.hide("modal-post");
      } catch (e) {
        console.error(e);
      }
    },
    onReset(e) {
      e.preventDefault();
      this.form = {
        treeId: "",
        postTitle: "",
        postContent: ""
      };
    }
  }
};
</script>

<style scoped>
.form-buttons {
  text-align: right;
}
</style>


