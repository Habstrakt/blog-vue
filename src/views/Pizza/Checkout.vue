<script>
import { usePizzaStore } from "@/store/PizzaStore.js";

export default {
  setup() {
    const pizzaStore = usePizzaStore();
    console.log(pizzaStore);
    return { pizzaStore };
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
          <div class="cart">
            <div class="delivery">
              <form method="post" name="checkout">
                <div class="checkout__top-fields">
                  <p class="form-row" id="billing_phone_field">
                    <label for="billing_phone">
                      Телефон
                      <abbr class="required" title="обязательно">*</abbr>
                    </label>
                    <span class="input-wrapper">
                      <input
                        type="text"
                        name="billing_phone"
                        id="billing_phone"
                        class="input-text"
                      />
                    </span>
                  </p>
                  <p class="form-row" id="billing_first_name_field">
                    <label for="billing_first_name">
                      Имя
                      <abbr class="required" title="обязательно">*</abbr>
                    </label>
                    <span class="input-wrapper">
                      <input
                        type="text"
                        name="billing_first_name"
                        id="billing_first_name"
                        class="input-text"
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
                    <li class="active">Доставка</li>
                    <li>Самовывоз</li>
                  </ul>
                </div>
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
                <div id="order_review">
                  <div id="payment">
                    <label>Способ оплаты</label>
                    <div class="payment_methods_wrap">
                      <ul class="payment_methods">
                        <li class="active">Картой курьеру</li>
                        <li>Наличными</li>
                        <li>Оплата картой онлайн</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="payment-total">
                  <button
                    type="submit"
                    class="checkout_button"
                    id="place_order"
                  >
                    Подтвердить заказ
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
}
.checkout_button {
  width: 240px;
  height: 48px;
  background: red;
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
</style>
