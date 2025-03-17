let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
    const headerHeight = header.offsetHeight;

    if (currentScrollTop > headerHeight) {
        if (currentScrollTop > lastScrollTop) {
            header.style.top = '-100px';
        } else {
            header.style.top = '0';
        }
    }

    lastScrollTop = currentScrollTop;
});


