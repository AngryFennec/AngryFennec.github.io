// eslint-disable-next-line
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  autoHeight: true,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1240: {
      slidesPerView: 4,
    },
  },
});
var swiper = new Swiper('.swiperList', {
  loop: true,
  centeredSlides: true
});
var menuButton = document.querySelector('.header-btn');
menuButton.addEventListener('click', function () {
  document.querySelector('.aside-wrapper').classList.toggle('aside-wrapper--visible');
});

// var crossButton = document.querySelector(".basket-cross");
// crossButton.addEventListener("click", function (){
//   document.querySelector(".basket-block").classList.toggle("basket-block--hidden")
// });

// function remove(){
//   let w = this.closest('.basket-block'), br = w.nextElementSibling;

//   if(br.nodeType === 1 && br.nodeName === 'BR')
//     br.remove();

//   w.remove();
// }

function delNode(el) {
  el.parentNode.parentNode.remove();
}

$(document).ready(function () {
  $('.product-counter__btn--minus').click(function () {
    var $input = $(this).parent().find('.product-counter__quantity');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.product-counter__btn--plus').click(function () {
    var $input = $(this).parent().find('.product-counter__quantity');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

// function plus(n) {
//   var cena=document.getElementById("cena_"+n);
//   var col=document.getElementById("col_"+n);
//   var cenap=document.getElementById("cenap_"+n);
//   var itog=document.getElementById("itog");

//   col.innerHTML=1+Number(col.innerHTML);
//   cenap.innerHTML=Number(cenap.innerHTML)+Number(cena.innerHTML);
//   itog.innerHTML=Number(itog.innerHTML)+Number(cena.innerHTML);
//  }
//  function minus(n) {
//   var cena=document.getElementById("cena_"+n);
//   var col=document.getElementById("col_"+n);
//   var cenap=document.getElementById("cenap_"+n);
//   var itog=document.getElementById("itog");

//   if(col.innerHTML!="0") {
//    col.innerHTML=Number(col.innerHTML)-1;
//    cenap.innerHTML=Number(cenap.innerHTML)-Number(cena.innerHTML);
//    itog.innerHTML=Number(itog.innerHTML)-Number(cena.innerHTML);
//   }
//  }

var d = document;
var itemBox = d.querySelectorAll('.product-block'); // блок каждого товара
var cartCont = d.getElementById('basket1'); // блок вывода данных корзины
// Функция кроссбраузерной установка обработчика событий
function addEvent(elem, type, handler) {
  if (elem.addEventListener) {
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on' + type, function () {
      handler.call(elem);
    });
  }
  return false;
}
// Получаем данные из LocalStorage
function getCartData() {
  return JSON.parse(localStorage.getItem('cart'));
}
// Записываем данные в LocalStorage
function setCartData(o) {
  localStorage.setItem('cart', JSON.stringify(o));
  return false;
}
// Добавляем товар в корзину
function addToCart(e) {
  this.disabled = true; // блокируем кнопку на время операции с корзиной
  var cartData = getCartData() || {}; // получаем данные корзины или создаём новый объект, если данных еще нет
  var parentBox = this.parentNode; // родительский элемент кнопки "Добавить в корзину"
  var itemId = this.getAttribute('data-id'); // ID товара
  var itemTitle = parentBox.querySelector('.product-title').innerHTML; // название товара
  var itemPrice = parentBox.querySelector('.product-price__main').innerHTML; // стоимость товара
  if (cartData.hasOwnProperty(itemId)) { // если такой товар уже в корзине, то добавляем +1 к его количеству
    cartData[itemId][2] += 1;
  } else { // если товара в корзине еще нет, то добавляем в объект
    cartData[itemId] = [itemTitle, itemPrice, 1];
  }
  if (!setCartData(cartData)) { // Обновляем данные в LocalStorage
    this.disabled = false; // разблокируем кнопку после обновления LS
  }
  return false;
}
// Устанавливаем обработчик события на каждую кнопку "Добавить в корзину"
for (var i = 0; i < itemBox.length; i++) {
  addEvent(itemBox[i].querySelector('.product-info__btn'), 'click', addToCart);
}
// Открываем корзину со списком добавленных товаров
function openCart(e) {
  var cartData = getCartData(); // вытаскиваем все данные корзины
  var totalItems = '';
  // если что-то в корзине уже есть, начинаем формировать данные для вывода
  if (cartData !== null) {
    totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
    for (var items in cartData) {
      totalItems += '<tr>';
      for (var i = 0; i < cartData[items].length; i++) {
        totalItems += '<td>' + cartData[items][i] + '</td>';
      }
      totalItems += '</tr>';
    }
    totalItems += '</table>';
    cartCont.innerHTML = totalItems;
  } else {
    // если в корзине пусто, то сигнализируем об этом
    cartCont.innerHTML = 'В корзине пусто!';
  }
  return false;
}
/* Открыть корзину */
addEvent(d.getElementById('checkout'), 'click', openCart);
/* Очистить корзину */
addEvent(d.getElementById('clear_cart'), 'click', function (e) {
  localStorage.removeItem('cart');
  cartCont.innerHTML = 'Корзина очишена.';
});

/* открыть модалку отзыва */

var reviewBtn = document.querySelector('.js-leave-review');
var popupWrapper = document.querySelector('.popup-wrapper');
var popupCloseBtn = document.querySelector('.popup__close');
var popupRejectBtn = document.querySelector('.popup__reject');

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

function fillCard(card) {
  const tmpl = document.querySelector('#card-template').content.cloneNode(true);

  // проценты скидки
  const percentBlock = tmpl.querySelector('.card-discount');
  const percentBottomBlock = tmpl.querySelector('.card-price__discount');
  if (!card.percent_discount) {
    percentBlock.remove();
    percentBottomBlock.remove();
  } else {
    percentBlock.textContent = `-${card.percent_discount}%`;
    percentBottomBlock.textContent = `-${card.percent_discount}%`;
  }

  // проценты скидки
  const newBlock = tmpl.querySelector('.card-discount--new');
  if (!card.isNew) {
    newBlock.remove();
  }

  // картинка товара
  const imgBlock = tmpl.querySelector('.card-content__img');
  imgBlock.src = card.cart_img;
  imgBlock.alt = card.title;

  // сердечко
  const favoriteBlock = tmpl.querySelector('.card-favourites img');
  if (card.isFavorite) {
    favoriteBlock.src = 'img/card/favourites-active.svg';
  }

  // название
  const titleBlock = tmpl.querySelector('.card-content__title');
  titleBlock.textContent = card.title;

  // комменты
  const commentsBlock = tmpl.querySelector('.card-feedback__txt');
  commentsBlock.textContent = `${card.comments} отзыва`

  // цена
  const priceBlock = tmpl.querySelector('.card-price__main');
  priceBlock.textContent = `₽${card.price}`;

  // скидка
  const priceDiscountBlock = tmpl.querySelector('.card-price__del');
  if (!card.discount) {
    priceDiscountBlock.remove();
  } else {
    priceDiscountBlock.textContent = `₽${card.price}`;
  }

  // звезды в рейтинге
  const starsBlock = tmpl.querySelector('.card-feedback__stars');
  if (!card.rating) {
    starsBlock.remove();
  } else {
    const stars = Array.from(starsBlock.querySelectorAll('a'));
    stars.forEach((item, i) => {
      if (i+1 > card.rating) {
        item.querySelector('img').src = 'img/card/star.svg';
      }
    })
  }

  return tmpl;
}

$(function () {
  let container = $('#pag');
  const data = [
    {
      id: 3548,
      cart_img: "img/products/dildo-2.jpg",
      discount: 1000,
      comments: 2,
      percent_discount: 20,
      title: "INTRIGUE CASANOVA",
      url: "1rn203_fm14",
      h1: "INTRIGUE CASANOVA",
      title_html: "INTRIGUE CASANOVA",
      price: 1000,
      rating: 4,
      total: 0,
      isFavorite: true,
    },
    {
      id: 3549,
      cart_img: "img/products/dildo-1.jpg",
      comments: 2,
      title: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      url: "1rn203_fm14",
      h1: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      title_html: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      description: "<p>Компания &laquo;ТКС&raquo; является официальным поставщиком золотниковых гидрораспределителей Р203 с механическим управлением. В наличии гидрораспределитель 1РН203 ФМ14 (Ду=20мм).</p>\r\n\r\n<p>Все изделия имеют сертификаты и гарантию завода изготовителя. Доставка по всей территории РФ со склада в г. Екатеринбурге, по адресу: ул. Самолетная д. 55</p>\r\n\r\n<p>Оформить заказ можно на нашем сайте, по электронной почте:&nbsp;<a href=\"mailto:mail@tks66.ru\">mail@tks66.ru</a>&nbsp;или по телефону: +7(343)287-11-84.</p>",
      price: 1000,
      rating: 1,
      total: 0,
      isNew: true,
    },
    {
      id: 3549,
      cart_img: "img/products/dildo-1.jpg",
      comments: 2,
      title: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      url: "1rn203_fm14",
      h1: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      title_html: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      description: "<p>Компания &laquo;ТКС&raquo; является официальным поставщиком золотниковых гидрораспределителей Р203 с механическим управлением. В наличии гидрораспределитель 1РН203 ФМ14 (Ду=20мм).</p>\r\n\r\n<p>Все изделия имеют сертификаты и гарантию завода изготовителя. Доставка по всей территории РФ со склада в г. Екатеринбурге, по адресу: ул. Самолетная д. 55</p>\r\n\r\n<p>Оформить заказ можно на нашем сайте, по электронной почте:&nbsp;<a href=\"mailto:mail@tks66.ru\">mail@tks66.ru</a>&nbsp;или по телефону: +7(343)287-11-84.</p>",
      price: 1000,
      rating: 1,
      total: 0,
    },
    {
      id: 3549,
      cart_img: "img/products/dildo-1.jpg",
      comments: 2,
      title: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      url: "1rn203_fm14",
      h1: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      title_html: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      description: "<p>Компания &laquo;ТКС&raquo; является официальным поставщиком золотниковых гидрораспределителей Р203 с механическим управлением. В наличии гидрораспределитель 1РН203 ФМ14 (Ду=20мм).</p>\r\n\r\n<p>Все изделия имеют сертификаты и гарантию завода изготовителя. Доставка по всей территории РФ со склада в г. Екатеринбурге, по адресу: ул. Самолетная д. 55</p>\r\n\r\n<p>Оформить заказ можно на нашем сайте, по электронной почте:&nbsp;<a href=\"mailto:mail@tks66.ru\">mail@tks66.ru</a>&nbsp;или по телефону: +7(343)287-11-84.</p>",
      price: 1000,
      rating: 1,
      total: 0,
    },
    {
      id: 3549,
      cart_img: "img/products/dildo-1.jpg",
      comments: 2,
      title: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      url: "1rn203_fm14",
      h1: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      title_html: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      description: "<p>Компания &laquo;ТКС&raquo; является официальным поставщиком золотниковых гидрораспределителей Р203 с механическим управлением. В наличии гидрораспределитель 1РН203 ФМ14 (Ду=20мм).</p>\r\n\r\n<p>Все изделия имеют сертификаты и гарантию завода изготовителя. Доставка по всей территории РФ со склада в г. Екатеринбурге, по адресу: ул. Самолетная д. 55</p>\r\n\r\n<p>Оформить заказ можно на нашем сайте, по электронной почте:&nbsp;<a href=\"mailto:mail@tks66.ru\">mail@tks66.ru</a>&nbsp;или по телефону: +7(343)287-11-84.</p>",
      price: 1000,
      rating: 1,
      total: 0,
    },
    {
      id: 3549,
      cart_img: "img/products/dildo-1.jpg",
      comments: 2,
      title: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      url: "1rn203_fm14",
      h1: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      title_html: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      description: "<p>Компания &laquo;ТКС&raquo; является официальным поставщиком золотниковых гидрораспределителей Р203 с механическим управлением. В наличии гидрораспределитель 1РН203 ФМ14 (Ду=20мм).</p>\r\n\r\n<p>Все изделия имеют сертификаты и гарантию завода изготовителя. Доставка по всей территории РФ со склада в г. Екатеринбурге, по адресу: ул. Самолетная д. 55</p>\r\n\r\n<p>Оформить заказ можно на нашем сайте, по электронной почте:&nbsp;<a href=\"mailto:mail@tks66.ru\">mail@tks66.ru</a>&nbsp;или по телефону: +7(343)287-11-84.</p>",
      price: 1000,
      rating: 1,
      total: 0,
    },
    {
      id: 3549,
      cart_img: "img/products/dildo-1.jpg",
      comments: 2,
      title: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      url: "1rn203_fm14",
      h1: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      title_html: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      description: "<p>Компания &laquo;ТКС&raquo; является официальным поставщиком золотниковых гидрораспределителей Р203 с механическим управлением. В наличии гидрораспределитель 1РН203 ФМ14 (Ду=20мм).</p>\r\n\r\n<p>Все изделия имеют сертификаты и гарантию завода изготовителя. Доставка по всей территории РФ со склада в г. Екатеринбурге, по адресу: ул. Самолетная д. 55</p>\r\n\r\n<p>Оформить заказ можно на нашем сайте, по электронной почте:&nbsp;<a href=\"mailto:mail@tks66.ru\">mail@tks66.ru</a>&nbsp;или по телефону: +7(343)287-11-84.</p>",
      price: 1000,
      rating: 1,
      total: 0,
    },
    {
      id: 3549,
      cart_img: "img/products/dildo-1.jpg",
      comments: 2,
      title: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      url: "1rn203_fm14",
      h1: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      title_html: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      description: "<p>Компания &laquo;ТКС&raquo; является официальным поставщиком золотниковых гидрораспределителей Р203 с механическим управлением. В наличии гидрораспределитель 1РН203 ФМ14 (Ду=20мм).</p>\r\n\r\n<p>Все изделия имеют сертификаты и гарантию завода изготовителя. Доставка по всей территории РФ со склада в г. Екатеринбурге, по адресу: ул. Самолетная д. 55</p>\r\n\r\n<p>Оформить заказ можно на нашем сайте, по электронной почте:&nbsp;<a href=\"mailto:mail@tks66.ru\">mail@tks66.ru</a>&nbsp;или по телефону: +7(343)287-11-84.</p>",
      price: 1000,
      rating: 1,
      total: 0,
    },
    {
      id: 3549,
      cart_img: "img/products/dildo-1.jpg",
      comments: 2,
      title: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      url: "1rn203_fm14",
      h1: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      title_html: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      description: "<p>Компания &laquo;ТКС&raquo; является официальным поставщиком золотниковых гидрораспределителей Р203 с механическим управлением. В наличии гидрораспределитель 1РН203 ФМ14 (Ду=20мм).</p>\r\n\r\n<p>Все изделия имеют сертификаты и гарантию завода изготовителя. Доставка по всей территории РФ со склада в г. Екатеринбурге, по адресу: ул. Самолетная д. 55</p>\r\n\r\n<p>Оформить заказ можно на нашем сайте, по электронной почте:&nbsp;<a href=\"mailto:mail@tks66.ru\">mail@tks66.ru</a>&nbsp;или по телефону: +7(343)287-11-84.</p>",
      price: 1000,
      rating: 1,
      total: 0,
    },
    {
      id: 3549,
      cart_img: "img/products/dildo-1.jpg",
      comments: 2,
      title: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      url: "1rn203_fm14",
      h1: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      title_html: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      description: "<p>Компания &laquo;ТКС&raquo; является официальным поставщиком золотниковых гидрораспределителей Р203 с механическим управлением. В наличии гидрораспределитель 1РН203 ФМ14 (Ду=20мм).</p>\r\n\r\n<p>Все изделия имеют сертификаты и гарантию завода изготовителя. Доставка по всей территории РФ со склада в г. Екатеринбурге, по адресу: ул. Самолетная д. 55</p>\r\n\r\n<p>Оформить заказ можно на нашем сайте, по электронной почте:&nbsp;<a href=\"mailto:mail@tks66.ru\">mail@tks66.ru</a>&nbsp;или по телефону: +7(343)287-11-84.</p>",
      price: 1000,
      rating: 1,
      total: 0,
    },
    {
      id: 3549,
      cart_img: "img/products/dildo-1.jpg",
      comments: 2,
      title: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      url: "1rn203_fm14",
      h1: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      title_html: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      description: "<p>Компания &laquo;ТКС&raquo; является официальным поставщиком золотниковых гидрораспределителей Р203 с механическим управлением. В наличии гидрораспределитель 1РН203 ФМ14 (Ду=20мм).</p>\r\n\r\n<p>Все изделия имеют сертификаты и гарантию завода изготовителя. Доставка по всей территории РФ со склада в г. Екатеринбурге, по адресу: ул. Самолетная д. 55</p>\r\n\r\n<p>Оформить заказ можно на нашем сайте, по электронной почте:&nbsp;<a href=\"mailto:mail@tks66.ru\">mail@tks66.ru</a>&nbsp;или по телефону: +7(343)287-11-84.</p>",
      price: 1000,
      rating: 1,
      total: 0,
    },
    {
      id: 3549,
      cart_img: "img/products/dildo-1.jpg",
      comments: 2,
      title: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      url: "1rn203_fm14",
      h1: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      title_html: "INTRIGUE CASANOVA 8\" VIBRATING ROTATING DILDO",
      description: "<p>Компания &laquo;ТКС&raquo; является официальным поставщиком золотниковых гидрораспределителей Р203 с механическим управлением. В наличии гидрораспределитель 1РН203 ФМ14 (Ду=20мм).</p>\r\n\r\n<p>Все изделия имеют сертификаты и гарантию завода изготовителя. Доставка по всей территории РФ со склада в г. Екатеринбурге, по адресу: ул. Самолетная д. 55</p>\r\n\r\n<p>Оформить заказ можно на нашем сайте, по электронной почте:&nbsp;<a href=\"mailto:mail@tks66.ru\">mail@tks66.ru</a>&nbsp;или по телефону: +7(343)287-11-84.</p>",
      price: 1000,
      rating: 1,
      total: 0,
    },


  ];

  const pageSize = 10;
  container.pagination({
    dataSource: data,
    pageSize: pageSize,
    callback: function (data, pagination) {
      const dataContainer = document.querySelector('#pag-data');
      dataContainer.innerHTML = '';
      const fragment = document.createDocumentFragment();

      data.forEach(item => {
        fragment.appendChild(fillCard(item));
      });

      dataContainer.append(fragment);

      document.querySelector('.pagination-btn__start').addEventListener('click', () => {
        container.pagination('go', 1)
      })
      document.querySelector('.pagination-btn__end').addEventListener('click', () => {
        container.pagination('go', pagination.pageRange)
      })
    }
  })
})
// eslint-disable-next-line

// цвета в меню
(function() {
  const filters = [
    {
      color: '#aff333',
      id: 'some',
      title: 'Какой-то',
    },
    {
      color: '#445333',
      id: 'some2',
      title: 'Какой-то еще',
    }
  ];

  const COLOR_URL = 'color';

  let selectedFilters = [];

  const filtersContainer = document.querySelector('#color-filter');
  const filtersSelectedContainer = document.querySelector('#color-filter-selected');

  function clearColorParamsInUrl(link) {
    const url = new URL(link);
    url.searchParams.delete(COLOR_URL);
    return url;
  }

  function addColorParamsToUrl(link) {
    const url = new URL(link);
    const paramsString = selectedFilters.join(',');
    url.searchParams.set(COLOR_URL, paramsString);
    return url;
  }

  function onFilterChange(evt) {
    if (evt.target.checked) {
      selectedFilters.push(evt.target.id);
    } else {
      selectedFilters = selectedFilters.filter(item => item !== evt.target.id);
    }
    fillSelectedContainer();
    const link = window.location.href;
    if (selectedFilters.length === 0) {
      const editedLink = clearColorParamsInUrl(link);
      window.history.replaceState({}, '', editedLink);
    } else {
      const editedLink = addColorParamsToUrl(link);
      window.history.replaceState({}, '', editedLink);
    }
  }

  function fillSelectedContainer() {
    filtersSelectedContainer.innerHTML = '';
    const selectedFragment = document.createDocumentFragment();
    selectedFilters.forEach(item => selectedFragment.appendChild(fillSelectedTemplate(item)));
    filtersSelectedContainer.append(selectedFragment);
  }

  function fillFilterTemplate(obj) {
    const tmpl = document.querySelector('#tmpl-color').content.cloneNode(true);
    const filterInput = tmpl.querySelector('.color-filter__checkbox');
    filterInput.id = obj.id;
    filterInput.name = obj.id;
    const filterLabel = tmpl.querySelector('.color-filter__label');
    filterLabel.setAttribute('for', obj.id);
    filterLabel.style.background = obj.color;

    filterInput.addEventListener('change', onFilterChange);
    return tmpl;
  }

  function fillSelectedTemplate(id) {
    const obj = filters.find(item => item.id === id);
    if (!obj) {
      return;
    }
    const tmpl = document.querySelector('#tmpl-color-selected').content.cloneNode(true);
    const filterColor = tmpl.querySelector('.color-filter-selected__color');
    filterColor.style.background = obj.color;

    const filterText = tmpl.querySelector('.color-filter-selected__text');
    filterText.textContent = obj.title;
    return tmpl;
  }

  const filtersFragment = document.createDocumentFragment();
  filters.forEach(item => filtersFragment.appendChild(fillFilterTemplate(item)));
  filtersContainer.append(filtersFragment);
})();

(function() {
  const BRAND_URL = 'brand';
  const brandsContainer = document.querySelector('.filter-brand__block');
  let selectedBrandFilters = [];

  function clearBrandParamsInUrl(link) {
    const url = new URL(link);
    url.searchParams.delete(BRAND_URL);
    return url;
  }

  function addBrandParamsToUrl(link) {
    const url = new URL(link);
    const paramsString = selectedBrandFilters.join(',');
    url.searchParams.set(BRAND_URL, paramsString);
    return url;
  }

  function onFilterChange(evt) {
    if (evt.target.checked) {
      selectedBrandFilters.push(evt.target.name);
    } else {
      selectedBrandFilters = selectedBrandFilters.filter(item => item !== evt.target.name);
    }
    const link = window.location.href;
    if (selectedBrandFilters.length === 0) {
      const editedLink = clearBrandParamsInUrl(link);
      window.history.replaceState({}, '', editedLink);
    } else {
      const editedLink = addBrandParamsToUrl(link);
      window.history.replaceState({}, '', editedLink);
    }
  }

  const brandInputs = Array.from(brandsContainer.querySelectorAll('.filter-checkbox'));
  brandInputs.forEach(item => item.addEventListener('change', onFilterChange));
})();

(function() {
  const SIZE_URL = 'size';
  const sizeContainer = document.querySelector('#filter-size');
  let selectedSizeFilters = [];

  function clearSizeParamsInUrl(link) {
    const url = new URL(link);
    url.searchParams.delete(SIZE_URL);
    return url;
  }

  function addSizeParamsToUrl(link) {
    const url = new URL(link);
    const paramsString = selectedSizeFilters.join(',');
    url.searchParams.set(SIZE_URL, paramsString);
    return url;
  }

  function onFilterChange(evt) {
    if (evt.target.checked) {
      selectedSizeFilters.push(evt.target.name);
    } else {
      selectedSizeFilters = selectedSizeFilters.filter(item => item !== evt.target.name);
    }
    const link = window.location.href;
    if (selectedSizeFilters.length === 0) {
      const editedLink = clearSizeParamsInUrl(link);
      window.history.replaceState({}, '', editedLink);
    } else {
      const editedLink = addSizeParamsToUrl(link);
      window.history.replaceState({}, '', editedLink);
    }
  }

  const sizeInputs = Array.from(sizeContainer.querySelectorAll('.filter-checkbox'));
  sizeInputs.forEach(item => item.addEventListener('change', onFilterChange));
})();

(function() {
  const inputMin = document.querySelector('.filter-price--min');
  const inputMax = document.querySelector('.filter-price--max');
  const MIN_URL = 'min_price';
  const MAX_URL = 'max_price';

  function addPriceParamsToUrl(link) {
    const url = new URL(link);
    if (inputMin.value) {
      url.searchParams.set(MIN_URL, inputMin.value);
    } else {
      url.searchParams.delete(MIN_URL);
    }
    if (inputMax.value) {
      url.searchParams.set(MAX_URL, inputMax.value);
    } else {
      url.searchParams.delete(MAX_URL);
    }
    return url;
  }

  function onFilterChange(evt) {
    const link = window.location.href;
    const editedLink = addPriceParamsToUrl(link);
    window.history.replaceState({}, '', editedLink);
  }

  inputMin.addEventListener('change', onFilterChange);
  inputMax.addEventListener('change', onFilterChange);

  })();