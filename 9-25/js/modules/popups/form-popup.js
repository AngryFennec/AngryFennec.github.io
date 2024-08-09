import { popupOpen, popupClose } from './popup.js';
import { resetForm } from '../utils.js';
import { validateForm } from '../forms/form-validation.js';

const formPopup = document.querySelector('.form-popup');
const bannerBtn = document.querySelector('.banner__btn');
const formInputs = formPopup.querySelector('.form').querySelectorAll('input');
const submitBtn = formPopup.querySelector('.form__submit-btn');

bannerBtn.addEventListener('click', () => popupOpen('form-popup'));
formPopup.addEventListener('input', () => validateForm(formInputs, submitBtn));

formPopup.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  resetForm(formInputs, submitBtn);
  popupClose('form-popup');
  popupOpen('success-popup');
});