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

/* Pagination Script */
const pageNumbersElement1 = document.querySelector('.page-numbers');
const items1 = document.querySelectorAll('.profile-grid');
const itemsPerPage1 = 3;
let currentPage1 = 1;

function updatePage1() {
    items1.forEach((item, index) => {
        const isItemInPage = index < currentPage1 * itemsPerPage1 && index >= (currentPage1 - 1) * itemsPerPage1;
        item.style.display = isItemInPage ? 'flex' : 'none';
    });
}

function updatePageNumbers1() {
    pageNumbersElement1.innerHTML = '';

    const totalPages1 = Math.ceil(items1.length / itemsPerPage1);

    for (let i = 1; i <= totalPages1; i++) {
        const pageNumberElement = document.createElement('span');
        pageNumberElement.textContent = i;
        pageNumberElement.classList.add('page-number');
        if (i === currentPage1) {
            pageNumberElement.classList.add('active');
        }
        pageNumbersElement1.appendChild(pageNumberElement);
    }
}

pageNumbersElement1.addEventListener('click', (event) => {
    if (event.target.classList.contains('page-number')) {
        currentPage1 = parseInt(event.target.textContent);
        updatePage1();
        updatePageNumbers1();
    }
});

updatePage1();
updatePageNumbers1();
/* // Pagination Script */