/** header styled on scroll **/
let sidebar = document.getElementById("sidebar");
let prevScrollPosition = window.pageYOffset;

window.onscroll = () => {
    let currentScrollPosition = window.pageYOffset;
    let pageOffset = prevScrollPosition > currentScrollPosition;

    pageOffset ? sidebar.classList.remove("show-sidebar") : sidebar.classList.add("show-sidebar");

    prevScrollPosition = currentScrollPosition;
    if (prevScrollPosition === 0) {
        sidebar.classList.remove("show-sidebar");
    }
};

/** Smooth nav link transition **/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

/** update footer year **/
let footerYear = document.getElementById("footer-year");
let fullCopyrightYear;
let date = new Date();
let currentYear = date.getFullYear();
currentYear > 2021 ? fullCopyrightYear = `2021 - ${currentYear}` : fullCopyrightYear = currentYear;
footerYear.innerHTML = fullCopyrightYear;

let navbar = document.getElementById("nav-bar")
let toggler = document.querySelector("#mobile-menu-toggler");
