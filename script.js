// ==================== HAMBURGER MENU ====================

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


// ==================== CONTACT FORM ====================

const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", async function (event) {
    // Prevent the browser from leaving the portfolio page
    event.preventDefault();

    // Collect all information from the form
    const formData = new FormData(contactForm);

    try {

        // Send the information to Formspree
        const response = await fetch(contactForm.ariaDescription, {
            method: contactForm.method,
            body: formData,
            headers: {
                Accept: "application/json"
            }
        });

        // Check if Formspree successfully received it
        if (response.ok) {
            formStatus.textContent = 
                "Thank you! Your message has been sent. 🌸";
            formStatus.className = "success";

            // Clear the form
            contactForm.reset();
        } else {

            formStatus.textContent =
                "Oops! Something went wrong. Please try again.";
            
                formStatus.className = "error";
        }
    } catch (error) {
        formStatus.textContent = "Oops! Something went wrong. Please try again.";
        formStatus.className = "error";
    }
});
