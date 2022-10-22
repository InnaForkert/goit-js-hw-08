const form = document.querySelector('.feedback-form');
const {
  elements: { email, message },
} = form;
const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {
  email: '',
  message: '',
};
const _ = require('underscore');

form.addEventListener('input', _.throttle(saveData, 500));
form.addEventListener('submit', formSubmit);

email.value = formData.email;
message.value = formData.message;

function saveData() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: email.value, message: message.value })
  );
}

function formSubmit(event) {
  event.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  event.currentTarget.reset();
  localStorage.clear();
}
