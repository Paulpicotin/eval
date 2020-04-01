<template>
  <div>
    <h2>List of TODOList</h2>
    <table>
      <thead>
        <tr>
          <th>FullName</th>          
          <th>Tasks</th>
          <th colspan="3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="TODOList in ListTodo" v-bind:key="TODOList.id">
          <td>{{ TODOName.fullName }}</td>          
          <td>{{ TodoTask.tasks }}</td>
          <td class="editLabel" v-on:click="editList(TODOList)">EDIT</td>
          <td class="deleteLabel" v-on:click="deleteList(TODOList.id)">DELETE</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TODOTable",
  data() {
    return {};
  },
  props: {
    ListTODO: Array
  },
  created() {},
  methods: {
    deleteList(TODOListId) {
      this.$emit("deleteList", TODOListId);
    },
    editList(TODOList) {
      this.$emit("editList", { ...TODOList });
    }
  }
};
</script>


<style scoped>
.deleteLabel {
  text-decoration: underline;
  font-style: italic;
  color: greenyellow;
  cursor: pointer;
}
.editLabel {
  text-decoration: underline;
  font-style: italic;
  color: purple;
  cursor: pointer;
}
</style>