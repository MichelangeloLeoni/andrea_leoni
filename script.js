const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("primary-navigation");
const menuLinks = navLinks.querySelectorAll("a");

function closeMenu() {
    navLinks.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
}

function toggleMenu(event) {
    event.stopPropagation();
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    
    if (isExpanded) {
        closeMenu();
    } else {
        navLinks.classList.add("active");
        menuButton.setAttribute("aria-expanded", "true");
    }
}

menuButton.addEventListener("click", toggleMenu);

menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
    if (navLinks.classList.contains("active") && !navLinks.contains(event.target) && !menuButton.contains(event.target)) {
        closeMenu();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("active")) {
        closeMenu();
        menuButton.focus();
    }
});