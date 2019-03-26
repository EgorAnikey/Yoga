function calc() {
    let Browser = {
        IE: (/trident/gi).test(navigator.userAgent) || (/msie/gi).test(navigator.userAgent),
        Mobile: (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
    };
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    function check(input) {
        return /\d$/.test(input);
    }

    function animateTotalValue(value) {
        for (let i = 0; i <= value; i++) {
            let id = setTimeout(function () {
                if (i > 10000) {
                    i = value;
                    clearInterval(id);
                }
                totalValue.innerHTML = i;
            }, 10);
            if (i > 10000) {
                break;
            }
        }
    }

    persons.addEventListener('input', function () {
        if (!check(this.value)) {
            this.value = this.value.slice(0, -1);
        }
        personsSum = +this.value;
        if (restDays.value == '' || this.value == '' ||
            restDays.value == '0' || this.value == '0') {
            totalValue.innerHTML = 0;
        } else if (Browser.IE) {
            // Do something related to Internet Explorer.
            totalValue.innerHTML = daysSum * personsSum * 4000 * place.options[place.selectedIndex].value;
        } else {
            total = daysSum * personsSum * 4000 * place.options[place.selectedIndex].value;
            animateTotalValue(total);
        }
    });

    restDays.addEventListener('input', function () {
        if (!check(this.value)) {
            this.value = this.value.slice(0, -1);
        }
        daysSum = +this.value;
        if (persons.value == '' || this.value == '' ||
            persons.value == '0' || this.value == '0') {
            totalValue.innerHTML = 0;
        } else if (Browser.IE) {
            // Do something related to Internet Explorer.
            totalValue.innerHTML = daysSum * personsSum * 4000 * place.options[place.selectedIndex].value;
        } else {
            total = daysSum * personsSum * 4000 * place.options[place.selectedIndex].value;
            animateTotalValue(total);
        }
    });
    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '' ||
            restDays.value == '0' || persons.value == '0') {
            totalValue.innerHTML = 0;
        } else if (Browser.IE) {
            // Do something related to Internet Explorer.
            totalValue.innerHTML = daysSum * personsSum * 4000 * place.options[place.selectedIndex].value;
        } else {
            total = daysSum * personsSum * 4000 * place.options[place.selectedIndex].value;
            animateTotalValue(total);
        }
    });
}
module.exports = calc;