<script>
import axios from "axios";
export default {
  data() {
    return {
      counter: 0,
      templateData: null,
    };
  },
  methods: {
    plus() {
      this.counter++;
    },
    minus() {
      this.counter--;
    },
  },
};
</script>

<template>
  <div class="col-lg-12">
    <div class="counter-wrapper">
      <div class="counter">
        {{ counter }}
      </div>
      <div class="buttons">
        <button type="button" @click="plus" class="btn btn-success">+</button>
        <br />
        <button
          v-if="counter > 0"
          type="button"
          @click="minus"
          class="btn btn-danger"
        >
          -
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.counter-wrapper {
  padding: 50px;
  background-color: white;
  margin-top: 21px;
}
.counter {
  text-align: center;
  font-size: 80px;
}
.buttons {
  text-align: center;
}
.btn {
  width: 100px;
}
</style>
