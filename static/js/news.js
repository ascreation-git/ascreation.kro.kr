// News Javascript

/* Scroll Animation Script */
const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        const target = entry.target;
        if (target.classList.contains('intro-section')) {
            target.querySelector('.title').classList.add('animation-left');
            target.querySelector('.subtitle').classList.add('animation-right');
            target.querySelector('.line').classList.add('animation-down');
            target.querySelector('.button').classList.add('animation-up');
        } else if (target.classList.contains('contents-section')) {
            target.querySelector('.before-contents').classList.add('animation-down');
            target.querySelector('.contents-item').classList.add('animation-up');
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

/* Pagination Script */
// Pagination 1
const pageNumbersElement1 = document.querySelector('.page-numbers-1');
const newsItems1 = document.querySelectorAll('.link-1');
const itemsPerPage1 = 3;
let currentPage1 = 1;

function updatePage1() {
    newsItems1.forEach((item, index) => {
        const isItemInPage = index < currentPage1 * itemsPerPage1 && index >= (currentPage1 - 1) * itemsPerPage1;
        item.style.display = isItemInPage ? 'flex' : 'none';
    });
}

function updatePageNumbers1() {
    pageNumbersElement1.innerHTML = '';

    const totalPages1 = Math.ceil(newsItems1.length / itemsPerPage1);

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

// Pagination 2
const pageNumbersElement2 = document.querySelector('.page-numbers-2');
const newsItems2 = document.querySelectorAll('.link-2');
const itemsPerPage2 = 3;
let currentPage2 = 1;

function updatePage2() {
    newsItems2.forEach((item, index) => {
        const isItemInPage = index < currentPage2 * itemsPerPage2 && index >= (currentPage2 - 1) * itemsPerPage2;
        item.style.display = isItemInPage ? 'flex' : 'none';
    });
}

function updatePageNumbers2() {
    pageNumbersElement2.innerHTML = '';

    const totalPages2 = Math.ceil(newsItems2.length / itemsPerPage2);

    for (let i = 1; i <= totalPages2; i++) {
        const pageNumberElement = document.createElement('span');
        pageNumberElement.textContent = i;
        pageNumberElement.classList.add('page-number');
        if (i === currentPage2) {
            pageNumberElement.classList.add('active');
        }
        pageNumbersElement2.appendChild(pageNumberElement);
    }
}

pageNumbersElement2.addEventListener('click', (event) => {
    if (event.target.classList.contains('page-number')) {
        currentPage2 = parseInt(event.target.textContent);
        updatePage2();
        updatePageNumbers2();
    }
});

updatePage2();
updatePageNumbers2();

// Pagination 3
const pageNumbersElement3 = document.querySelector('.page-numbers-3');
const newsItems3 = document.querySelectorAll('.link-3');
const itemsPerPage3 = 3;
let currentPage3 = 1;

function updatePage3() {
    newsItems3.forEach((item, index) => {
        const isItemInPage = index < currentPage3 * itemsPerPage3 && index >= (currentPage3 - 1) * itemsPerPage3;
        item.style.display = isItemInPage ? 'flex' : 'none';
    });
}

function updatePageNumbers3() {
    pageNumbersElement3.innerHTML = '';

    const totalPages3 = Math.ceil(newsItems3.length / itemsPerPage3);

    for (let i = 1; i <= totalPages3; i++) {
        const pageNumberElement = document.createElement('span');
        pageNumberElement.textContent = i;
        pageNumberElement.classList.add('page-number');
        if (i === currentPage3) {
            pageNumberElement.classList.add('active');
        }
        pageNumbersElement3.appendChild(pageNumberElement);
    }
}

pageNumbersElement3.addEventListener('click', (event) => {
    if (event.target.classList.contains('page-number')) {
        currentPage3 = parseInt(event.target.textContent);
        updatePage3();
        updatePageNumbers3();
    }
});

updatePage3();
updatePageNumbers3();
/* // Pagination Script */