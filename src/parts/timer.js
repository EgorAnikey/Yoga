function timer() {
    let deadline = '2019-03-27T00:00:00';

    function getNullInDate(date) {
        date = date < 10 ? '0' + date : date;
        return date;
    }

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        if (t <= 0 || isNaN(t)) {
            t = 0;
        }
        let seconds = getNullInDate(Math.floor((t / 1000) % 60)),
            minutes = getNullInDate(Math.floor((t / 1000 / 60) % 60)),
            hours = getNullInDate(Math.floor((t / (1000 * 60 * 60))));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('timer', deadline);
}
module.exports = timer;