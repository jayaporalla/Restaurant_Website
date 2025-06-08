const menuBtn = document.getElementById('menu-btn');
const menuBtnIcon = document.querySelector("i");
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
})

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000
}

ScrollReveal().reveal(".order__card", {
    ...scrollRevealOption,
    delay:500
})