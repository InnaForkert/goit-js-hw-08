document.querySelector(".feedback-form").addEventListener("input",(function(e){const{elements:{email:t,message:a}}=e.currentTarget;localStorage.setItem("feedback-form-state",JSON.stringify({email:t.value,message:a.value})),console.log(localStorage.getItem("feedback-form-state"))}));
//# sourceMappingURL=03-feedback.189e5536.js.map
