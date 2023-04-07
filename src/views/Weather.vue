<script>
import axios from "axios";
export default {
  data() {
    return {
      templateData: {
        coord: {
          lon: 10.99,
          lat: 44.34,
        },
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "moderate rain",
            icon: "10d",
          },
        ],
        main: {
          temp: 298.48,
          feels_like: 298.74,
          temp_min: 297.56,
          temp_max: 300.05,
        },
        wind: {
          speed: 0.62,
        },
        rain: {
          "1h": 3.16,
        },
        clouds: {
          all: 100,
        },
        name: null,
      },
    };
  },
  methods: {
    async getWeather() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.templateData.name}&appid=042b2ee2c83661dfb42ab95b64d38260&lang=ru&units=metric`
        );
        this.templateData = response.data;
      } catch (error) {
        console.log(error);
      }
      console.log(this.templateData.name);
    },
  },
};
</script>

<template>
  <div class="col-lg-12">
    <input
      type="text"
      placeholder="Введите город"
      v-model="this.templateData.name"
    />
    <button @click="getWeather">Узнать погоду</button>
    {{ this.templateData.name }}
    {{ this.templateData.main.temp }}
    {{ this.templateData.weather[0].description }}
  </div>
</template>

<style scoped>
.col-lg-12 {
  padding: 50px;
  background-color: white;
  margin-top: 21px;
}
</style>
