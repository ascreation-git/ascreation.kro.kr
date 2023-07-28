// Recruit Javascript

/* Scroll Animation Script */
const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        const target = entry.target;
        if (target.classList.contains('intro-section')) {
            target.querySelector('.intro-subtitle').classList.add('animation-right');
            target.querySelector('.intro-title').classList.add('animation-right');
            target.querySelector('.recruit-icon').classList.add('animation-left');
            target.querySelector('.intro-button').classList.add('animation-down');
        } else if (target.classList.contains('contents-section')) {
            target.querySelector('.before-contents-animated-title').classList.add('animation-left');
            target.querySelector('.job-amount').classList.add('animation-down');
            target.querySelector('.job-list').classList.add('animation-left');
        }
        }
    });
};

const observer = new IntersectionObserver(intersectionCallback, {
    threshold: 0.46,
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

/* Check Available Recruit Script */
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
  
    const autoAmount = document.querySelector('.auto-amount');
    let availableCount = 0;
  
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
        availableCount++;
      }
    });
  
    if (autoAmount) {
      autoAmount.textContent = `${availableCount}개`;
    }
}
  
document.addEventListener('DOMContentLoaded', updateStatus);
  
setInterval(updateStatus, 1000 * 60 * 60 * 24);  
/* // Check Available Recruit Script */