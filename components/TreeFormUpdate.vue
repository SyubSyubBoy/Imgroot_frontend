<template>
  <div>
    <b-button @click="$bvModal.show(modalId)">수정하기</b-button>
    <b-modal :id="modalId" title="트리 수정" hide-footer>
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
          <b-button @click="onDelete">Delete</b-button>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ['tree'],
  data() {
    return {
      form: {
        treeName: this.tree.treeName,
        treeGreeting: this.tree.treeGreeting
      }
    };
  },
  computed: {
    modalId() {
      return 'modal-tree-update-' + this.tree.treeId;
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      console.log(this.form);

      try {
        const { data } = await axios.put("http://localhost:8080/tree", {
          ...this.form,
          treeId: this.tree.treeId
        });
        this.form = {
          treeName: "",
          treeGreeting: ""
        };
        alert("Upload successful");
        this.$bvModal.hide(this.modalId);
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
    },
    async onDelete() {
      try {
        const { data } = await axios.delete(`http://localhost:8080/tree/${this.tree.treeId}`);
        alert("Delete successful");
        this.$bvModal.hide(this.modalId);
        this.$store.dispatch('getMyTrees');
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


