const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function (){
    navLinks.classList.toggle("active");
    const menuIsOpen = navLinks.classList.contains("active");
    menuButton.setAttribute("aria-expanded", menuIsOpen);
});

const links = document.querySelectorAll(".nav-links a");
links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
    });

});
