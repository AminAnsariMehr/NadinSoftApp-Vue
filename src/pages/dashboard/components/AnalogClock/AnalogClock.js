export default {
    data() {
        return {
            currentHour: new Date().getHours(),
            currentMinute: new Date().getMinutes(),
            hourElement: 0,
            minuteElement: 0,
            secondElement: 0,
        }
    },
    mounted() {
        this.updateClockElements()
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