const e=document.querySelector(".feedback-form");e.addEventListener("input",(function(e){const{elements:{email:a,message:t}}=e.currentTarget;localStorage.setItem("feedback-form-state",JSON.stringify({email:a.value,message:t.value}))})),e.elements.email.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,e.elements.message.value=JSON.parse(localStorage.getItem("feedback-form-state")).message;
//# sourceMappingURL=03-feedback.06e69b91.js.map