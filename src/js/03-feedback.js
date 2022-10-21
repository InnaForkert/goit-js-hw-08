
const form = document.querySelector(".feedback-form");
// const input = document.querySelector("input");
// const textarea = document.querySelector("textarea");

form.addEventListener('input', saveData);

function saveData(event) {
    const {
        elements: { email, message }
     } = event.currentTarget;
    
    localStorage.setItem("feedback-form-state", JSON.stringify({ email: email.value, message: message.value }));
}

form.elements.email.value = JSON.parse(localStorage.getItem("feedback-form-state")).email;
form.elements.message.value = JSON.parse(localStorage.getItem("feedback-form-state")).message;

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    console.log(localStorage.getItem("feedback-form-state"));
}