// Article Javascript

/* Scroll Animation Script */
const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        const target = entry.target;
        if (target.classList.contains('title-wrap')) {
            target.querySelector('.information').classList.add('animation-down');
            target.querySelector('.title').classList.add('animation-left');
            target.querySelector('.title-line').classList.add('animation-right');
        } else if (target.classList.contains('article-contents')) {
            target.querySelector('.article-contents-wrap').classList.add('animation-left');
        } else if (target.classList.contains('btn-wrap')) {
            target.querySelector('.list-btn').classList.add('animation-left');
        }
        }
    });
};

const observer = new IntersectionObserver(intersectionCallback, {
    threshold: 0.02,
});

const titleSection = document.querySelector('.title-wrap');
const contentsSection = document.querySelector('.article-contents');
const buttonSection = document.querySelector('.btn-wrap');


if (titleSection) {
    observer.observe(titleSection);
}

if (contentsSection) {
    observer.observe(contentsSection);
}

if (buttonSection) {
    observer.observe(buttonSection);
}
/* // Scroll Animation Script */