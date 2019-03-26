function slider() {

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    function animation(img, a) {
        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));
        img.style.display = 'block';
        let i = 1,
            opac = 1;
        let id = setInterval(start, 100);

        function start() {
            i += 0.1;
            opac -= 0.2;
            if (opac < -0) {
                img.style.display = "none";
                img.style.transform = "scale(1,1)";
                a.style.opacity = 1;
                clearInterval(id);
            } else {
                a.style.opacity = opac;
                img.style.transform = `scale(${i}, ${i})`;
            }
        }
    }

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {
        slides.forEach(function (item) {
            if (item.style.display == 'block') {
                let bigImg = item.querySelector('.slider-item img');
                animation(item, bigImg);
            }
        });
        setTimeout(function () {

            plusSlides(-1);
        }, 600);
    });
    next.addEventListener('click', function () {
        slides.forEach(function (item) {
            if (item.style.display == 'block') {
                let bigImg = item.querySelector('.slider-item img');
                animation(item, bigImg);
            }
        });
        setTimeout(function () {

            plusSlides(1);
        }, 600);
    });

    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                slides.forEach(function (item) {
                    if (item.style.display == 'block') {
                        let bigImg = item.querySelector('.slider-item img');
                        animation(item, bigImg);
                    }
                });
                setTimeout(function () {

                    currentSlide(i);
                }, 600);
            }
        }
    });
}
module.exports = slider;