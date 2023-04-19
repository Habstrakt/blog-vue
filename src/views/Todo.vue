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
      if (!this.todoText) {
        alert("Ошибка! Поле пустое. Добавьте Todo!");
      } else {
        this.todos.push(this.todoText);
        this.todoText = "";
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    showEditTodo(todo, index) {
      this.temporaryTodo = todo;
      this.editingTodo = true;
      this.editingIndex = index;
    },
    saveTodo() {
      if (!this.temporaryTodo) {
        alert("Ошибка! Поле пустое. Добавьте текст или удалите его");
      } else {
        this.todos[this.editingIndex] = this.temporaryTodo;
        this.temporaryTodo = "";
        this.editingIndex = null;
        this.editingTodo = false;
      }
    },
    cancelEditTodo() {
      this.editingTodo = false;
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 todo-wrapper">
        <h2 class="title">Todo List</h2>
        <div v-if="!editingTodo" class="input-block input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Add task...."
            v-model.trim="todoText"
          />
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="addNewTodo"
          >
            Add Todo
          </button>
        </div>
        <div v-if="!editingTodo">
          <ul>
            <li v-for="(todo, index) in todos" :key="index">
              {{ todo }}
              <button
                class="btn btn-outline-secondary"
                @click="showEditTodo(todo, index)"
              >
                Edit
              </button>
              <button
                class="btn btn-danger link-light ms-1"
                @click="deleteTodo(index)"
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
        <div class="input-group mb-3" v-else>
          <input
            class="form-control"
            type="text"
            placeholder="Edit todo..."
            v-model.trim="temporaryTodo"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="saveTodo"
          >
            Save
          </button>
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="cancelEditTodo"
          >
            Cancel
          </button>
        </div>
      </div>
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
