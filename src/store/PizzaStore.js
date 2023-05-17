import { defineStore } from "pinia";
import foodsData from "@/assets/foods.json";

export const usePizzaStore = defineStore("pizzaStore", {
  state: () => ({
    products: [],
    selectedSize: null,
    selectedId: null,
    currentCart: [],
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

            selectedSize,
            count: 0,
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
      const existingItem = this.currentCart.find(
        (cartItem) =>
          cartItem.size === item.selectedSize && cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.count++;
      } else {
        const cart = {
          id: item.id,
          name: item.name,
          count: 1,
          size: item.selectedSize,
          price: item.selectedPrice,
          image: item.imageUrl,
          selectedPrice: item.selectedPrice,
        };
        this.currentCart.push(cart);
        console.log(cart);
      }
    },
    minusItem(index) {
      const item = this.currentCart[index];
      if (item.count !== 0) {
        item.count--;
        item.price = item.count * item.selectedPrice;
      }
      if (item.count === 0) {
        this.currentCart.splice(index, 1);
      }
    },
    plusItem(item) {
      item.count++;
      item.price = item.count * item.selectedPrice;
      console.log(item);
    },
  },
  getters: {
    totalPriceItem() {
      return this.currentCart.reduce((acc, nextItem) => {
        return nextItem.count > 1
          ? acc + nextItem.selectedPrice * nextItem.count
          : acc + nextItem.selectedPrice;
      }, 0);
    },
    getItemCount: (state) => (item) => {
      const cartItem = state.currentCart.find(
        (cartItem) =>
          cartItem.id === item.id && cartItem.size === item.selectedSize
      );
      return cartItem ? cartItem.count : 0;
    },
    totalCount() {
      return this.currentCart.reduce((acc, nextItem) => {
        const totalCount = acc + nextItem.count;
        return totalCount;
      }, 0);
    },
  },
});
