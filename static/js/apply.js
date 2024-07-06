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
// Gender
const male = document.querySelector('#male')
const female = document.querySelector('#female')
const maleSelector = document.querySelector('.male-selector');
const femaleSelector = document.querySelector('.female-selector');
const genderResult = document.querySelector('.gender-result')

maleSelector.addEventListener("click", function(){
    maleSelector.classList.add("radioactive");
    femaleSelector.classList.remove("radioactive");

    genderResult.value = "남성";
});

femaleSelector.addEventListener("click", function(){
    femaleSelector.classList.add("radioactive");
    maleSelector.classList.remove("radioactive");

    genderResult.value = "여성";
});

// Privacy Agree 
function checboxCheck() {
    const checkboxResult = document.querySelector('.checkbox-result');
    const checkbox = document.querySelector('.privacy-checkbox');

    if(checkbox.checked) {
        checkboxResult.value = "동의"
    } else {
        checkboxResult.value = "동의 안 함"
    }
}

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDS8rNQXK3l_JB6oFj9XIRazmTeB7igdok",
    authDomain: "applyform-ascreation.firebaseapp.com",
    databaseURL: "https://applyform-ascreation-default-rtdb.firebaseio.com",
    projectId: "applyform-ascreation",
    storageBucket: "applyform-ascreation.appspot.com",
    messagingSenderId: "803085101536",
    appId: "1:803085101536:web:b4184612b48f4c8d36e385"
  };

firebase.initializeApp(firebaseConfig);

const applyFormDatabase = firebase.database().ref('ApplyForm-Data');

// Get Input Value Function
const getValue = (id => {
    return document.getElementById(id).value;
})

// Validate Form
const form = document.getElementById("applyform");
const errorAlert = document.querySelector(".alert.error");
var setTimeoutID = null;

form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Input Constant Variable
    const nameInput = document.querySelector(".name");
    const birthdayInput = document.querySelector(".birthday");
    const genderInput = document.querySelector(".gender-focus");
    const genderRadio = document.querySelectorAll(".radio");
    const discordInput = document.querySelector(".discord");
    const emailInput = document.querySelector(".email");
    const opsnsInput = document.querySelector(".opsns");
    const introduceInput = document.querySelector(".introduce");
    const checkboxInput = document.querySelector(".privacy");
    const checkbox = document.querySelector(".check");
    const checkboxText = document.querySelector(".privacy-description");
    
    // Input Value Constant Variable
    const nameValue = getValue('name');
    const birthdayValue = getValue('birthday');
    const genderValue = getValue('gender-result');
    const discordValue = getValue('discord');
    const emailValue = getValue('email');
    const opsnsValue = getValue('opsns');
    const introduceValue = getValue('introduce');
    const checkboxValue = getValue('checkbox-result');
    
    // Error Variable
    let isError = false;

    if (
        nameValue.trim() === "" ||
        birthdayValue.trim() === "" ||
        genderValue.trim() === "" ||
        discordValue.trim() === "" ||
        emailValue.trim() === "" ||
        opsnsValue.trim() === "" ||
        introduceValue.trim() === "" ||
        checkboxValue !== "동의" ||
        (genderValue !== "남성" && genderValue !== "여성") ||
        (birthdayValue.length !== 6 && birthdayValue.length !== 8) ||
        !isNumberic(birthdayValue) ||
        !isValidEmail(emailValue) ||
        introduceValue.length < 50
    ) {
        errorAlert.style.visibility = "visible";
        errorAlert.style.opacity = "1";
        setTimeoutID = setTimeout(function () {
            errorAlert.style.opacity = "0"
            errorAlert.style.visibility = "hidden"
        }, 5000);
        isError = true;
    } else {
        errorAlert.style.opacity = "0"
        errorAlert.style.visibility = "hidden"
    }
    
    // Insuccess Input Error
    function focusAndSetStyle(element) {
        const commonBorderStyle = "solid 1px #ff4e4e";
        element.focus()
        element.style.border = commonBorderStyle;
    }

    if(nameValue.trim() === "") {
        focusAndSetStyle(nameInput)
    } else if(
        birthdayValue.trim() === "" && 
        birthdayValue.length !== 6 && birthdayValue.length !== 8 || 
        !isNumberic(birthdayValue)
    ) {
        focusAndSetStyle(birthdayInput)
    } else if(genderValue !== "남성" && genderValue !== "여성") {
        genderInput.focus();
        genderRadio.forEach(radio => {
            radio.style.border = "solid 1px #ff4e4e";
        });
        genderRadio[0].style.borderRight = "none";
    } else if(discordValue.trim() === "") {
        focusAndSetStyle(discordInput)
    } else if(emailValue.trim() === "" || !isValidEmail(emailValue)) {
        focusAndSetStyle(emailInput)
    } else if(opsnsValue.trim() === "") {
        focusAndSetStyle(opsnsInput)
    } else if(introduceValue.trim() === "" || introduceValue.length < 50) {
        focusAndSetStyle(introduceInput)
    } else if(checkboxValue !== "동의") {
        focusAndSetStyle(checkboxInput);
        checkbox.style.border = "solid 1px #ff4e4e";
        checkboxText.style.color = "#ff4e4e";
    }

    if (!isError) {
        formSubmit(event);
    }
});

// Live Validate
// Due to "Else If" Error, New Variable Is Declared Outside of Form Submit Function.
// Input Constant Variable
const nameInput = document.querySelector(".name");
const birthdayInput = document.querySelector(".birthday");
const genderInput = document.querySelector(".gender-focus");
const genderRadio = document.querySelectorAll(".radio");
const discordInput = document.querySelector(".discord");
const emailInput = document.querySelector(".email");
const opsnsInput = document.querySelector(".opsns");
const introduceInput = document.querySelector(".introduce");
const checkboxInput = document.querySelector(".privacy");
const checkboxShape = document.querySelector(".check");
const checkbox = document.querySelector(".privacy-checkbox");
const checkboxText = document.querySelector(".privacy-description");

// Input Value Constant Variable
const nameValue = getValue('name');
const birthdayValue = getValue('birthday');
const genderValue = getValue('gender-result');
const discordValue = getValue('discord');
const emailValue = getValue('email');
const opsnsValue = getValue('opsns');
const introduceValue = getValue('introduce');
const checkboxValue = getValue('checkbox-result');

nameInput.addEventListener('input', function (e) {
    var nameValue = e.target.value;

    if(nameValue.trim() === "") {
        nameInput.style.border = "solid 1px #ff4e4e";
    } else {
        nameInput.style.border = "solid 1px #4e4e4e";
    }
});

birthdayInput.addEventListener('input', function (e) {
    var birthdayValue = e.target.value;
  
    if(
        birthdayValue.trim() === "" && 
        birthdayValue.length !== 6 || birthdayValue.length !== 8 ||
        !isNumberic(birthdayValue)
    ) {
        birthdayInput.style.border = "solid 1px #ff4e4e";
    } else {
        birthdayInput.style.border = "solid 1px #4e4e4e";
    }
});

genderRadio.forEach(radio => {
    radio.addEventListener('click', function () {
        genderRadio.forEach(radio => {
            if(genderValue !== "남성" && genderValue !== "여성") {
                radio.style.border = "solid 1px #4e4e4e";
            } else {
                radio.style.border = "solid 1px #ff4e4e";
            }
        });
    });
});

discordInput.addEventListener('input', function (e) {
    var discordValue = e.target.value;

    if(discordValue.trim() === "") {
        discordInput.style.border = "solid 1px #ff4e4e";
    } else {
        discordInput.style.border = "solid 1px #4e4e4e";
    }
});

emailInput.addEventListener('input', function (e) {
    var emailValue = e.target.value;

    if(emailValue.trim() === "" || !isValidEmail(emailValue)) {
        emailInput.style.border = "solid 1px #ff4e4e";
    } else {
        emailInput.style.border = "solid 1px #4e4e4e";
    }
});

opsnsInput.addEventListener('input', function (e) {
    var opsnsValue = e.target.value;

    if(opsnsValue.trim() === "") {
        opsnsInput.style.border = "solid 1px #ff4e4e";
    } else {
        opsnsInput.style.border = "solid 1px #4e4e4e";
    }
});

introduceInput.addEventListener('input', function (e) {
    var introduceValue = e.target.value;

    if(introduceValue.trim() === "" || introduceValue.length < 50) {
        introduceInput.style.border = "solid 1px #ff4e4e";
    } else {
        introduceInput.style.border = "solid 1px #4e4e4e";
    }
});

checkbox.addEventListener('change', function () {
    if(this.checked == false) {
        checkboxInput.style.border = "solid 1px #ff4e4e";
        checkboxShape.style.border = "solid 1px #ff4e4e";
        checkboxText.style.color = "#ff4e4e";
    } else {
        checkboxInput.style.border = "solid 1px #4e4e4e";
        checkboxShape.style.border = "solid 1px #fff";
        checkboxText.style.color = "#fff";
    }
});

// Number Value Validate
function isNumberic(value) {
return /^\d+$/.test(value);
}

// Email Value Validate
function isValidEmail(email) {
var emailRegex = /\S+@\S+\.\S+/;
return emailRegex.test(email);
}

// Close Alert
const alertClose = document.querySelectorAll('.alert-close');

alertClose.forEach(function(element) {
    element.addEventListener("click", function (event) {
        const alerts = document.querySelectorAll('.alert');

        alerts.forEach(function(alert) {
        alert.style.setProperty("opacity", "0", "important");
        alert.style.setProperty("visibility", "hidden", "important");
        });

        clearTimeout(setTimeoutID);
    });
});

// Submit Form
function formSubmit(event) {
    event.preventDefault();

    const successAlert = document.querySelector('.alert.success');
    const name = getValue('name');
    const birthday = getValue('birthday');
    const gender = getValue('gender-result');
    const discord = getValue('discord');
    const email = getValue('email');
    const opsns = getValue('opsns');
    const platform = getValue('platform');
    const introduce = getValue('introduce');
    const privacy = getValue('checkbox-result');
    const timestamp = new Date().toString();

    sendData(name, birthday, gender, discord, email, opsns, platform, introduce, privacy, timestamp);

    successAlert.style.visibility = "visible";
    successAlert.style.opacity = "1";

    setTimeout(() => {
    successAlert.style.opacity = "0";
    successAlert.style.visibility = "hidden";
    }, 5000);

    document.getElementById("applyform").reset();
    document.querySelector('.radio').classList.remove('radioactive')
}

// Send Data
const sendData = (name, birthday, gender, discord, email, opsns, platform, introduce, privacy, timestamp) => {
    var newForm = applyFormDatabase.push();

    newForm.set({
    "0) 이름": name,
    "1) 생년월일": birthday,
    "2) 성별": gender,
    "3) Discord": discord,
    "4) E-Mail": email,
    "5) 운영 중인 SNS": opsns,
    "6) 추가 운영 중인 SNS": platform,
    "7) 자기소개": introduce,
    "8) 개인정보 처리방침 동의": privacy,
    "9) 제출 시간": timestamp,
    });
};
/* // Form Script */