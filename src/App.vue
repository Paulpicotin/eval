<template>
  <div id="app">
    <h1>TODO LIST</h1>
    <FormTODO v-on:addList="addList" :editMode="false" />
    <TODOTable
      :ListTODO="ListTODO"
      v-on:editList="infosTODOListToEdit"
      v-on:deleteList="deleteList"
    />
    <FormTODO
      v-on:editList="editList"
      :ListtoEdit="ListtoEdit"
      :editMode="true"
    />
  </div>
</template>

<script>
import FormTODO from "./components/FormTODO.vue";
import TODOTable from "./components/TODOTable.vue";
import {
  getList,
  addList,
  editList,
  //deleteList
} from "./services/TODOLIST.js";

export default {
  name: "App",
  components: {
    FormTODO,
    TODOTable
  },
  data() {
    return {
      ListTODO: [],
      ListtoEdit: null
    };
  },
  async created() {
    const ListTODO = await getList();
    this.ListTODO = [...ListTODO];
  },
  methods: {
    randomKey() {
      return Math.random();
    },
    addList({ fullName,  tasks }) {
      addList({ fullName, tasks })
        .then(resp => resp.json())
        .then(todoList => {
          this.ListTODO = [...this.ListTODO, todoList];
        })
        .catch(err => {
          console.log(err);
        });
    },
    infosTODOListToEdit(ListTODO) {
      this.TODOLISTToEdit = { ...ListTODO };
    },
    editList({ id, fullName,  tasks }) {
      editList(id, { fullName, tasks }).then(() => {
        this.TODOLIST = this.TODOLIST.map(todoList => {
          if (todoList.id === id) {
            return {
              id,
              fullName,              
              tasks
            };
          }
          return todoList;
        });
      });
    },
    /*deleteList(id) {
      deleteList(id).then(() => {
        const indexOfListoDelete = this.TODOLIST.findIndex(
          todoList => todoList.id === id
        );
        this.TODOLIST.splice(indexOfListToDelete, 1);
      });
    }
  }*/
}
};

</script>

<style>
#app {
  width: 80%;
  margin: auto;
}
</style>
