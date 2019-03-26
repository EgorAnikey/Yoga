function calc() {
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
        } else {
            total = daysSum * personsSum * 4000 * place.options[place.selectedIndex].value;
            animateTotalValue(total);
        }
    });
    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '' ||
            restDays.value == '0' || persons.value == '0') {
            totalValue.innerHTML = 0;
        } else {
            let total = daysSum * personsSum * 4000 * this.options[this.selectedIndex].value;
            animateTotalValue(total);
        }
    });
}
module.exports = calc;