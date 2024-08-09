function onPopupEscKeydown(e, popup) {
  if (e.key === ('Escape' || 'Esc')) {
    popupClose(popup);
  }
}

function popupOpen(popup) {
  const targetPopup = document.querySelector(`.${popup}`);
  if (targetPopup.classList.contains(`${popup}--closed`)) {
    targetPopup.classList.remove(`${popup}--closed`);

    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';

    document.addEventListener('keydown', (e) => onPopupEscKeydown(e, popup));
    targetPopup.querySelector(`.${popup}__close-btn`).addEventListener('click', () => popupClose(popup));
  }
}

function popupClose(popup) {
  const targetPopup = document.querySelector(`.${popup}`);
  if (!targetPopup.classList.contains(`${popup}--closed`)) {
    targetPopup.classList.add(`${popup}--closed`);

    document.body.style.height = '';
    document.body.style.overflow = '';

    document.removeEventListener('keydown', (e) => onPopupEscKeydown(e, popup));
    targetPopup.querySelector(`.${popup}__close-btn`).removeEventListener('click', () => popupClose(popup));

  }
}

export { popupOpen, popupClose };