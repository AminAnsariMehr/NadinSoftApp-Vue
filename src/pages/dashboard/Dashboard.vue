<template>

    <div class="dashboardPage showPage" id="dashboardPage">
        <section class="dashboardApp">
            <section class="clocks">
                <!--------- Analog Clock --------->
                <div class="analogClock">
                    <div id="secondCircle" class="clock__circles clock__secondCircle">
                        <i class="clock__Indicators clock__secondIndicator"></i>
                    </div>
                    <div id="minuteCircle" class="clock__circles clock__minuteCircle">
                        <i class="clock__Indicators clock__minuteIndicator"></i>
                    </div>
                    <div id="hourCircle" class="clock__circles clock__hourCircle">
                        <i class="clock__Indicators clock__hourIndicator"></i>
                    </div>
                    <span class="clock__number" style="--i: 1"><b class="clock__number--bold">1</b></span>
                    <span class="clock__number" style="--i: 2"><b class="clock__number--bold">2</b></span>
                    <span class="clock__number" style="--i: 3"><b class="clock__number--bold">3</b></span>
                    <span class="clock__number" style="--i: 4"><b class="clock__number--bold">4</b></span>
                    <span class="clock__number" style="--i: 5"><b class="clock__number--bold">5</b></span>
                    <span class="clock__number" style="--i: 6"><b class="clock__number--bold">6</b></span>
                    <span class="clock__number" style="--i: 7"><b class="clock__number--bold">7</b></span>
                    <span class="clock__number" style="--i: 8"><b class="clock__number--bold">8</b></span>
                    <span class="clock__number" style="--i: 9"><b class="clock__number--bold">9</b></span>
                    <span class="clock__number" style="--i: 10"><b class="clock__number--bold">10</b></span>
                    <span class="clock__number" style="--i: 11"><b class="clock__number--bold">11</b></span>
                    <span class="clock__number" style="--i: 12"><b class="clock__number--bold">12</b></span>
                </div>

                <!--------- Digital Clock --------->
                <div class="digitalClock">
                    <div id="hours" class="digitalClock__parameter digitalClock__hours">00</div>
                    <div id="minutes" class="digitalClock__parameter digitalClock__minutes">00</div>
                    <div id="seconds" class="digitalClock__parameter digitalClock__seconds">00</div>
                    <div id="am_pm" class="digitalClock__parameter digitalClock__AmPm">AM</div>
                </div>
            </section>
            <div class="dashboardPage__currentDate" id="currentTodayDisplay"></div>
            <div class="dashboardPage__message" id="dashboardUserMessage"></div>
        </section>
    </div>

</template>