<script>
export default {
  data() {
    return {
      todoText: "",
      todos: ["asd"],
      temporaryTodo: "",
      editingTodo: false,
      editingIndex: null,
    };
  },
  methods: {
    addNewTodo() {
      this.todos.push(this.todoText);
      this.todoText = "";
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    showEditTodo(index) {
      this.editingTodo = true;
      this.editingIndex = index;
    },
    saveTodo() {
      this.todos[this.editingIndex] = this.temporaryTodo;
      this.temporaryTodo = "";
      this.editingIndex = null;
      this.editingTodo = false;
    },
    cancelEditTodo() {
      this.editingTodo = false;
    },
  },
};
</script>

<template>
  <div class="col-lg-9 todo-wrapper">
    <h2 class="title">Todo List</h2>
    <div class="input-block">
      <input type="text" placeholder="Add task...." v-model.trim="todoText" />
      <button @click="addNewTodo">+</button>
    </div>
    <div v-if="!editingTodo">
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo }}
          <button @click="showEditTodo(index)">Edit</button>
          <button @click="deleteTodo(index)">Delete</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <input type="text" v-model.trim="temporaryTodo" />
      <button @click="saveTodo">Save</button>
      <button @click="cancelEditTodo">Cancel</button>
    </div>
  </div>
</template>

<style scoped>
.todo-wrapper {
  padding: 50px;
  background-color: white;
  margin-top: 21px;
}
.input-block {
  text-align: center;
}
.title {
  text-align: center;
  background-color: #68c3a3;
  border-radius: 5px;
}
</style>
