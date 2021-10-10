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

/** mode toggle - day/night **/
const body = document.body;
let modeIcon = document.querySelector(".mode-icon");

modeIcon.addEventListener("click", function (e) {
    // this.classList.toggle("fa-sun");

    this.classList.contains("fa-moon") ?
        (this.classList.replace("fa-moon", "fa-sun"),
            this.setAttribute("aria-label", "use day mode")) :
        ((this.className = "fas fa-moon mode-icon"),
            this.setAttribute("aria-label", "use night mode"));

    /** change theme **/
    if (body.classList.contains("nightTheme")) {
        body.classList.replace("nightTheme", "dayTheme");

        currentTheme = JSON.stringify("dayTheme");
        localStorage.setItem("theme", currentTheme);
    } else {
        body.className = "nightTheme";

        currentTheme = JSON.stringify("nightTheme");
        localStorage.setItem("theme", currentTheme);
    }
});

/** get and save current theme **/
getCurrentTheme();

function getCurrentTheme() {

    window.onload = setDefault();

    let currentTheme = JSON.parse(localStorage.getItem("theme")) ? JSON.parse(localStorage.getItem("theme")) : null;

    const body = document.body;
    const modeIcon = document.querySelector(".mode-icon");

    if (currentTheme !== null) {
        if (currentTheme == 'nightTheme') {
            body.className = "nightTheme";

            currentTheme = JSON.stringify("nightTheme");
            localStorage.setItem("theme", currentTheme);

            modeIcon.classList.replace("fa-moon", "fa-sun");
            modeIcon.setAttribute("aria-label", "use day mode");

        } else if (currentTheme == "dayTheme") {
            body.className = "dayTheme";

            currentTheme = JSON.stringify("dayTheme");
            localStorage.setItem("theme", currentTheme);

            modeIcon.className = "fas fa-moon mode-icon";
            modeIcon.setAttribute("aria-label", "use night mode");
        }
    }
}

/** set default theme on load **/
function setDefault() {
    body.className = "dayTheme";
    // console.log("loaded");
}

/** copy code **/
let mainDoc = document.getElementById("main-doc");
let codeContainer = document.getElementsByClassName("code-example");

mainDoc.addEventListener("click", (e) => {
    let button = e.target;

    if (codeContainer.length !== 0) {
        if (button.classList.contains("code-copy-button")) {
            button.setAttribute("aria-label", "copied")

            button.addEventListener("mouseout", function () {
                setTimeout(() => {
                    this.setAttribute("aria-label", "copy code");
                }, 200);
            })
        }
    }
})

