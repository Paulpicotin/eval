<template>
  <div>
    <h2>{{editMode ? 'Edit TODOlist' : 'Add TODOlist'}}</h2>
    <label for="TODONameInput">Name of the TODOlist</label>
    <input v-model="TODOName" type="text" id="TODONameInput" />
    <label for="TODOTask">task of the TODOlist</label>
    <input v-model ="TodoTask" type ="text" id="TODOTask"/>  
    <button v-on:click="submitForm">{{editMode ? 'EDIT' : 'INVITE'}}</button>
  </div>
</template>

<script>
export default {
  name: "FormTODO",
  data() {
    return {
      TODOName: null,     
      TodoTask : null
    };
  },
  props: {
    editMode: Boolean,
    TODOlistToEdit: Object
  },
  created() {},
  updated() {
    
  },
  watch: {
    TODOlistToEdit: function(currentTODOlistToEdit) {
      this.TODOName = currentTODOlistToEdit.fullName;      
      this.TodoTask = currentTODOlistToEdit.task;
    }
  },
  methods: {
    submitForm() {
      
      this.$emit(this.editMode ? "editTODOlist" : "inviteTODOlist", {
        id: this.TODOlistToEdit ? this.TODOlistToEdit.id : undefined,
        fullName: this.TODOName,        
        task: this.TodoTask
      });
      this.TODOName = null;      
      this.TodoTask = null;
    }
  }
};
</script>

<style scoped>
label,
input {
  display: block;
  margin-bottom: 10px;
}
</style>
