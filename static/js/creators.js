// Creators Javascript

/* Scroll Animation Script */
const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        const target = entry.target;
        if (target.classList.contains('intro-section')) {
            target.querySelector('.subtitle').classList.add('animation-down');
            target.querySelector('.title').classList.add('animation-up');
        } else if (target.classList.contains('before-contents-section')) {
            target.querySelector('.before-contents-title').classList.add('animation-left');
        } else if (target.classList.contains('contents-wrap')) {
            target.querySelector('.contents-title').classList.add('animation-down');
            target.querySelector('.contents-line').classList.add('animation-down');
            target.querySelector('.profile-contents-wrap').classList.add('animation-right');
        }
        }
    });
};

const observer = new IntersectionObserver(intersectionCallback, {
    threshold: 0.02,
});

const introSection = document.querySelector('.intro-section');
const beforeContentsSection = document.querySelector('.before-contents-section');
const contentsWrap = document.querySelector('.contents-wrap');


if (introSection) {
    observer.observe(introSection);
}

if (beforeContentsSection) {
    observer.observe(beforeContentsSection);
}

if (contentsWrap) {
    observer.observe(contentsWrap);
}
/* // Scroll Animation Script */