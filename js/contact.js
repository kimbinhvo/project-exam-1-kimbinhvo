const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");


function validateForm(){
    event.preventDefault();

    if(name.value.trim().length >= 5 ){
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(subject.value.trim().length >= 15 ){
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if(message.value.trim().length >= 25 ){
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}

form.addEventListener("submit",validateForm);

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternsMatches = regEx.test(email);
    return patternsMatches;
}

function submitForm() {
    success.innerHTML = '<div class="success">Your message has been sent</div>';
}

function submitFormFail() {
    success.innerHTML = '<div class="fail">Your message can´t be sent. Please fill the form correctly</div>';
}

form.addEventListener("submit",checkValidation);

function checkValidation() {
    if (checkLength(name.value, 5) && validateEmail(email.value) && checkLength(subject.value, 15) && checkLength(message.value, 25)) {
        submitForm();
        form.reset();
    } else {
        submitFormFail();
    }
}

function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}
