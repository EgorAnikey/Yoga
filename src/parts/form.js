function form() {

    function prettyMask(prettyInput) {
        let maska = "+375 (__)  ___ __ __";
        prettyInput.addEventListener('input', function () {
            if (!/\d$/.test(this.value)) {
                this.value = this.value.slice(0, -1);
            }
            let i = 0;
            let val = this.value.replace(/\D/g, '');
            if (this.value.length < 7) {
                this.value = '+375 (';
            } else {
                this.value = maska.replace(/./g, function (a) {
                    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) :
                        i >= val.length ? "" : a;
                });
            }
        });
        prettyInput.addEventListener('mouseup', (e) => {
            prettyInput.value = '+375 (';
            e.preventDefault();
            prettyInput.setSelectionRange(6, 6);
        });
    }

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };
    let mainForm = document.querySelector('.main-form'),
        inputPhone = document.querySelectorAll('.mobilephone'),
        statusMessage = document.createElement('div'),
        contactForm = document.querySelector('#form');

    inputPhone.forEach(function (item) {
        prettyMask(item);
    });

    function sendForm(elem) {
        elem.addEventListener('submit', function (e) {
            e.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            function postForm(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    };
                    let obj = {};
                    data.forEach(function (value, key) {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);
                    request.send(json);
                });
            } //postForm
            function clearInput() {
                for (let i = 0; i < elem.querySelectorAll('input').length; i++) {
                    elem.querySelectorAll('input')[i].value = '';
                }
            }

            postForm(formData)
                .then(() => {
                    statusMessage.removeAttribute('class');
                    statusMessage.classList.add('loadstatus');
                })
                .then(() => {
                    statusMessage.removeAttribute('class');
                    statusMessage.classList.add('goodstatus');
                })
                .catch(() => {
                    statusMessage.removeAttribute('class');
                    statusMessage.classList.add('failstatus');
                    statusMessage.innerHTML = message.failure;
                })
                .then(clearInput);
        });
    } //sendForm

    sendForm(mainForm);
    sendForm(contactForm);
}
module.exports = form;