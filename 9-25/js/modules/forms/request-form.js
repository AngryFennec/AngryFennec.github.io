import { popupOpen } from '../popups/popup.js';
import { resetForm } from '../utils.js';
import { validateForm } from './form-validation.js';

const requestForm = document.querySelector('.request__form');
const requestInputs = requestForm.querySelectorAll('input');
const submitBtn = requestForm.querySelector('.form__submit-btn');

requestForm.addEventListener('input', () => validateForm(requestInputs, submitBtn));

requestForm.addEventListener('submit', (e) => {
  e.preventDefault();
  resetForm(requestInputs, submitBtn);
  popupOpen('success-popup');
});