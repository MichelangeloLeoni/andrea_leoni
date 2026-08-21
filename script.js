const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");
const openIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    openIcon.classList.toggle("active");
    closeIcon.classList.toggle("active");
})