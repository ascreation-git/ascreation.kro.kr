// Recruit Javascript

/* Scroll Animation Script */
const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        const target = entry.target;
        if (target.classList.contains('intro-section')) {
            target.querySelector('.intro-subtitle').classList.add('animation-up');
            target.querySelector('.intro-title').classList.add('animation-up');
            target.querySelector('.intro-arrow').classList.add('animation-fade');
        } else if (target.classList.contains('before-contents-section')) {
            target.querySelector('.before-contents-title').classList.add('animation-down');
            target.querySelector('.checklist-box').classList.add('animation-right');
        } else if (target.classList.contains('contents-section')) {
            target.querySelector('.contents-title').classList.add('animation-down');
            target.querySelector('.contents-subtitle').classList.add('animation-down');
            target.querySelector('.contents-jobs').classList.add('animation-up');
        }
        }
    });
};

const observer = new IntersectionObserver(intersectionCallback, {
    threshold: 0.46,
});

const introSection = document.querySelector('.intro-section');
const beforeContentsSection = document.querySelector('.before-contents-section');
const contentsSection = document.querySelector('.contents-section');


if (introSection) {
    observer.observe(introSection);
}

if (beforeContentsSection) {
    observer.observe(beforeContentsSection);
}

if (contentsSection) {
    observer.observe(contentsSection);
}
/* // Scroll Animation Script */

/* Check Available Recruit Script */
function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
}

function updateStatus() {
    const currentDate = getCurrentDate();
    const jobApplyBtns = document.querySelectorAll('.job-apply-btn');
    const autoAvailableElements = document.querySelectorAll('.check-available[auto-available]');
    const jobAmountElement = document.querySelector('.job-amount');
    let availableCount = 0;

    // Loop through each job-apply-btn
    jobApplyBtns.forEach((jobApplyBtn, index) => {
        const autoAvailableValue = autoAvailableElements[index].getAttribute('auto-available');
        const checkAvailableElement = autoAvailableElements[index];
        
        if (currentDate > autoAvailableValue) {
            checkAvailableElement.classList.add('unavailable');
            checkAvailableElement.textContent = '현재 채용이 진행 중이지 않습니다.';
            jobApplyBtn.classList.add('job-apply-btn-disabled');
            jobApplyBtn.disabled = true;
            jobApplyBtn.textContent = '❌ 채용 지원 불가';
        } else {
            checkAvailableElement.classList.remove('unavailable');
            checkAvailableElement.classList.add('available');
            checkAvailableElement.textContent = '현재 채용이 진행 중입니다.';
            jobApplyBtn.classList.remove('job-apply-btn-disabled');
            jobApplyBtn.disabled = false;
            jobApplyBtn.textContent = '🔍 채용 자세히 알아보기';
            availableCount++;
        }
    });

    if (jobAmountElement) {
        jobAmountElement.textContent = `${availableCount}개`;
    }
}

document.addEventListener('DOMContentLoaded', updateStatus);

setInterval(updateStatus, 1000 * 60 * 60 * 24);
/* // Check Available Recruit Script */