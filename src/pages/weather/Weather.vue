<template>
    <div class="weatherPage" id="weatherPage">
        <div class="weatherApp">
            <form class="weatherApp__searchBoxWrapper" @submit.prevent="findCity">
                <i class="fa-solid fa-magnifying-glass weatherApp__searchIcon"></i>
                <input type="text" class="weatherApp__searchCityInput" ref="inputSearch" v-model="inputSearchValue" placeholder="Search your city..." autocomplete="off" />
                <Button></Button>
            </form>

            <div class="weatherApp__locationData">
                <i class="fa-solid fa-location-dot weatherApp__locationIcon"></i>
                <p class="weatherApp__cityName" v-text=cityName></p>
            </div>
            <p class="weatherApp__dateData" v-text="date"></p>
            <div class="weatherApp__statusIndicator">
                <div class="weatherApp__currentTempWrapper">
                    <span class="weatherApp__currentTempNumber" v-text="temperature" id="temperatureNumber"></span>
                </div>
                <img src="./../../../src/assets/decorations/cloudy.png" class="weatherApp__tempStatusImage" />
            </div>
            <section class="weatherApp__weatherData">
                <div class="weatherApp__windDirectionData">
                    <i class="fa-solid fa-location-arrow weatherApp__windDirectionIcon" :style="{ transform: `rotate(${windDirection}deg)` }"></i>
                    <div class="weatherApp__windDirectionDisplay">
                        <span class="weatherApp__windDirectionNumber" v-text="windDirection"></span>
                        <span class="weatherApp__windDirectionUnit" v-text="windDirectionUnit"></span>
                    </div>
                    <span class="weatherApp__windDirectionTitle">Wind Direction</span>
                </div>

                <div class="weatherApp__dailyData">
                    <i class="fa-solid fa-sun fa-moon weatherApp__dailyIcon" id="dailyStatusIcon"></i>
                    <div class="weatherApp__dailyDisplay">
                        <span class="weatherApp__dailyStatus" v-text="dailyStatus"></span>
                    </div>
                    <span class="weatherApp__dailyTitle">daily</span>
                </div>

                <div class="weatherApp__windSpeedData">
                    <i class="fa-solid fa-wind weatherApp__windSpeedIcon"></i>
                    <div class="weatherApp__windSpeedDisplay">
                        <span class="weatherApp__windSpeedNumber" v-text="windSpeed" id="windSpeedNumber"></span>
                        <span class="weatherApp__windSpeedUnit" v-text="windSpeedUnit"></span>
                    </div>
                    <span class="weatherApp__windSpeedTitle">Wind Speed</span>
                </div>
            </section>
        </div>
    </div>
</template>



<style src="./Weather.css"></style>
<script src="./Weather.js"></script>
