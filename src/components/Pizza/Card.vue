<script>
import foodsData from "@/assets/foods.json";
export default {
  data() {
    return {
      products: {},
      selectedSize: null,
      selectedId: null,
    };
  },
  methods: {
    activeSize(size, item) {
      this.selectedSize = size;
      this.selectedId = item.id;

      const sizeIndex = item.sizes.indexOf(size);
      item.selectedPrice = item.price[sizeIndex];
    },
  },
  mounted() {
    this.products = foodsData.products.map((item) => {
      return { ...item, selectedPrice: item.price[0] };
    });
  },
};
</script>

<template>
  <section>
    <div class="row">
      <div
        v-for="(item, index) in products"
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
              @click="activeSize(size, item)"
              v-for="size in item.sizes"
              class="size"
              :class="{
                active: selectedSize === size && selectedId === item.id,
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
          <button type="button" class="btn btn-danger">Добавить</button>
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
.active {
  border: 1px solid #d21b04;
}
@media screen and (max-width: 414px) {
  .product-card {
    margin-left: 0px;
  }
}
</style>
