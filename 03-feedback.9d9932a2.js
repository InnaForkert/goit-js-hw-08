var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);const o=document.querySelector(".feedback-form"),{elements:{email:l,message:n}}=o,i=JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""};var s=r("6ibai");o.addEventListener("input",s.throttle((function(){localStorage.setItem("feedback-form-state",JSON.stringify({email:l.value,message:n.value}))}),500)),o.addEventListener("submit",(function(e){e.preventDefault(),console.log(localStorage.getItem("feedback-form-state")),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),l.value=i.email,n.value=i.message;
//# sourceMappingURL=03-feedback.9d9932a2.js.map