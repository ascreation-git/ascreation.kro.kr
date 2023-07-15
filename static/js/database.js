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
const errorAlert = document.querySelector(".error-alert");
  
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
    const errorAlert = document.querySelector(".error-alert");
  
    const isError = false;
  
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
      errorAlert.style.display = "block";
      setTimeout(function () {
        errorAlert.style.display = "none";
      }, 3000);
      isError = true;
    } else {
      errorAlert.style.display = "none";
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
  
// Submit Form
function formSubmit(event) {
    event.preventDefault();

    const name = getValue('name');
    const birthday = getValue('birthday');
    const gender = getValue('gender-result');
    const discord = getValue('discord');
    const email = getValue('email');
    const youtube = getValue('youtube');
    const platform = getValue('platform');
    const introduce = getValue('introduce');
    const privacy = getValue('checkbox-result');

    sendData(name, birthday, gender, discord, email, youtube, platform, introduce, privacy);

    document.querySelector(".alert").style.display = "block";

    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    document.getElementById("applyform").reset();
}

const sendData = (name, birthday, gender, discord, email, youtube, platform, introduce, privacy) => {
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
      개인정보처리방침: privacy,
    });
  };

const getValue = (id => {
    return document.getElementById(id).value;
})
/* // Form Script */