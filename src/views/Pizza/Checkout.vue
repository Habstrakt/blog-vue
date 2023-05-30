<script>
import { usePizzaStore } from "@/store/PizzaStore.js";

export default {
  setup() {
    const pizzaStore = usePizzaStore();
    return { pizzaStore };
  },
  data() {
    return {
      deliveryMethods: ["Самовывоз", "Доставка"],
      paymentMethods: ["Оплата картой онлайн", "Картой курьеру", "Наличными"],
      selectedDelivery: "Самовывоз",
      selectedPayment: "Оплата картой онлайн",
      phoneNumber: "",
      nameValue: "",
      textPhoneError: "",
      textNameError: "",
    };
  },
  created() {
    this.pizzaStore.order.deliveryMethod = this.selectedDelivery;
    this.pizzaStore.order.paymentMethod = this.selectedPayment;
  },
  computed: {
    formValidate() {
      const isValid = [
        this.selectedDelivery,
        this.selectedPayment,
        this.phoneNumber,
        this.nameValue,
      ].includes("");
      return isValid;
    },
  },
  methods: {
    submitForm(isValid) {
      if (!isValid) {
        const cartData = this.pizzaStore.currentCart;
        const deliveryData = this.pizzaStore.order;

        const jsonCartData = JSON.stringify(cartData);
        const jsonDeliveryData = JSON.stringify(deliveryData);

        const file = new Blob([jsonCartData, jsonDeliveryData], {
          type: "application/json",
        });
        const fileURL = URL.createObjectURL(file);
        window.location.href = fileURL;
      }
    },
    selectDelivery(index) {
      const item = this.deliveryMethods[index];
      this.selectedDelivery = item;

      this.pizzaStore.order.deliveryMethod = this.selectedDelivery;
    },
    selectPayment(index) {
      const item = this.paymentMethods[index];
      this.selectedPayment = item;
      this.pizzaStore.order.paymentMethod = this.selectedPayment;
    },
    validatePhoneNumber() {
      const isPhoneValid = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(
        this.phoneNumber
      );
      const isPhoneLengthValid = this.phoneNumber.length === 16;

      if (!isPhoneValid && !isPhoneLengthValid) {
        this.textPhoneError =
          "Введите корректный номер телефона! Пример: +7(960)111-11-11";
      } else {
        this.textPhoneError = "";
        this.pizzaStore.order.deliveryInfo.phone = this.phoneNumber;
      }
    },
    validateName() {
      const isNameLengthValid = this.nameValue.length > 0;

      if (!isNameLengthValid) {
        this.textNameError = "Введите имя!";
      } else {
        this.textNameError = "";
        this.pizzaStore.order.deliveryInfo.name = this.nameValue;
      }
    },
  },
};
</script>

<template>
  <div class="checkout">
    <div class="container">
      <h1>Оформление заказа</h1>
      <div class="row">
        <div class="col-md-2">
          <div class="maskot">
            <div class="buble">
              <p>Ещё чуть чуть и эта вкуснотища будет у тебя дома на столе!</p>
            </div>
            <div class="logo">
              <img src="@/assets/img/cart.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-md-10">
          <div v-if="pizzaStore.currentCart.length > 0" class="cart">
            <div class="delivery">
              <form
                method="post"
                name="checkout"
                @submit.prevent="submitForm()"
              >
                <div class="checkout__top-fields">
                  <p class="form-row" id="billing_phone_field">
                    <label for="billing_phone">
                      Телефон
                      <abbr class="required" title="обязательно">*</abbr>
                    </label>
                    <span class="error_input">{{ textPhoneError }}</span>
                    <span class="input-wrapper">
                      <input
                        type="tel"
                        name="billing_phone"
                        id="billing_phone"
                        class="input-text"
                        v-mask="'+7(###)###-##-##'"
                        v-model="phoneNumber"
                        @blur="validatePhoneNumber"
                      />
                    </span>
                  </p>
                  <p class="form-row" id="billing_first_name_field">
                    <label for="billing_first_name">
                      Имя
                      <abbr class="required" title="обязательно">*</abbr>
                    </label>
                    <span class="error_input">{{ textNameError }}</span>
                    <span class="input-wrapper">
                      <input
                        type="text"
                        name="billing_first_name"
                        id="billing_first_name"
                        class="input-text"
                        v-model="nameValue"
                        @blur="validateName"
                      />
                    </span>
                  </p>
                </div>
                <p class="form-row" id="billing_email_field">
                  <label for="billing_email">Email</label>
                  <span class="input-wrapper">
                    <input
                      type="email"
                      name="billing_email"
                      id="email"
                      class="input-text"
                    />
                  </span>
                </p>
                <div class="type_delivery">
                  <ul>
                    <li
                      @click="selectDelivery(index)"
                      v-for="(item, index) in deliveryMethods"
                      :class="{
                        active:
                          this.selectedDelivery == this.deliveryMethods[index],
                      }"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div v-if="this.selectedDelivery == 'Доставка'">
                  <p class="form-row" id="billing_street_field">
                    <label for="billing_street">Адрес доставки</label>
                    <span class="input-wrapper">
                      <input
                        type="text"
                        name="billing_street"
                        id="street"
                        class="input-text"
                      />
                    </span>
                  </p>
                  <div class="checkout__top-fields">
                    <p class="form-row" id="billing_home_field">
                      <label for="billing_home">Дом</label>
                      <span class="input-wrapper">
                        <input
                          type="text"
                          name="billing_home"
                          id="home"
                          class="input-text"
                        />
                      </span>
                    </p>
                    <p class="form-row" id="billing_first_apartment_field">
                      <label for="billing_apartment">Квартира</label>
                      <span class="input-wrapper">
                        <input
                          type="text"
                          name="billing_apartment"
                          id="apartment"
                          class="input-text"
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div id="order_review">
                  <div id="payment">
                    <label>Способ оплаты</label>
                    <div class="payment_methods_wrap">
                      <ul class="payment_methods">
                        <li
                          :class="{
                            active:
                              this.selectedPayment ==
                              this.paymentMethods[index],
                          }"
                          @click="selectPayment(index)"
                          v-for="(item, index) in paymentMethods"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="payment-total">
                  <button
                    type="submit"
                    class="checkout_button"
                    id="place_order"
                    :disabled="formValidate"
                    :class="{
                      'red-btn': !formValidate,
                      'grey-btn': formValidate,
                    }"
                  >
                    Подтвердить заказ
                  </button>
                  <router-link :to="{ name: 'pizzas' }" class="return"
                    >Вернуться в меню</router-link
                  >
                </div>
              </form>
            </div>
          </div>
          <div v-else>
            <router-link :to="{ name: 'pizzas' }" class="return m-auto"
              >Вернуться в меню</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.red-btn {
  background-color: red;
}
.grey-btn {
  background-color: gray;
}
.error_input {
  color: red;
  font-weight: 500;
}
.checkout {
  margin-top: 30px;
}
h1 {
  margin-bottom: 22px;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 43px;
}
.buble p {
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
.delivery {
  position: relative;
}
.checkout__top-fields {
  display: flex;
  width: 100%;
}
.checkout__top-fields p {
  width: 100%;
}
.form-row {
  padding: 3px;
  margin: 0 0 6px;
  display: flex;
  flex-wrap: wrap;
}
.cart .delivery label {
  flex: 0 0 100%;
  font-weight: bold;
  font-size: 14px;
  line-height: 114.5%;
  margin-bottom: 6px;
}
.input-wrapper {
  width: 100%;
}
.input-text {
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  outline: 0;
  line-height: normal;
}
.input-wrapper input {
  border: 1px solid #939393;
  box-sizing: border-box;
  border-radius: 8px;
  height: 40px;
  width: 100%;
  padding: 0 14px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 114.5%;
  padding-right: 10px;
  display: block;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-flex;
  border: 2px dashed transparent;
  box-sizing: border-box;
  border-radius: 8px;
  position: relative;
}
li {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 114.5%;
  padding: 10px 19px;
  transition: 0.5s;
  z-index: 2;
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  background-color: #e6e6e6;
}
.active {
  background-color: red;
  color: white;
}
.type_delivery {
  margin: 30px 0;
}
.required {
  color: red;
  font-weight: 700;
  border: 0;
  text-decoration: none;
}
#order_review {
  margin-top: 20px;
}
.payment_methods_wrap {
  display: flex;
}
.payment_methods {
  padding: 0;
  width: 100%;
}
.payment-total {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.checkout_button {
  width: 240px;
  height: 48px;
  border-radius: 16px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: 0.5s;
  border: 0;
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
</style>
