/* Toggle mobile menu */
/*let menuIcon = document.querySelector('#menu-icon');
let Navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar a');

menuIcon.onclick = (e) => {
    e.stopPropagation(); // prevent this click from triggering the document listener
    menuIcon.classList.toggle('fa-xmark'); // toggle X icon
    Navbar.classList.toggle('active'); // toggle menu visibility
};*/

/* Close navbar when any link is clicked (mobile) */
/*navLinks.forEach(link => {
    link.addEventListener('click', () => {
        Navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
    });
});*/

/* Close navbar when clicking outside the menu (mobile) */
/*document.addEventListener('click', (e) => {
    if (Navbar.classList.contains('active') && !Navbar.contains(e.target) && e.target !== menuIcon) {
        Navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
    }
});*/

/* Scroll section active link */
/*let sections = document.querySelectorAll('section');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let Id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            let activeLink = document.querySelector('header nav a[href*=' + Id + ']');
            if(activeLink) activeLink.classList.add('active');
        }
    });*/

    /* Sticky navbar */
    /*let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);
};*/

/* Scroll reveal */
/*ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.about-content, heading', { origin: 'top' });
ScrollReveal().reveal('.about-img', { origin: 'right' });
ScrollReveal().reveal('.about-content h1, .about-content p, .about-content h3, .social-media', { origin: 'left' });
ScrollReveal().reveal('.about-content a', { origin: 'right' });
ScrollReveal().reveal('.skills-container, .education-box', { origin: 'left' });
ScrollReveal().reveal('.projects-box, .contact form', { origin: 'right' });*/

/* Typed JS */
/*const typed = new Typed('.multiple-text', {
    strings: ['Front-End Developer', 'Web Developer'],
    typeSpeed: 70,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});*/


const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

menuIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("fa-xmark");
});

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIcon.classList.remove("fa-xmark");
  })
);

document.addEventListener("click", (e) => {
  if (navbar.classList.contains("active") && !navbar.contains(e.target) && e.target !== menuIcon) {
    navbar.classList.remove("active");
    menuIcon.classList.remove("fa-xmark");
  }
});

/* Typed */
new Typed(".multiple-text", {
  strings: ["Front-End Developer", "Web Developer"],
  typeSpeed: 70,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});

