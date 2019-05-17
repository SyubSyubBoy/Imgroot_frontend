<template>
  <div>
    <b-button v-b-modal.modal-tree>새 트리</b-button>
    <b-modal id="modal-tree" title="새 트리 만들기" hide-footer>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group id="form-group-2" label="제목" label-for="form-input-2">
          <b-form-input id="form-input-2" v-model="form.treeName" required></b-form-input>
        </b-form-group>
        <b-form-group id="form-group-3" label="내용" label-for="form-input-3">
          <b-form-textarea id="form-input-3" v-model="form.treeGreeting" required></b-form-textarea>
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
        treeName: "",
        treeGreeting: ""
      }
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      console.log(this.form);

      try {
        const { data } = await axios.post("http://localhost:8080/tree", {
          ...this.form,
          userId: 1
        });
        this.form = {
          treeName: "",
          treeGreeting: ""
        };
        alert("Upload successful");
        this.$bvModal.hide("modal-tree");
      } catch (e) {
        console.error(e);
      }
    },
    onReset(e) {
      e.preventDefault();
      this.form = {
        treeName: "",
        treeGreeting: ""
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


