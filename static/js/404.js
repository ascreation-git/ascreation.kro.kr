// 404 Javascript

/* Scroll Animation Script */
const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        const target = entry.target;
        if (target.classList.contains('contents-section')) {
            target.querySelector('.contents-item').classList.add('animation-up');
        }
        }
    });
};

const observer = new IntersectionObserver(intersectionCallback, {
    threshold: 0.02,
});

const contentsSection = document.querySelector('.contents-section');

if (contentsSection) {
    observer.observe(contentsSection);
}
/* // Scroll Animation Script */