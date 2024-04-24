<template>

    <div class="dashboardPage showPage" id="dashboardPage">
        <section class="dashboardApp">
            <section class="clocks">
                <AnalogClock></AnalogClock>
                <DigitalClock></DigitalClock>
            </section>
            <div class="dashboardPage__currentDate" id="currentTodayDisplay">Sunday</div>
            <div class="dashboardPage__message" id="dashboardUserMessage">Hello Dear Amin</div>
        </section>
    </div>

</template>

<style src="./Dashboard.css"></style>

<script>
import AnalogClock from './components/AnalogClock/AnalogClock.vue';
import DigitalClock from './components/DigitalClock/DigitalClock.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        "AnalogClock": AnalogClock,
        "DigitalClock": DigitalClock,

    }
}
</script>