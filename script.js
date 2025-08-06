let lastScrollTop = 0;

//handles nav bar showing when scrolling up
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

//fixes about section positioning when clicking about from nav bar
document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.querySelector('nav a[href="#about"]');
    const aboutSection = document.getElementById('about');

    if (aboutLink && aboutSection) {
        aboutLink.addEventListener('click', function (e) {
            e.preventDefault();
            const rect = aboutSection.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const sectionHeight = aboutSection.offsetHeight;
            const viewportHeight = window.innerHeight;
            const offset = rect.top + scrollTop - ((viewportHeight - sectionHeight) / 2);
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        });
    }
});

