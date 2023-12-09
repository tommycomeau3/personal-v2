const nav = document.querySelector(".mobile-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const closeBtn = document.querySelector(".mobile-navigation span");

// Add event listeners to toggle and close the mobile navigation
navToggle.addEventListener("click", toggleMobileNav);
closeBtn.addEventListener("click", toggleMobileNav);

// Get all mobile navigation links
const mobileNavLinks = document.querySelectorAll(".mobile-navigation a");

// Add event listeners to collapse the navigation when a link is clicked
mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
        toggleMobileNav();
    });
});

function toggleMobileNav() {
    const visibility = JSON.parse(nav.getAttribute("data-visible") || "false");
    nav.setAttribute("data-visible", JSON.stringify(!visibility));
}

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});
