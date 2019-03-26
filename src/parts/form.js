function form() {
    function getCorrectPhone(inputForm) {
        inputForm.onkeydown = function (e) {
            let key = e.keyCode || e.charCode;
            if (inputForm.value.length != 17) {
                if (key != 8 && key != 46 && inputForm.value.length == 7) {
                    inputForm.value += " ";
                }
                if (key != 8 && key != 46 && inputForm.value.length == 11) {
                    inputForm.value += " ";
                }
                if (key != 8 && key != 46 && inputForm.value.length == 14) {
                    inputForm.value += " ";
                }
                if (inputForm.value.length < 6 && (key == 8 || key == 46) && (key < 96 || key > 105)) {
                    return false;
                } else if ((inputForm.value.length >= 3) && (key < 96 || key > 105) && (key != 8 && key != 46)) {
                    return false;
                }
            } else if (key != 8 && key != 46) {
                return false;
            }
        };
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
        item.addEventListener('focus', function () {
            item.value = "+375 ";
            getCorrectPhone(item);
        });
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
                for (let i = 0; i < document.querySelectorAll('input').length; i++) {
                    document.querySelectorAll('input')[i].value = '';
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