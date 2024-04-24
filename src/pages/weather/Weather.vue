<template>

    <div class="weatherPage" id="weatherPage">
        <div class="weatherApp">
            <form class="weatherApp__searchBoxWrapper" id="weatherSearchBox">
                <i class="fa-light fa-magnifying-glass weatherApp__searchIcon"></i>
                <input type="text" class="weatherApp__searchCityInput" id="searchCityInput" placeholder="Search your city..." autocomplete="off" />

                <button class="weatherApp__searchCityBtn GlassMorphism__Button GlassMorphism__Button--Color1" id="searchCityBtn">
                    <span class="GlassMorphism__LightSpan">Search</span>
                </button>
            </form>

            <div class="weatherApp__locationData">
                <i class="fa-light fa-location-dot weatherApp__locationIcon"></i>
                <p class="weatherApp__cityName" id="cityName">Tehran</p>
            </div>
            <p class="weatherApp__dateData" id="dateData"></p>
            <div class="weatherApp__statusIndicator">
                <div class="weatherApp__currentTempWrapper">
                    <span class="weatherApp__currentTempNumber" id="temperatureNumber"></span>
                </div>
                <img src="./assets/decorations/weather/cloudy.png" class="weatherApp__tempStatusImage" />
            </div>

            <section class="weatherApp__weatherData">
                <div class="weatherApp__windDirectionData">
                    <i class="fa-solid fa-location-arrow weatherApp__windDirectionIcon" id="windArrow"></i>
                    <div class="weatherApp__windDirectionDisplay">
                        <span class="weatherApp__windDirectionNumber" id="windDirectionNumber"></span>
                        <span class="weatherApp__windDirectionUnit" id="windDirectionUnit"></span>
                    </div>
                    <span class="weatherApp__windDirectionTitle">Wind Direction</span>
                </div>

                <div class="weatherApp__dailyData">
                    <i class="fa-solid fa-sun fa-moon weatherApp__dailyIcon" id="dailyStatusIcon"></i>
                    <div class="weatherApp__dailyDisplay">
                        <span class="weatherApp__dailyStatus" id="dailyStatusTitle"></span>
                    </div>
                    <span class="weatherApp__dailyTitle">daily</span>
                </div>

                <div class="weatherApp__windSpeedData">
                    <i class="fa-regular fa-wind weatherApp__windSpeedIcon"></i>
                    <div class="weatherApp__windSpeedDisplay">
                        <span class="weatherApp__windSpeedNumber" id="windSpeedNumber"></span>
                        <span class="weatherApp__windSpeedUnit" id="windSpeedUnit"></span>
                    </div>
                    <span class="weatherApp__windSpeedTitle">Wind Speed</span>
                </div>
            </section>
        </div>
    </div>

</template>
