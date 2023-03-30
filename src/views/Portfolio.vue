<script>
export default {
  data() {
    return {
      portfolios: [
        {
          name: "Список задач",
          url: { name: "todo" },
          text: "Простой список задач. Имеется функционал добавления, удаления и редактирования задач.",
          instruments: ["vue3", "bootstrap"],
        },
      ],
    };
  },
};
</script>
<template>
  <div class="col-lg-9 card-group">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" v-for="work in portfolios" :key="work">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ work.name }}</h5>
            <p class="card-text">
              {{ work.text }}
            </p>
            <span>Использовал: </span>
            <span
              :class="{ 'pe-1': index < work.instruments.length - 1 }"
              :key="index"
              v-for="(item, index) in work.instruments"
            >
              {{ item }}
            </span>
            <br />
            <router-link :to="work.url">Перейти</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-group {
  padding: 50px;
  background-color: white;
  margin-top: 21px;
}
</style>
