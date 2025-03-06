let lastScrollTop = 0; // Store the last scroll position

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
    const headerHeight = header.offsetHeight;

    if (currentScrollTop > headerHeight) {
        if (currentScrollTop > lastScrollTop) {
            // Scrolling down: hide the navbar
            header.style.top = '-100px'; // Move navbar out of view
        } else {
            // Scrolling up: show the navbar
            header.style.top = '0'; // Move navbar back into view
        }
    }

    lastScrollTop = currentScrollTop; // Update the last scroll position
});


/*
// Projects tab
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        });

        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        target.classList.add('active');
        tab.classList.add('active');
    });
});

// Navigation (highlights active tab)
const navLinks = document.querySelectorAll('.navi a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        link.classList.add('active');
    });
});
*/