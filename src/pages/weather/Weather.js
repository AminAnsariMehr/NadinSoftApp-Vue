import Button from './../../../src/components/Button/Button.vue';
import { WeatherData } from './WeatherData.js';


export default {
    name: "weather app",
    components: {
        "Button": Button,
    },

    data() {
        return {
            inputSearchValue: "",
            cityName: "Tehran",
            lat: "35.7000",
            lng: "51.4167",
            temperature: "",
            windSpeed: "",
            windDirection: "",
            windSpeedUnit: "",
            windDirectionUnit: "",
            dailyStatus: "",
            date: new Date().toLocaleString("default", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
            })
        }
    },
    beforeMount() {
        this.fetchWeather()
    },
    methods: {
        removeAccents(str) {
            return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        },
        findCity() {
            for (const item of WeatherData) {
                if (this.inputSearchValue === this.removeAccents(item.city).toLowerCase()) {
                    this.lat = item.lat;
                    this.lng = item.lng;
                    this.cityName = this.inputSearchValue;
                    this.inputSearchValue = "";
                    this.fetchWeather();
                }
            }
        },
        fetchWeather() {
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${this.lat}8&longitude=${this.lng}&current_weather=true`)
                .then(res => { return res.json() })
                .then(this.setResult);
        },
        setResult(results) {
            const currentWeather = results.current_weather;
            const currentWeatherUnits = results.current_weather_units;
            this.temperature = Math.round(currentWeather.temperature);
            this.windSpeed = Math.round(currentWeather.windspeed);
            this.windDirection = Math.round(currentWeather.winddirection);
            this.windSpeedUnit = currentWeatherUnits.windspeed;
            this.windDirectionUnit = currentWeatherUnits.winddirection;
            this.dailyStatus = currentWeather.is_day === 0 ? (this.dailyStatus = "Night") : (this.dailyStatus = "Day")
        }
    }
}