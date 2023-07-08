import { defineStore } from "pinia";
import { ref, computed, onBeforeMount } from "vue";

export const usePizzaStore = defineStore("pizzaStore", () => {
  const products = ref([]);
  const selectedSize = ref(null);
  const selectedId = ref(null);
  const currentCart = ref([]);
  const order = ref({
    deliveryMethod: null,
    paymentMethod: null,
    deliveryInfo: {
      phone: null,
      name: null,
      email: null,
      address: null,
      house: null,
      apartment: null,
    },
  });

  const localStorageData = JSON.parse(localStorage.getItem("cart"));

  onBeforeMount(() => {
    if (localStorageData) {
      currentCart.value = localStorageData;
    }
  });

  const activeSize = (size, item) => {
    selectedSize.value = size;
    selectedId.value = item.id;

    const sizeIndex = item.sizes.indexOf(size);

    item.selectedPrice = item.price[sizeIndex];
    item.selectedSize = item.sizes[sizeIndex];
  };

  const addToCart = (item) => {
    const existingItem = currentCart.value.find(
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
      currentCart.value.push(cart);
    }
    localStorage.setItem("cart", JSON.stringify(currentCart.value));
  };

  const minusItem = (index) => {
    const item = currentCart.value[index];
    localStorageData[index].count = item.count;
    if (item.count == 1) {
      currentCart.value.splice(index, 1);
    } else {
      item.count--;
      item.price = item.count * item.selectedPrice;
    }
    localStorage.setItem("cart", JSON.stringify(localStorageData));
  };

  const plusItem = (index) => {
    const item = currentCart.value[index];
    localStorageData[index].count = item.count;
    item.count++;
    item.price = item.count * item.selectedPrice;
    localStorageData[index].count = item.count;
    localStorage.setItem("cart", JSON.stringify(localStorageData));
  };

  const totalPriceItem = computed(() => {
    return currentCart.value.reduce((acc, nextItem) => {
      return nextItem.count > 1
        ? acc + nextItem.selectedPrice * nextItem.count
        : acc + nextItem.selectedPrice;
    }, 0);
  });

  const getItemCount = (item) => {
    const cartItem = currentCart.value.find(
      (cartItem) =>
        cartItem.id === item.id && cartItem.size === item.selectedSize
    );
    return cartItem ? cartItem.count : 0;
  };

  const totalCount = computed(() => {
    return currentCart.value.reduce((acc, nextItem) => {
      return acc + nextItem.count;
    }, 0);
  });

  const getItemCountBySize = (item, size) => {
    const cartItem = currentCart.value.find(
      (cartItem) => cartItem.id === item.id && cartItem.size === size
    );

    return cartItem ? cartItem.count : 0;
  };

  return {
    products,
    selectedSize,
    selectedId,
    currentCart,
    order,
    activeSize,
    addToCart,
    minusItem,
    plusItem,
    totalPriceItem,
    getItemCount,
    totalCount,
    getItemCountBySize,
  };
});

// import { defineStore, onBeforeMount } from "pinia";

// export const usePizzaStore = defineStore("pizzaStore", {
//   state: () => ({
//     products: [],
//     selectedSize: null,
//     selectedId: null,
//     currentCart: [],
//     order: {
//       deliveryMethod: null,
//       paymentMethod: null,
//       deliveryInfo: {
//         phone: null,
//         name: null,
//         email: null,
//         address: null,
//         house: null,
//         apartment: null,
//       },
//     },
//   }),

//   onBeforeMount() {
//     const localStorageData = JSON.parse(localStorage.getItem("cart"));
//     console.log(localStorageData);
//     if (localStorageData) {
//       this.currentCart = localStorageData;
//     }
//   },

//   actions: {
//     activeSize(size, item) {
//       this.selectedSize = size;
//       this.selectedId = item.id;

//       const sizeIndex = item.sizes.indexOf(size);

//       item.selectedPrice = item.price[sizeIndex];
//       item.selectedSize = item.sizes[sizeIndex];
//     },
//     addToCart(item) {
//       const existingItem = this.currentCart.find(
//         (cartItem) =>
//           cartItem.size === item.selectedSize && cartItem.id === item.id
//       );

//       if (existingItem) {
//         existingItem.count++;
//       } else {
//         const cart = {
//           id: item.id,
//           name: item.name,
//           count: 1,
//           size: item.selectedSize,
//           price: item.selectedPrice,
//           image: item.imageUrl,
//           selectedPrice: item.selectedPrice,
//         };
//         this.currentCart.push(cart);
//       }
//       localStorage.setItem("cart", JSON.stringify(this.currentCart));
//     },
//     minusItem(index) {
//       const item = this.currentCart[index];
//       if (item.count == 1) {
//         this.currentCart.splice(index, 1);
//       } else {
//         item.count--;
//         item.price = item.count * item.selectedPrice;
//       }
//     },
//     plusItem(item) {
//       item.count++;
//       item.price = item.count * item.selectedPrice;
//     },
//   },
//   getters: {
//     totalPriceItem() {
//       return this.currentCart.reduce((acc, nextItem) => {
//         return nextItem.count > 1
//           ? acc + nextItem.selectedPrice * nextItem.count
//           : acc + nextItem.selectedPrice;
//       }, 0);
//     },
//     getItemCount: (state) => (item) => {
//       const cartItem = state.currentCart.find(
//         (cartItem) =>
//           cartItem.id === item.id && cartItem.size === item.selectedSize
//       );
//       if (cartItem) {
//         const savedItem = this.localStorageData.find((savedCartItem) => {
//           savedCartItem.id === cartItem.id &&
//             savedCartItem.size === cartItem.size;
//         });
//         if (savedItem) {
//           cartItem.count = savedItem.count;
//           return savedItem.count;
//         }
//       }
//       return cartItem ? cartItem.count : 0;
//     },
//     totalCount() {
//       return this.currentCart.reduce((acc, nextItem) => {
//         const totalCount = acc + nextItem.count;
//         return totalCount;
//       }, 0);
//     },
//     getItemCountBySize: (state) => (item, size) => {
//       const cartItem = state.currentCart.find(
//         (cartItem) => cartItem.id === item.id && cartItem.size === size
//       );

//       return cartItem ? cartItem.count : 0;
//     },
//   },
// });
