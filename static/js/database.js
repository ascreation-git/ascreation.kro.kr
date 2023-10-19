// Apply Form Database Javascript

/* Form Script */
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

// Validate Form
const form = document.getElementById("applyform");
const errorAlert = document.querySelector(".alert.error");
  
form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const nameValue = getValue('name');
    const birthdayValue = getValue('birthday');
    const genderValue = getValue('gender-result');
    const discordValue = getValue('discord');
    const emailValue = getValue('email');
    const youtubeValue = getValue('youtube');
    const introduceValue = getValue('introduce');
    const checkboxValue = getValue('checkbox-result');
    let isError = false;
  
    if (
      nameValue.trim() === "" ||
      birthdayValue.trim() === "" ||
      genderValue.trim() === "" ||
      discordValue.trim() === "" ||
      emailValue.trim() === "" ||
      youtubeValue.trim() === "" ||
      introduceValue.trim() === "" ||
      checkboxValue === "false" ||
      (genderValue !== "남성" && genderValue !== "여성") ||
      (birthdayValue.length !== 6 && birthdayValue.length !== 8) ||
      !isNumeric(birthdayValue) ||
      !isValidEmail(emailValue) ||
      !youtubeValue.includes("youtube.com")
    ) {
      errorAlert.style.visibility = "visible";
      errorAlert.style.opacity = "1";
      setTimeout(function () {
        errorAlert.style.opacity = "0"
        errorAlert.style.visibility = "hidden"
      }, 5000);
      isError = true;
    } else {
      errorAlert.style.opacity = "0"
      errorAlert.style.visibility = "hidden"
    }
  
    if (!isError) {
      formSubmit(event);
    }
});

function isNumeric(value) {
  return /^\d+$/.test(value);
}

function isValidEmail(email) {
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

// Close Alert
const alertClose = document.querySelectorAll('.alert-close-content');

alertClose.forEach(function(element) {
  element.addEventListener("click", function (event) {
    const alerts = document.querySelectorAll('.alert');

    alerts.forEach(function(alert) {
      alert.style.setProperty("opacity", "0", "important");
      alert.style.setProperty("visibility", "hidden", "important");
    });
  });
});
  
// Submit Form
function formSubmit(event) {
    event.preventDefault();

    const correctAlert = document.querySelector('.alert.correct');
    const name = getValue('name');
    const birthday = getValue('birthday');
    const gender = getValue('gender-result');
    const discord = getValue('discord');
    const email = getValue('email');
    const youtube = getValue('youtube');
    const platform = getValue('platform');
    const introduce = getValue('introduce');
    const privacy = getValue('checkbox-result');
    const timestamp = new Date().toString();

    sendData(name, birthday, gender, discord, email, youtube, platform, introduce, privacy, timestamp);

    correctAlert.style.visibility = "visible";
    correctAlert.style.opacity = "1";

    setTimeout(() => {
      correctAlert.style.opacity = "0";
      correctAlert.style.visibility = "hidden";
    }, 5000);

    document.getElementById("applyform").reset();
    document.querySelector('.radio').classList.remove('radioactive')
}

// Send Data
const sendData = (name, birthday, gender, discord, email, youtube, platform, introduce, privacy, timestamp) => {
    var newForm = applyFormDatabase.push();
  
    newForm.set({
      이름: name,
      생년월일: birthday,
      성별: gender,
      디스코드: discord,
      이메일: email,
      유튜브: youtube,
      플랫폼: platform,
      자기소개: introduce,
      개인정보처리동의: privacy,
      제출시간: timestamp,
    });
  };

// Get Input Value Function
const getValue = (id => {
    return document.getElementById(id).value;
})
/* // Form Script */