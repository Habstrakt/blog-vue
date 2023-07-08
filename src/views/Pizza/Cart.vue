<script>
import { usePizzaStore } from "@/store/PizzaStore.js";

export default {
  setup() {
    const pizzaStore = usePizzaStore();
    return { pizzaStore };
  },
};
</script>

<template>
  <main>
    <section class="basket">
      <div class="container">
        <div class="row">
          <div class="col-md-2">
            <h1>Корзина</h1>
            <div class="maskot">
              <div class="buble">
                <p>Проверь свой заказ и не забудь добавить вкусности!</p>
              </div>
              <div class="logo">
                <img src="@/assets/img/cart.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-md-10">
            <div v-if="pizzaStore.currentCart.length > 0">
              <div class="zakaz">Состав заказа</div>
              <div class="cart_wrapper">
                <div class="cart_content">
                  <div v-for="(item, index) in pizzaStore.currentCart">
                    <div class="cart_item d-flex" v-if="item.count > 0">
                      <div class="img">
                        <img
                          :src="item.image"
                          alt=""
                          width="100"
                          height="100"
                        />
                      </div>
                      <div class="meta">
                        <div class="product_name d-flex">
                          {{ item.name }} - {{ item.size }}
                        </div>
                      </div>
                      <div class="quanity d-flex">
                        <div
                          @click="pizzaStore.minusItem(index)"
                          class="btn btn-danger d-flex minus"
                        >
                          -
                        </div>
                        <div class="quantity">
                          <p class="count">
                            {{ item.count }}
                          </p>
                        </div>
                        <div
                          @click="pizzaStore.plusItem(index)"
                          class="btn btn-danger d-flex plus"
                        >
                          +
                        </div>
                      </div>
                      <div class="price">
                        <span>{{ item.count * item.selectedPrice }} ₽</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="return_wrap d-flex">
                  <router-link :to="{ name: 'pizzas' }" class="return"
                    >Вернуться в меню</router-link
                  >
                </div>
                <div class="checkout">
                  <div class="checkout_item">
                    <div class="buttons d-flex">
                      <div class="summ d-flex">
                        К оплате:
                        <strong>{{ pizzaStore.totalPriceItem }} ₽</strong>
                      </div>
                      <router-link
                        :to="{ name: 'checkout' }"
                        class="checkout_cart"
                        >Перейти к оформлению</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <p class="empty-cart">Ваша корзина пока пуста.</p>
              <router-link :to="{ name: 'pizzas' }" class="return mx-auto"
                >Вернуться в меню</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.basket {
  margin-top: 20px;
}
h1 {
  margin-bottom: 22px;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 43px;
}
.basket .buble p {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 22px 29px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 114.5%;
  width: 208px;
  text-align: center;
  max-width: 100%;
}
.logo img {
  width: 180px;
  height: 140px;
}
.zakaz {
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 43px;
  margin-bottom: 22px;
}
.cart_content {
  max-height: 400px;
  overflow: hidden;
  overflow-y: auto;
  margin-bottom: 20px;
}
.cart_item {
  padding-bottom: 23px;
  border-bottom: 1px solid #cacaca;
  margin-bottom: 17px;
}
.img {
  margin-right: 24px;
  flex: 0 0 72px;
}
.meta {
  flex: 0 0 calc(60% - 96px);
}
.product_name {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 6px;
}
.quanity {
  flex: 0 0 33%;
}
.minus,
.plus {
  width: 25px;
  height: 25px;
  align-items: center;
  padding-left: 7px;
}
.count {
  height: 24px;
  width: 40px;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  background: transparent;
  border: 0;
  outline: none;
}
.price {
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 24px;
}
.return_wrap {
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}
.return {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d21b04;
  box-sizing: border-box;
  border-radius: 16px;
  width: 160px;
  height: 30px;
  color: #1b1b1b;
  text-decoration: none;
}
.checkout_item {
  width: 100%;
}
.buttons {
  justify-content: flex-end;
  align-items: center;
}
.summ {
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 43px;
  justify-content: flex-end;
  text-align: right;
  color: #1b1b1b;
  margin-right: 60px;
}
strong {
  margin-left: 20px;
  font-weight: bold;
}
.checkout_cart {
  background: #d21b04;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 48px;
  color: #fff;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  transition: 0.5s;
  text-decoration: none;
  padding: 0 20px;
  cursor: pointer;
}
.empty-cart {
  text-align: center;
}
</style>
