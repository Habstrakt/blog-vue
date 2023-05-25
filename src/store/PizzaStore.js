import { defineStore } from "pinia";

export const usePizzaStore = defineStore("pizzaStore", {
  state: () => ({
    products: [],
    selectedSize: null,
    selectedId: null,
    currentCart: [],
  }),
  actions: {
    activeSize(size, item) {
      this.selectedSize = size;
      this.selectedId = item.id;

      const sizeIndex = item.sizes.indexOf(size);

      item.selectedPrice = item.price[sizeIndex];
      item.selectedSize = item.sizes[sizeIndex];
      console.log(size);
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
      }
    },
    minusItem(index) {
      const item = this.currentCart[index];
      if (item.count == 1) {
        this.currentCart.splice(index, 1);
      } else {
        item.count--;
        item.price = item.count * item.selectedPrice;
      }
    },
    plusItem(item) {
      item.count++;
      item.price = item.count * item.selectedPrice;
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
