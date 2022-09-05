const headerEL = document.querySelector(".header");
window.addEventListener("scroll", (event) => {
    if (window.pageYOffset > 10) {
        headerEL.classList.add("scroll");
    } else {
        headerEL.classList.remove("scroll");
    }
});