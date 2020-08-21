'use strict';

(function () {
  const cartInfo = document.querySelector('.cart__more');

  if(!cartInfo){
    return;
  }

  const popup = document.querySelector('.popup');
  const popupContainer = document.querySelector('.popup__container');
  const popupClose = document.querySelector('.popup__close');
  const popupCloseArrow = document.querySelector('.popup__close-arrow');

  const currentCursor = document.querySelector('.cursor');

  const customCursor =  `
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill="white"/>
          <path d="M22.999 38.1666L37.8483 23.3174" stroke="#975030"/>
          <path d="M22.999 23L37.8483 37.8493" stroke="#975030"/>
        </svg>
    `;

  const standartCursor = `
        <svg class="cursor__arrow cursor__arrow--left" xmlns="http://www.w3.org/2000/svg" width="7" height="14" viewBox="0 0 7 14" fill="none">
          <path d="M6 1L1 7L6 13" stroke="#975030" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg class="cursor__arrow cursor__arrow--right" xmlns="http://www.w3.org/2000/svg" width="7" height="14" viewBox="0 0 7 14" fill="none">
          <path d="M1 13L6 7L0.999999 1" stroke="#975030" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;

  function handlerCustomCursor(){
    currentCursor.textContent='';
    currentCursor.insertAdjacentHTML('afterbegin', customCursor);
    currentCursor.classList.add('cursor_popup');
  }

  function handlerStandartCursor(){
    currentCursor.textContent='';
    currentCursor.insertAdjacentHTML('afterbegin', standartCursor);
    currentCursor.classList.remove('cursor_popup');
  }

  function openPopup(event) {
    const clientWidth = document.documentElement.clientWidth;

    popup.style.top = `${event.pageY - event.clientY}px`;
    popup.classList.add('popup_open');
    document.body.style.overflow = 'hidden';

    setTimeout(()=>{
      popup.style.backgroundColor = 'rgba(11, 14, 24, .2)';
      popupContainer.style.transform = 'translate(0)';
      popupContainer.addEventListener('mouseleave', handlerCustomCursor);
      popupContainer.addEventListener('mouseenter', handlerStandartCursor);
    },500)
  }

  function closePopup(){
    popupContainer.style.transform = 'translate(720px)';
    popup.style.backgroundColor = 'unset';
    popupContainer.removeEventListener('mouseleave', handlerCustomCursor);
    popupContainer.removeEventListener('mouseenter', handlerStandartCursor);

    setTimeout(()=>{
      popup.classList.remove('popup_open');
      document.body.style.overflow = '';
    },1500)
  }


  cartInfo.addEventListener('click',(event)=>{
    openPopup(event);
  });

  popup.addEventListener('click',(event)=>{
    if(event.target.classList.contains('popup')){
      handlerStandartCursor();
      closePopup();
    }
  });

  popupClose.addEventListener('click',()=>{
    closePopup();
  });

  popupCloseArrow.addEventListener('click',()=>{
    closePopup();
  });

})();