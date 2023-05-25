<script>
import { usePizzaStore } from "@/store/PizzaStore.js";
import foodsData from "@/assets/foods.json";

export default {
  setup() {
    const pizzaStore = usePizzaStore();
    return { pizzaStore };
  },
  data() {
    return {
      products: {},
      menuItem: ["Все", "Пицца", "Закуски", "Напитки"],
      selectedCategory: "Все",
    };
  },
  mounted() {
    this.filterProducts("Все");
  },
  methods: {
    filterProducts(category) {
      if (category === "Все") {
        this.selectedCategory = "Все";
      } else {
        this.selectedCategory = category;
      }
      this.products = foodsData.products.reduce((acc, item) => {
        if (category === "Все" || item.category === category) {
          const selectedPrice = Array.isArray(item.price)
            ? item.price[0]
            : item.price;
          const selectedSize = Array.isArray(item.sizes)
            ? item.sizes[0]
            : item.sizes;
          return [
            ...acc,
            {
              ...item,
              selectedPrice,
              selectedSize,
              count: 0,
            },
          ];
        }
        return acc;
      }, []);
    },
  },
};
</script>

<template>
  <ul>
    <li
      @click="filterProducts(item)"
      v-for="item in menuItem"
      class="menu-item"
      :key="item"
    >
      <span>{{ item }}</span>
    </li>
  </ul>
  <section>
    <div class="row">
      <div
        v-for="item in products"
        class="product-card col-lg-3 col-md-4 col-sm-6"
        :key="item.id"
      >
        <div class="product-img">
          <img :src="item.imageUrl" alt="" />
        </div>
        <div class="product-info">
          <span class="product-title">{{ item.name }}</span>
          <div class="product-description">{{ item.description }}</div>
          <ul class="product-sizes">
            <li
              @click="pizzaStore.activeSize(size, item)"
              v-for="size in item.sizes"
              class="size"
              :class="{
                active:
                  pizzaStore.selectedSize === size &&
                  pizzaStore.selectedId === item.id,
                first_active:
                  size === item.sizes[0] &&
                  item.selectedPrice === item.price[0],
              }"
            >
              {{ size }}
            </li>
          </ul>
        </div>
        <div class="product-footer">
          <div class="product-price">
            {{
              item.price && item.selectedPrice ? item.selectedPrice : item.price
            }}
            рублей
          </div>
          <button
            @click="pizzaStore.addToCart(item)"
            type="button"
            class="btn btn-danger"
          >
            + Добавить
            <i v-if="pizzaStore.getItemCount(item) > 0">{{
              pizzaStore.getItemCount(item)
            }}</i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding-top: 40px;
}
img {
  max-width: 250px;
  margin: 20px;
}
ul {
  display: flex;
  justify-content: center;
  list-style: none;
}
li {
  margin-right: 20px;
  font-size: 20px;
  cursor: pointer;
}
li:hover {
  text-shadow: 0 0 10px #ff0000, 0 0 6px #ff0000, 0 0 10px #ff0000;
}
.product-img {
  width: 275px;
  margin: 0 auto;
}
.product-card {
  border: 1px solid #cacaca;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 15px;
  padding-bottom: 16px;
  max-height: 510px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-left: 50px;
}
.product-title {
  font-size: 30px;
  font-weight: 500;
  line-height: 24px;
}

.product-description {
  margin-top: 15px;
}
.product-footer {
  display: flex;
  justify-content: space-between;
}
.product-sizes {
  list-style: none;
  display: flex;
}
.size {
  margin-right: 10px;
  background-color: orange;
  color: white;
  text-align: center;
  width: 50px;
  border-radius: 5px;
  cursor: pointer;
}
.active,
.first_active {
  border: 1px solid #d21b04;
}

i {
  display: inline-block;
  border-radius: 30px;
  background-color: black;
  color: #fff;
  font-weight: 600;
  width: 22px;
  height: 22px;
  font-style: normal;
  font-size: 13px;
  line-height: 22px;
  position: relative;
  top: 0px;
  left: 3px;
}
@media screen and (max-width: 414px) {
  .product-card {
    margin-left: 0px;
  }
}
</style>
