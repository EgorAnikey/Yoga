function modal() {
    let Browser = {
        IE: (/trident/gi).test(navigator.userAgent) || (/msie/gi).test(navigator.userAgent),
        Mobile: (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
    };
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        moreInfo = document.querySelectorAll('.description-btn'),
        popup = document.querySelector('.popup'),
        mainForm = document.querySelector('.main-form'),
        statusMessage = document.createElement('div');

    function animation() {
        let pos = 0,
            pos1 = 150,
            pos2 = 102,
            pos3 = 150,
            pos4 = 122,
            pos5 = 150,
            pos6 = 132,
            pos7 = 150,
            pos8 = 142;

        let id = setInterval(start, 1);

        function start() {
            if (pos != 151) {
                popup.style.top = pos + 'px';
                pos++;
            } else if (pos1 != 101) {
                popup.style.top = pos1 + 'px';
                pos1--;
            } else if (pos2 != 151) {
                popup.style.top = pos2 + 'px';
                pos2++;
            } else if (pos3 != 121) {
                popup.style.top = pos3 + 'px';
                pos3--;
            } else if (pos4 != 151) {
                popup.style.top = pos4 + 'px';
                pos4++;
            } else if (pos5 != 131) {
                popup.style.top = pos5 + 'px';
                pos5--;
            } else if (pos6 != 151) {
                popup.style.top = pos6 + 'px';
                pos6++;
            } else if (pos7 != 141) {
                popup.style.top = pos7 + 'px';
                pos7--;
            } else if (pos8 != 151) {
                popup.style.top = pos8 + 'px';
                pos8++;
            } else {
                clearInterval(id);
            }
        }
    }

    function checkBrowser() {
        if (!Browser.IE && !Browser.Mobile) {
            // Do your stuff for Firefox and Chrome.
            popup.style.top = '';
            animation();
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        } else if (Browser.IE) {
            // Do something related to Internet Explorer.
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
            setTimeout(function () {
                popup.classList.add('someanime');
            }, 1);
        } else {
            // The browser is Safari, Opera or some other.
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
            popup.style.top = 150 + 'px';
        }
    }

    moreInfo.forEach(function (item) {
        item.addEventListener('click', checkBrowser);
    });

    more.addEventListener('click', checkBrowser);

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
        console.log(statusMessage);
        mainForm.lastChild.removeAttribute('class');
    });
}
module.exports = modal;