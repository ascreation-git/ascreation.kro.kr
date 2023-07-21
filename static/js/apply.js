// Apply Javascript

/* Scroll Animation Script */
const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        const target = entry.target;
        if (target.classList.contains('intro-section')) {
            target.querySelector('.subtitle').classList.add('animation-down');
            target.querySelector('.title').classList.add('animation-right');
        } else if (target.classList.contains('contents-section')) {
            target.querySelector('.form-title').classList.add('animation-right');
            target.querySelector('.applyform').classList.add('animation-down');
        }
        }
    });
};

const observer = new IntersectionObserver(intersectionCallback, {
    threshold: 0.02,
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

/* Form Script */
// Gender Click
const male = document.querySelector('#male')
const female = document.querySelector('#female')
const maleSelector = document.querySelector('.male-selector');
const femaleSelector = document.querySelector('.female-selector');
const genderResult = document.querySelector('.gender-result')

maleSelector.addEventListener("click", function(){
    maleSelector.classList.add("radioactive");
    femaleSelector.classList.remove("radioactive");

    genderResult.value = male.value;
});

femaleSelector.addEventListener("click", function(){
    femaleSelector.classList.add("radioactive");
    maleSelector.classList.remove("radioactive");

    genderResult.value = female.value;
});

// Privacy Agree 
function checboxCheck() {
    const checkboxResult = document.querySelector('.checkbox-result');
    const checkbox = document.querySelector('.privacy-checkbox');
    const checked = checkbox.checked;

    checkboxResult.value = checked;
}
/* // Form Script */