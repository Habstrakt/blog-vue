<template>
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<style scoped>
.spinner-border {
  position: absolute;
  right: 600px;
  top: 250px;
}
@media screen and (max-width: 414px) {
  .spinner-border {
    top: 600px;
    right: 200px;
  }
}
</style>
