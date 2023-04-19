<script>
import axios from "axios";
export default {
  data() {
    return {
      templateData: {
        weather: [
          {
            main: null,
          },
        ],
        main: {
          temp: null,
          feels_like: null,
        },
        name: null,
      },
      cityName: null,
      error: null,
      showInformation: false,
    };
  },
  methods: {
    async getWeather() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=042b2ee2c83661dfb42ab95b64d38260&lang=ru&units=metric`
        );
        this.templateData = response.data;
        this.cityName = this.templateData.name;
        this.cityName = "";
        this.showInformation = true;
      } catch (error) {
        this.error = error.response.data.message;
        console.log(this.error);
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <input
          type="text"
          placeholder="Введите город"
          v-model="this.cityName"
        />
        <button @click="getWeather">Узнать погоду</button>
        <div v-if="!error" v-show="showInformation">
          <h3>Температура в городе {{ this.templateData.name }}</h3>
          <p>Город: {{ this.templateData.name }}</p>
          <p>Температура: {{ Math.ceil(this.templateData.main.temp) }}&deg;</p>
          <p>
            Ощущается как:
            {{ Math.ceil(this.templateData.main.feels_like) }}&deg;
          </p>
          <p>Описание: {{ this.templateData.weather[0].description }}</p>
        </div>
        <div v-else>
          {{ this.error }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.col-lg-12 {
  padding: 50px;
  background-color: white;
  margin-top: 21px;
}
</style>
