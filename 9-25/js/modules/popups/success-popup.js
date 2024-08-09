import { popupClose } from './popup.js';

const successPopup = document.querySelector('.success-popup');

successPopup.querySelector('.form__submit-btn--success-popup').addEventListener('click', () => popupClose('success-popup'));