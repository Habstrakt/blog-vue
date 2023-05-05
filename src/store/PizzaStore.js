import { defineStore } from "pinia";
import foodsData from "@/assets/foods.json";

export const usePizzaStore = defineStore("pizzaStore", {
  state: () => ({
    products: [],
    selectedSize: null,
    selectedId: null,
  }),
  actions: {
    init() {
      this.products = foodsData.products.reduce((acc, item) => {
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
            itemCount: 0,
            selectedSize,
          },
        ];
      }, []);
    },
    activeSize(size, item) {
      this.selectedSize = size;
      this.selectedId = item.id;

      const sizeIndex = item.sizes.indexOf(size);

      item.selectedPrice = item.price[sizeIndex];
      item.selectedSize = item.sizes[sizeIndex];
    },
    addToCart(item) {
      item.itemCount++;
      console.log(item);
    },
    clearCount(item) {
      item.itemCount = 0;
    },
  },
});
