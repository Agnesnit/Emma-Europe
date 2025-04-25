/* Vänta tills hela HTML-dokumentet har laddats innan koden körs */
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    /* Om hamburgermenyn finns, lyssna på klick*/
    if (hamburger) {
        hamburger.addEventListener("click", function () {
            /* Visa eller göm menyn när man klickar*/
            navMenu.classList.toggle("active");
        });
    }
});
