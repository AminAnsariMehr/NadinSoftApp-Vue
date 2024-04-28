<template>
    <div class="analogClock">
        <div class="clock__circles clock__secondCircle" :style="{ transform: `rotateZ(${secondElement}deg)` }">
            <i class="clock__Indicators clock__secondIndicator"></i>
        </div>
        <div class="clock__circles clock__minuteCircle" :style="{ transform: `rotateZ(${minuteElement}deg)` }">
            <i class="clock__Indicators clock__minuteIndicator"></i>
        </div>
        <div class="clock__circles clock__hourCircle" :style="{ transform: `rotateZ(${hourElement}deg)` }">
            <i class="clock__Indicators clock__hourIndicator"></i>
        </div>

        <span class="clock__number" :style="`--i: ${num}`" v-for=" num in 12"><b class="clock__number--bold">{{ num }}</b></span>
    </div>
</template>

<style src="./AnalogClock.css"></style>
<script src="./AnalogClock.js"></script>