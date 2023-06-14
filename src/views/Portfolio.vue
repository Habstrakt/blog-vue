<script>
export default {
  data() {
    return {
      portfolios: [
        {
          title: "Счетчик",
          url: { name: "counter" },
          text: "Обычный счетчик (counter).",
          instruments: ["vue3"],
        },
        {
          title: "Список задач",
          url: { name: "todo" },
          text: "Список задач, в котором пользователь может добавлять, удалять и редактировать записи",
          instruments: ["vue3"],
        },
        {
          title: "Веб-приложение для погоды",
          url: { name: "weather" },
          text: "Приложение, которое показывает текущую погоду в различных городах",
          instruments: ["vue3", "API"],
        },
        {
          title: "Сайт доставки пиццы",
          url: { name: "pizzas" },
          text: "Сайт пиццерии. Страница продуктов, а так же корзина",
          instruments: ["vue3", "pinia"],
        },
      ],
    };
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="card-group">
          <div class="row justify-content-evenly">
            <div
              class="card col-md-5 mb-4"
              v-for="work in portfolios"
              :key="work"
            >
              <div class="card-body">
                <h5 class="card-title">{{ work.title }}</h5>
                <p class="card-text">
                  {{ work.text }}
                </p>
                <span class="card-text">Использовал: </span>
                <span
                  :class="{ 'pe-1': index < work.instruments.length - 1 }"
                  v-for="(item, index) in work.instruments"
                  :key="index"
                >
                  {{ item }}
                </span>
              </div>
              <div class="card-footer">
                <router-link :to="work.url" class="btn btn-primary">
                  <small class="text-body-secondary">Перейти</small>
                </router-link>
              </div>
            </div>
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
.card-text {
  max-height: fit-content;
}
.card-footer {
  padding: 8px;
}
</style>
