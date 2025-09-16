/*============================================ toggle icon navbar =======================================*/ 

let menuIcon = document.querySelector('#menu-icon');
let Navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); // change icon to X
    Navbar.classList.toggle('active'); // show/hide mobile menu
};

/*============================================ scroll section active link =======================================*/ 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

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
    });

    /*============================================ sticky navbar =======================================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    /*============================================ remove toggle icon and navbar on scroll =======================================*/ 
    menuIcon.classList.remove('fa-xmark');
    Navbar.classList.remove('active');
};

/*============================================ scroll reveal =======================================*/ 
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.about-content, heading', { origin: 'top' });
ScrollReveal().reveal('.about-img', { origin: 'right' });
ScrollReveal().reveal('.about-content h1, .about-content p, .about-content h3, .social-media', { origin: 'left' });
ScrollReveal().reveal('.about-content a', { origin: 'right' });
ScrollReveal().reveal('.skills-container, .education-box', { origin: 'left' });
ScrollReveal().reveal('.projects-box, .contact form', { origin: 'right' });

/*============================================ typed js =======================================*/ 
const typed = new Typed('.multiple-text', {
    strings: ['Front-End Developer', 'Web Developer'],
    typeSpeed: 70,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});
