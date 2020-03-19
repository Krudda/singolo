const NAVBAR = document.getElementById('navbar');
// console.log(NAVBAR);

NAVBAR.addEventListener('click', (event) => {
        NAVBAR.querySelectorAll('a').forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
});

// let hasSmoothScroll = 'scrollBehavior' in document.documentElement.style;

// if ( !hasSmoothScroll ) {
//         const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
//         animationTime = 400,
//         framesCount = 20;

//         anchors.forEach(function(item) {
//                 item.addEventListener('click', function(e) {
//                         e.preventDefault();
//                         let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
//                         let scroller = setInterval(function() {
//                                 let scrollBy = coordY / framesCount;
//                                 if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
//                                         window.scrollBy(0, scrollBy);
//                                 } else {
//                                         window.scrollTo(0, coordY);
//                                         clearInterval(scroller);
//                                 }
//                         }, animationTime / framesCount);
//                 });
//         });
// }


// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//         anchor.addEventListener('click', function (e) {
//                 e.preventDefault();
//                 const blockID = anchor.getAttribute('href').substr(1);
        
//                 document.getElementById(blockID).scrollIntoView({
//                         behavior: 'smooth',
//                         block: 'start'
//                 })
//         })
// }

// === scroll =====
const TOP = {
        HEADER: document.getElementById('header'),
        SLIDER: document.getElementById('slider'),
        SERVICES: document.getElementById('services'),
        PORTFOLIO: document.getElementById('portfolio'),
        ABOUT: document.getElementById('about')
};

// console.log(TOP.ABOUT.offsetTop);

document.addEventListener('scroll', onScroll);

function onScroll(event) {
        const currentPosition = window.scrollY;
        // console.log(currentPosition);
        // console.log(document.documentElement.clientHeight);
        // console.log(document.documentElement.scrollHeight);

        for (el in TOP) {
                if ((TOP[el].offsetTop) <= currentPosition && (TOP[el].offsetTop + TOP[el].offsetHeight) > currentPosition ) {
                        NAVBAR.querySelectorAll('a').forEach(a => {
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
                // fieldName.style = 'border: 2px solid red; background-color: lightgray; color: black;';
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

// VERTICAL_PHONE.addEventListener('click', (event) => {
//         let blackScreenVertical = document.getElementById('black-screen-vertical');
//         if (blackScreenVertical.classList == 'hidden') {
//                 blackScreenVertical.classList.remove('hidden');
//         }
//         else  if (blackScreenVertical.classList !== 'hidden') {
//                 blackScreenVertical.classList.add('hidden');
//         }
// });
VERTICAL_PHONE_BUTTON.addEventListener('click', (event) => {
        let blackScreenVertical = document.getElementById('black-screen-vertical');
        if (blackScreenVertical.classList == 'hidden') {
                blackScreenVertical.classList.remove('hidden');
        }
        else  if (blackScreenVertical.classList !== 'hidden') {
                blackScreenVertical.classList.add('hidden');
        }
});
// HORIZONTAL_PHONE.addEventListener('click', (event) => {
//         let blackScreenHorizontal = document.getElementById('black-screen-horizontal');
//         if (blackScreenHorizontal.classList == 'hidden') {
//                 blackScreenHorizontal.classList.remove('hidden');
//         }
//         else  if (blackScreenHorizontal.classList !== 'hidden') {
//                 blackScreenHorizontal.classList.add('hidden');
//         }
// });
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

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideItem");
//     console.log(slides);

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
// ======================== active images ======================

const IMAGES = document.getElementById('portfolio-images');
// console.log(IMAGES);

IMAGES.addEventListener('click', (event) => {
        let selectedImage = event.target;
        IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('selected'));
        selectedImage.classList.add('selected');
});


const TABBAR = document.getElementById('portfolio-nav');
// console.log(TABBAR);

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
        }
        for (i = 0; i <= 3; i++) {
                G_DESIGN_IMGS[i].src = `./assets/img/Pic-${i+5}.png`;
        }
        for (i = 0; i <= 3; i++) {
                ARTWORK_IMGS[i].src = `./assets/img/Pic-${i+9}.png`;
        }
});

G_DESIGN_TAB.addEventListener('click', (event) => {
        IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('selected'));
        for (i = 0; i <= 3; i++) {
                G_DESIGN_IMGS[i].src = `./assets/img/Pic-${i+1}.png`;
        }
        for (i = 0; i <= 3; i++) {
                ARTWORK_IMGS[i].src = `./assets/img/Pic-${i+5}.png`;
        }
        for (i = 0; i <= 3; i++) {
                W_DESIGN_IMGS[i].src = `./assets/img/Pic-${i+9}.png`;
        }
});

ARTWORK_TAB.addEventListener('click', (event) => {
        IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('selected'));
        for (i = 0; i <= 3; i++) {
                ARTWORK_IMGS[i].src = `./assets/img/Pic-${i+1}.png`;
        }
        for (i = 0; i <= 3; i++) {
                W_DESIGN_IMGS[i].src = `./assets/img/Pic-${i+5}.png`;
        }
        for (i = 0; i <= 3; i++) {
                G_DESIGN_IMGS[i].src = `./assets/img/Pic-${i+9}.png`;
        }
});

ALL_TAB.addEventListener('click', (event) => {
        IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('selected'));
        for (i = 0; i <= 11; i++) {
                ALL_IMGS[i].src = `./assets/img/Pic-${i+1}.png`;
        }
});


