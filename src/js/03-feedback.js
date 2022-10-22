const form = document.querySelector('.feedback-form');

const _ = require('underscore');
form.addEventListener('input', _.throttle(saveData, 500));

function saveData(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: email.value, message: message.value })
  );
}

const formData = JSON.parse(localStorage.getItem('feedback-form-state'));

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(localStorage.getItem('feedback-form-state'));
}
