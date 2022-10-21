document.querySelector(".feedback-form").addEventListener("input",(function(e){var t=e.currentTarget.elements,a=t.email,o=t.message;localStorage.setItem("feedback-form-state",JSON.stringify({email:a.value,message:o.value})),console.log(localStorage.getItem("feedback-form-state"))}));
//# sourceMappingURL=03-feedback.42abb0a9.js.map
