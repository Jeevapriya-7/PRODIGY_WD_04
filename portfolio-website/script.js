const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    // Navbar background change
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Active section highlight
    let fromTop = window.scrollY;

    links.forEach(link => {
        let section = document.querySelector(link.getAttribute("href"));

        if (
            section.offsetTop <= fromTop + 100 &&
            section.offsetTop + section.offsetHeight > fromTop + 100
        ) {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        }
    });

});