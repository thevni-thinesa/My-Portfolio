/*============================================ toggle icon navbar =======================================*/ 

let menuIcon = document.querySelector('#menu-icon');
let Navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    Navbar.classList.toggle('active');
};

/*============================================ scroll section active link =======================================*/ 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let Id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + Id + ']').classList.add('active');
            });
        };
    });

    /*============================================ sticky navbar =======================================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    /*============================================ remove toggle icon and navbar =======================================*/ 
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
ScrollReveal().reveal('.about-content h1, .about-content p,.about-content h3, .social-media', { origin: 'left' });
ScrollReveal().reveal('.about-content a', { origin: 'right' });
ScrollReveal().reveal('.skills-container, .education-box', { origin: 'left' });
ScrollReveal().reveal('.projects-box, .contact form', { origin: 'right' });


/*============================================ typed js =======================================*/ 
const typed = new Typed ('.multiple-text',{
    strings:['Front-End Developer', 'Web Developer'],
    typeSpeed: 70,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});