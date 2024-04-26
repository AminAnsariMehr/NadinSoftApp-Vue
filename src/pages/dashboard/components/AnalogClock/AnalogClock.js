
export default {
    data() {
        return {
            // time: new Date(),
            currentHour: new Date().getHours(),
            currentMinute: new Date().getMinutes(),
            hourElement: "",
            minuteElement: "",
            secondElement: "",
        }
    },
    mounted() {
        setInterval(this.updateClockElements, 1000);
    },
    methods: {
        updateClockElements() {
            const day = new Date();
            const hourValue = day.getHours() * 30;
            const minuteValue = day.getMinutes() * 6;
            const secondValue = day.getSeconds() * 6;
            this.hourElement = hourValue;
            this.minuteElement = minuteValue;
            this.secondElement = secondValue;
        }
    }
}