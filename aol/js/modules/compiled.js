// var swiper = new Swiper('.mySwiper', {
//   slidesPerView: 4,
//   autoHeight: true,
//   loop: true,
//
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'progressbar',
//     clickable: true,
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//     480: {
//       slidesPerView: 2,
//     },
//     640: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1200: {
//       slidesPerView: 3,
//     },
//     1240: {
//       slidesPerView: 4,
//     },
//   },
// });
// var swiper = new Swiper('.swiperList', {
//   loop: true,
//   centeredSlides: true
// });
// var menuButton = document.querySelector('.header-btn');
// menuButton.addEventListener('click', function () {
//   document.querySelector('.aside-wrapper').classList.toggle('aside-wrapper--visible');
// });
//
// // var crossButton = document.querySelector(".basket-cross");
// // crossButton.addEventListener("click", function (){
// //   document.querySelector(".basket-block").classList.toggle("basket-block--hidden")
// // });
//
// // function remove(){
// //   let w = this.closest('.basket-block'), br = w.nextElementSibling;
//
// //   if(br.nodeType === 1 && br.nodeName === 'BR')
// //     br.remove();
//
// //   w.remove();
// // }
//
// function delNode(el) {
//   el.parentNode.parentNode.remove();
// }
//
// $(document).ready(function () {
//   $('.product-counter__btn--minus').click(function () {
//     var $input = $(this).parent().find('.product-counter__quantity');
//     var count = parseInt($input.val()) - 1;
//     count = count < 1 ? 1 : count;
//     $input.val(count);
//     $input.change();
//     return false;
//   });
//   $('.product-counter__btn--plus').click(function () {
//     var $input = $(this).parent().find('.product-counter__quantity');
//     $input.val(parseInt($input.val()) + 1);
//     $input.change();
//     return false;
//   });
// });
//
// // function plus(n) {
// //   var cena=document.getElementById("cena_"+n);
// //   var col=document.getElementById("col_"+n);
// //   var cenap=document.getElementById("cenap_"+n);
// //   var itog=document.getElementById("itog");
//
// //   col.innerHTML=1+Number(col.innerHTML);
// //   cenap.innerHTML=Number(cenap.innerHTML)+Number(cena.innerHTML);
// //   itog.innerHTML=Number(itog.innerHTML)+Number(cena.innerHTML);
// //  }
// //  function minus(n) {
// //   var cena=document.getElementById("cena_"+n);
// //   var col=document.getElementById("col_"+n);
// //   var cenap=document.getElementById("cenap_"+n);
// //   var itog=document.getElementById("itog");
//
// //   if(col.innerHTML!="0") {
// //    col.innerHTML=Number(col.innerHTML)-1;
// //    cenap.innerHTML=Number(cenap.innerHTML)-Number(cena.innerHTML);
// //    itog.innerHTML=Number(itog.innerHTML)-Number(cena.innerHTML);
// //   }
// //  }
//
// var d = document;
// var itemBox = d.querySelectorAll('.product-block'); // блок каждого товара
// var cartCont = d.getElementById('basket1'); // блок вывода данных корзины
// // Функция кроссбраузерной установка обработчика событий
// function addEvent(elem, type, handler) {
//   if (elem.addEventListener) {
//     elem.addEventListener(type, handler, false);
//   } else {
//     elem.attachEvent('on' + type, function () {
//       handler.call(elem);
//     });
//   }
//   return false;
// }
// // Получаем данные из LocalStorage
// function getCartData() {
//   return JSON.parse(localStorage.getItem('cart'));
// }
// // Записываем данные в LocalStorage
// function setCartData(o) {
//   localStorage.setItem('cart', JSON.stringify(o));
//   return false;
// }
// // Добавляем товар в корзину
// function addToCart(e) {
//   this.disabled = true; // блокируем кнопку на время операции с корзиной
//   var cartData = getCartData() || {}; // получаем данные корзины или создаём новый объект, если данных еще нет
//   var parentBox = this.parentNode; // родительский элемент кнопки "Добавить в корзину"
//   var itemId = this.getAttribute('data-id'); // ID товара
//   var itemTitle = parentBox.querySelector('.product-title').innerHTML; // название товара
//   var itemPrice = parentBox.querySelector('.product-price__main').innerHTML; // стоимость товара
//   if (cartData.hasOwnProperty(itemId)) { // если такой товар уже в корзине, то добавляем +1 к его количеству
//     cartData[itemId][2] += 1;
//   } else { // если товара в корзине еще нет, то добавляем в объект
//     cartData[itemId] = [itemTitle, itemPrice, 1];
//   }
//   if (!setCartData(cartData)) { // Обновляем данные в LocalStorage
//     this.disabled = false; // разблокируем кнопку после обновления LS
//   }
//   return false;
// }
// // Устанавливаем обработчик события на каждую кнопку "Добавить в корзину"
// for (var i = 0; i < itemBox.length; i++) {
//   addEvent(itemBox[i].querySelector('.product-info__btn'), 'click', addToCart);
// }
// // Открываем корзину со списком добавленных товаров
// function openCart(e) {
//   var cartData = getCartData(); // вытаскиваем все данные корзины
//   var totalItems = '';
//   // если что-то в корзине уже есть, начинаем формировать данные для вывода
//   if (cartData !== null) {
//     totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
//     for (var items in cartData) {
//       totalItems += '<tr>';
//       for (var i = 0; i < cartData[items].length; i++) {
//         totalItems += '<td>' + cartData[items][i] + '</td>';
//       }
//       totalItems += '</tr>';
//     }
//     totalItems += '</table>';
//     cartCont.innerHTML = totalItems;
//   } else {
//     // если в корзине пусто, то сигнализируем об этом
//     cartCont.innerHTML = 'В корзине пусто!';
//   }
//   return false;
// }
// /* Открыть корзину */
// addEvent(d.getElementById('checkout'), 'click', openCart);
// /* Очистить корзину */
// addEvent(d.getElementById('clear_cart'), 'click', function (e) {
//   localStorage.removeItem('cart');
//   cartCont.innerHTML = 'Корзина очишена.';
// });

/* открыть модалку отзыва */

var reviewBtn = document.querySelector('.js-leave-review');
var popupWrapper = document.querySelector('.popup-wrapper');
var popupCloseBtn = document.querySelector('.popup__close');
var popupRejectBtn = document.querySelector('.popup__close');

function closeReviewPopup() {
  popupWrapper.classList.remove('popup-wrapper--opened');
  document.body.classList.remove('fixed-body');
  document.removeEventListener('keydown', escPress);
}

function escPress(e) {
  if (e.key === 'Escape') {
    closeReviewPopup();
  }
}

if (reviewBtn && popupWrapper) {

  popupWrapper.addEventListener('click', function (e) {
    if (!e.target.closest('.popup')) {
      closeReviewPopup();
    }
  });

  reviewBtn.addEventListener('click', function () {
    popupWrapper.classList.add('popup-wrapper--opened');
    document.body.classList.add('fixed-body');
    popupCloseBtn.addEventListener('click', closeReviewPopup);
    popupRejectBtn.addEventListener('click', closeReviewPopup);
    document.addEventListener('keydown', escPress);
  });
}
$(function () {
  let container = $('#pag');
  const data = [
    {name: "hello1"},
    {name: "hello2"},
    {name: "hello3"},
    {name: "hello4"},
    {name: "hello5"},
    {name: "hello6"},
    {name: "hello7"},
    {name: "hello8"},
    {name: "hello9"},
    {name: "hello10"},
    {name: "hello11"},
    {name: "hello12"},
    {name: "hello13"},
    {name: "hello14"},
    {name: "hello15"},
    {name: "hello16"},
    {name: "hello17"},
  ];
  const pageSize = 10;
  container.pagination({
    dataSource: data,
    pageSize: pageSize,
    callback: function (data, pagination) {
      var dataHtml = '<ul>';

      $.each(data, function (index, item) {
        dataHtml += '<li>' + item.name + '</li>';
      });

      dataHtml += '</ul>';

      $("#dat").html(dataHtml);
      document.querySelector('.pagination-btn__start').addEventListener('click', () => {
        container.pagination('go', 1)
      })
      document.querySelector('.pagination-btn__end').addEventListener('click', () => {
        container.pagination('go', pagination.pageRange)
      })
    }
  })



})



//
// $(function () {
//   $('#pag').pagination({
//     items: 100,
//     itemsOnPage: 10,
//     cssStyle: 'light-theme'
//   });
// });