
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


// function formSubmit(event) {
//     event.preventDefault();

//     const {
//         elements: { email, password }
//     } = event.currentTarget;

//     if (!email.value || !password.value) {
//         alert("Усі поля повинні бути заповнені!")
//     } else {
//         let formData = {
//             email: email.value,
//             password: password.value
//         }
//         console.log(formData);
//         event.currentTarget.reset();
//     }
// }

// form.addEventListener('submit', formSubmit)

// const span = document.querySelector("#name-output");

// function changeName() {
//     span.innerHTML = input.value || "Anonymous";
// }

// input.addEventListener('input', changeName);