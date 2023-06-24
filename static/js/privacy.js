// Privacy Javascript

/* Scroll Animation Script */
const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        const target = entry.target;
        if (target.classList.contains('intro-section')) {
            target.querySelector('.title').classList.add('animation-down');
            target.querySelector('.subtitle').classList.add('animation-down');
            target.querySelector('.button').classList.add('animation-up');
        } else if (target.classList.contains('contents-section')) {
            target.querySelector('.contents-wrap').classList.add('animation-right');
        }
        }
    });
};

const observer = new IntersectionObserver(intersectionCallback, {
    threshold: 0.01,
});

const introSection = document.querySelector('.intro-section');
const contentsSection = document.querySelector('.contents-section');


if (introSection) {
    observer.observe(introSection);
}

if (contentsSection) {
    observer.observe(contentsSection);
}
/* // Scroll Animation Script */