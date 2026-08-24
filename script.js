const nav = document.querySelector("nav");
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");
const openIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");
const logo = document.querySelector(".logo");
const mobileLinks = document.querySelectorAll(".mobileLink");

function closeMenu() {
    navLinks.classList.remove("active");
    openIcon.classList.remove("active");
    closeIcon.classList.remove("active");
}

function toggleMenu() {
    navLinks.classList.toggle("active");
    openIcon.classList.toggle("active");
    closeIcon.classList.toggle("active");
}

menuIcon.addEventListener("click", toggleMenu);

logo.addEventListener("click", closeMenu);

mobileLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && navLinks.classList.contains("active")) {
        closeMenu();
    }
});