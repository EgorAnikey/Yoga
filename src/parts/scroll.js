function scrollSlow() {

    function scroll(coord) {
        window.scrollTo({
            top: coord - 50,
            behavior: 'smooth',
        });
    }

    const nav = document.querySelector('header nav');
    nav.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target && event.target.tagName == 'A') {
            let id = event.target.getAttribute('href'),
                top = (document.querySelector(id).offsetTop);
            scroll(top);
        }
    });
}
module.exports = scrollSlow;