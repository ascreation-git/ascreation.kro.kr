// Home Javascript

/* Scroll Animation Script */
const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        const target = entry.target;
        if (target.classList.contains('intro-section')) {
            target.querySelector('.title').classList.add('animation-up');
            target.querySelector('.subtitle').classList.add('animation-up');
            target.querySelector('.mobile-button').classList.add('animation-up');
        } else if (target.classList.contains('mobile-intro')) {
            target.querySelector('.mobile-title').classList.add('animation-down');
        } else if (target.classList.contains('about-section')) {
            target.querySelector('.about-text-wrap').classList.add('animation-up');
            target.querySelector('.about-contents').classList.add('animation-down');
        } else if (target.classList.contains('creators-section')) {
            target.querySelector('.carousel').classList.add('animation-down');
            target.querySelector('.creators-text-wrap').classList.add('animation-left');
        } else if (target.classList.contains('video-section')) {
            target.querySelector('.video-text-wrap').classList.add('animation-right');
            target.querySelector('.video-contents-wrap').classList.add('animation-down');
          }
        }
    });
};

const observer = new IntersectionObserver(intersectionCallback, {
    threshold: 0.2,
});

const introSection = document.querySelector('.intro-section');
const mobileIntro = document.querySelector('.mobile-intro');
const aboutSection = document.querySelector('.about-section');
const contentsSection = document.querySelector('.contents-section');
const creatorsSection = document.querySelector('.creators-section');
const videoSection = document.querySelector('.video-section');

if (introSection) {
    observer.observe(introSection);
}

if (mobileIntro) {
    observer.observe(mobileIntro);
}

if (aboutSection) {
    observer.observe(aboutSection);
}

if (contentsSection) {
    observer.observe(contentsSection);
}

if (creatorsSection) {
    observer.observe(creatorsSection);
}

if (videoSection) {
    observer.observe(videoSection);
}

window.addEventListener('DOMContentLoaded', () => {
    const buttonLines = document.querySelectorAll('.button-line');
    buttonLines.forEach((line) => {
        line.style.backgroundColor = '#111';
});
});

const contentsObserver = new IntersectionObserver((entries) => {
    const buttonLines = document.querySelectorAll('.button-line');
    entries.forEach((entry) => {
        buttonLines.forEach((line) => {
            line.style.backgroundColor = entry.isIntersecting ? '#fdfdfd' : '#111';
        });
});
}, { threshold: 0.05 });

if (contentsSection) {
    contentsObserver.observe(contentsSection);
}
/* // Scroll Animation Script */

/* Carousel */
const carousel = document.querySelector('.carousel');
const slides = carousel.querySelector('.slides-wrap');
const slideList = carousel.querySelectorAll('.slide');
const prevButton = carousel.querySelector('.prev-button');
const nextButton = carousel.querySelector('.next-button');

let currentIndex = 0;

function goToSlide(index) {
  currentIndex = (index + slideList.length) % slideList.length;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});
/* // Carousel */