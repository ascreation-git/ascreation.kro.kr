// Jobs Javascript

/* Scroll Animation Script */
const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        const target = entry.target;
        if (target.classList.contains('title-wrap')) {
            target.querySelector('.information').classList.add('animation-down');
            target.querySelector('.title').classList.add('animation-left');
            target.querySelector('.title-line').classList.add('animation-right');
        } else if (target.classList.contains('job-contents')) {
            target.querySelector('.job-contents-wrap').classList.add('animation-left');
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
const contentsSection = document.querySelector('.job-contents');
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

/* Auto Available Status */
function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
}

function updateStatus() {
    const elements = document.querySelectorAll('.check-available');
    const currentDate = getCurrentDate();

    elements.forEach((element) => {
        const availableDate = element.getAttribute('auto-available');

        if (currentDate > availableDate) {
            element.textContent = '지원 불가';
            element.classList.add('unavailable');
            element.classList.remove('available');
        } else {
            element.textContent = '채용 중';
            element.classList.add('available');
            element.classList.remove('unavailable');
        }

        const recruitBtn = document.querySelector('.recruit-write-btn');
        if (recruitBtn && recruitBtn.classList.contains('recruit-write-btn')) {
            if (currentDate > availableDate) {
                recruitBtn.classList.add('recruit-btn-disabled');
                recruitBtn.disabled = true;
                recruitBtn.textContent = '❌ 지원 불가';
            } else {
                recruitBtn.classList.remove('recruit-btn-disabled');
                recruitBtn.disabled = false;
                recruitBtn.textContent = '✏️ 채용 지원하기';
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', updateStatus);

setInterval(updateStatus, 1000 * 60 * 60 * 24);
/* // Auto Available Status */
