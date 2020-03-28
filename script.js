const NAVBAR = document.getElementById('navbar');

NAVBAR.addEventListener('click', (event) => {
        NAVBAR.querySelectorAll('a').forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
});

const NAVBAR_TOGGLE_MENU = document.getElementById('navbar-toggle-menu');
NAVBAR_TOGGLE_MENU.addEventListener('click', (event) => {
        NAVBAR_TOGGLE_MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
        closeNavbarToggle();
});


// === scroll =====
const TOP = {
        HEADER: document.getElementById('header'),
        SLIDER: document.getElementById('slider'),
        SERVICES: document.getElementById('services'),
        PORTFOLIO: document.getElementById('portfolio'),
        ABOUT: document.getElementById('about'),
        CONTACT: document.getElementById('contact')
};


document.addEventListener('scroll', onScroll);

function onScroll(event) {
        const currentPosition = window.scrollY;
        

        for (el in TOP) {
                if ((TOP[el].offsetTop) <= currentPosition && (TOP[el].offsetTop + TOP[el].offsetHeight) > currentPosition ) {

                        NAVBAR.querySelectorAll('a').forEach(a => {
                                a.classList.remove('active');
                                if ( TOP[el].getAttribute('id') ===  a.getAttribute('href').substring(1)) {
                                        a.classList.add('active');
                                }
                        })
                        NAVBAR_TOGGLE_MENU.querySelectorAll('a').forEach(a => {
                                a.classList.remove('active');
                                if ( TOP[el].getAttribute('id') ===  a.getAttribute('href').substring(1)) {
                                        a.classList.add('active');
                                }
                        })
                }
        }

        let clientHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
        let documentHeight = document.documentElement.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight;
        let scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

        if((documentHeight - clientHeight) <= scrollTop){
                NAVBAR.querySelectorAll('a').forEach(a => {
                        a.classList.remove('active');
                        if (a.getAttribute('href').substring(1) === 'contact') {
                                a.classList.add('active');
                        }
                })
        }
}


// =================================== modal ============================

const BUTTON = document.getElementById('submit');
const CLOSE_BUTTON = document.getElementById('close-btn');

BUTTON.addEventListener('click', (event) => {
        event.preventDefault();
        const subject = document.getElementById('subject').value.toString();
        const description = document.getElementById('describe').value.toString();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const regExp = /^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i;
        let formTrue = false;
        let fieldName = document.getElementById('name');
        let fieldEmail = document.getElementById('email');

        if ( name == '') {
                console.log('Введите имя');
                formTrue = false;
                fieldName.style = 'box-shadow: 0 0 3px 3px red; background-color: white; color: black;';
                fieldName.placeholder = 'Please, input your name...';
        }
        else {
                fieldName.style = 'border: none; background-color: #d6564f';
                formTrue = true;
        }

        if ( !regExp.test(email) ) {
                formTrue = false;
                fieldEmail.style = 'box-shadow: 0 0 3px 3px red; background-color: white; color: black;';
                fieldEmail.placeholder = 'Please, input your email...';
        }
        else {
                fieldEmail.style = 'border: none; background-color: #d6564f';
                formTrue = true;
        }
   
        if ( formTrue ) {
                let modal = document.getElementById('modal');
                modal.classList.remove('hidden');

                if (subject == '') {
                        document.getElementById('theme').innerText = 'Without subject';
                } else {
                        document.getElementById('theme').innerText = `Subject: ${subject}`;
                }

                if (description == '') {
                        document.getElementById('description').innerText = 'Without description';
                }
                else {
                        document.getElementById('description').innerText = `Description: ${description}`;
                }
        }
});

CLOSE_BUTTON.addEventListener('click', (event) => {
        let modal = document.getElementById('modal');
        modal.classList.add('hidden');
        document.getElementById('feedback').reset();
});

// ====================================== on/off phone button ===============================

const VERTICAL_PHONE = document.getElementById('black-screen-vertical');
const HORIZONTAL_PHONE = document.getElementById('black-screen-horizontal');
const VERTICAL_PHONE_BUTTON = document.getElementById('phone-button-vertical');
const HORIZONTAL_PHONE_BUTTON = document.getElementById('phone-button-horizontal');

VERTICAL_PHONE_BUTTON.addEventListener('click', (event) => {
        let blackScreenVertical = document.getElementById('black-screen-vertical');
        if (blackScreenVertical.classList == 'hidden') {
                blackScreenVertical.classList.remove('hidden');
        }
        else  if (blackScreenVertical.classList !== 'hidden') {
                blackScreenVertical.classList.add('hidden');
        }
});

HORIZONTAL_PHONE_BUTTON.addEventListener('click', (event) => {
        let blackScreenHorizontal = document.getElementById('black-screen-horizontal');
        if (blackScreenHorizontal.classList == 'hidden') {
                blackScreenHorizontal.classList.remove('hidden');
        }
        else  if (blackScreenHorizontal.classList !== 'hidden') {
                blackScreenHorizontal.classList.add('hidden');
        }
});

// ==================================== slider ==============================
const PREV_BTN = document.getElementsByClassName('prev');
const NEXT_BTN = document.getElementsByClassName('next');
let slides = document.querySelectorAll(".slideItem");


let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
        slides.forEach(el => el.classList.add('back'));
        showSlides(slideIndex += 1);
}

function minusSlide() {
        slides.forEach(el => el.classList.remove('back'));
        showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
        showSlides(slideIndex = n);
}

function showSlides(n) {
        let i;

        if (n > slides.length) {
                slideIndex = 1;
        }
        if (n < 1) {
                slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "inline-flex";
}


// ========

// ======================== active images ======================

const IMAGES = document.getElementById('portfolio-images');

IMAGES.addEventListener('click', (event) => {
        let selectedImage = event.target;
        IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('selected'));
        selectedImage.classList.add('selected');
});


const TABBAR = document.getElementById('portfolio-nav');

TABBAR.addEventListener('click', (event) => {
        TABBAR.querySelectorAll('button').forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
});

// ============================= move portfolio images =======================

const W_DESIGN_TAB = document.getElementById('w-design');
const G_DESIGN_TAB = document.getElementById('g-design');
const ARTWORK_TAB = document.getElementById('artwork');
const ALL_TAB = document.getElementById('all');

const W_DESIGN_IMGS = document.getElementsByClassName('w-design-img');
const G_DESIGN_IMGS = document.getElementsByClassName('g-design-img');
const ARTWORK_IMGS = document.getElementsByClassName('artwork-img');
const ALL_IMGS = document.getElementsByClassName('portfolio-image-img');


W_DESIGN_TAB.addEventListener('click', (event) => {
        IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('selected'));
        for (i = 0; i <= 3; i++) {
                W_DESIGN_IMGS[i].src = `./assets/img/Pic-${i+1}.png`;
                W_DESIGN_IMGS[i].alt = `Pic-${i+1}`;
                W_DESIGN_IMGS[i].id = `Pic-${i+1}`;
        }
        for (i = 0; i <= 3; i++) {
                G_DESIGN_IMGS[i].src = `./assets/img/Pic-${i+5}.png`;
                G_DESIGN_IMGS[i].alt = `Pic-${i+5}`;
                G_DESIGN_IMGS[i].id = `Pic-${i+5}`;
        }
        for (i = 0; i <= 3; i++) {
                ARTWORK_IMGS[i].src = `./assets/img/Pic-${i+9}.png`;
                ARTWORK_IMGS[i].alt = `Pic-${i+9}`;
                ARTWORK_IMGS[i].id = `Pic-${i+9}`;
        }
});

G_DESIGN_TAB.addEventListener('click', (event) => {
        IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('selected'));
        for (i = 0; i <= 3; i++) {
                G_DESIGN_IMGS[i].src = `./assets/img/Pic-${i+1}.png`;
                G_DESIGN_IMGS[i].alt = `Pic-${i+1}`;
                G_DESIGN_IMGS[i].id = `Pic-${i+1}`;
        }
        for (i = 0; i <= 3; i++) {
                ARTWORK_IMGS[i].src = `./assets/img/Pic-${i+5}.png`;
                ARTWORK_IMGS[i].alt = `Pic-${i+5}`;
                ARTWORK_IMGS[i].id = `Pic-${i+5}`;
        }
        for (i = 0; i <= 3; i++) {
                W_DESIGN_IMGS[i].src = `./assets/img/Pic-${i+9}.png`;
                W_DESIGN_IMGS[i].alt = `Pic-${i+9}`;
                W_DESIGN_IMGS[i].id = `Pic-${i+9}`;
        }
});

ARTWORK_TAB.addEventListener('click', (event) => {
        IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('selected'));
        for (i = 0; i <= 3; i++) {
                ARTWORK_IMGS[i].src = `./assets/img/Pic-${i+1}.png`;
                ARTWORK_IMGS[i].alt = `Pic-${i+1}`;
                ARTWORK_IMGS[i].id = `Pic-${i+1}`;
        }
        for (i = 0; i <= 3; i++) {
                W_DESIGN_IMGS[i].src = `./assets/img/Pic-${i+5}.png`;
                W_DESIGN_IMGS[i].alt = `Pic-${i+5}`;
                W_DESIGN_IMGS[i].alt = `Pic-${i+5}`;
                W_DESIGN_IMGS[i].id = `Pic-${i+5}`;
        }
        for (i = 0; i <= 3; i++) {
                G_DESIGN_IMGS[i].src = `./assets/img/Pic-${i+9}.png`;
                G_DESIGN_IMGS[i].alt = `Pic-${i+9}`;
                G_DESIGN_IMGS[i].id = `Pic-${i+9}`;
        }
});

ALL_TAB.addEventListener('click', (event) => {
        IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('selected'));
        for (i = 0; i <= 11; i++) {
                ALL_IMGS[i].src = `./assets/img/Pic-${i+1}.png`;
                ALL_IMGS[i].alt = `Pic-${i+1}`;
                ALL_IMGS[i].id = `Pic-${i+1}`;
        }
});

// =================== toggle ===================

const TOGGLE = document.getElementById('toggle-icon');
const NAVBAR_TOGGLE = document.getElementById('navbar-toggle');
const RESPONSIVE_MENU = document.getElementById('responsive-menu');
const LOGO = document.getElementById('logo');
const LOGO_TOGGLE = document.getElementById('logo-toggle');


TOGGLE.addEventListener('click', (event) => {
        closeNavbarToggle();
        event.target.classList.toggle('active');
});

function closeNavbarToggle() {
        TOGGLE.classList.toggle('active');
        RESPONSIVE_MENU.classList.toggle('hidden');
        NAVBAR_TOGGLE.classList.toggle('open');
        event.target.classList.toggle('active');
        LOGO.classList.toggle('invisible');
        LOGO_TOGGLE.classList.toggle('invisible');
};

