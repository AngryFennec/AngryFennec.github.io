var link = document.querySelector(".open-feedback");
var popup = document.querySelector(".feedback-overlay");
var close = popup.querySelector(".feedback-close");
var login = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=mail]");
var textfield = popup.querySelector("[name=text]");
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
      login.focus();
});
close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!login.value || !email.value || !textfield.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  console.log("Нужно ввести логин и пароль");
}
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
