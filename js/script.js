let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

/* menu */

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    });

let header = document.querySelector('.menu')

header. classList.toggle('sticky', window.scrollY > 100)

menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')

}

/* dark mode */

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
}


/* Scroll reveal */

ScrollReveal({ 
    reset: true,
    duration: 1000, 
    distance: '80px',
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .contact form ', { origin: 'top' });
ScrollReveal().reveal('.portifolio-box, .sobre ', { origin: 'left' });
