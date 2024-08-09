const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const close = document.querySelector('.header__close');


burger.addEventListener('click', function(evt) {
  evt.preventDefault();
  menu.classList.add('header__menu_active');
  burger.style = 'display: none';
  close.style = 'display: block';
});

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  menu.classList.remove('header__menu_active');
  burger.style = 'display: block';
  close.style = 'display: none';
  console.log(close);
});

const datepicker = new Datepicker('#datepicker');

// const select = document.querySelector('#select');
// const arrow = select.querySelector('span');
//
// select.addEventListener('click', () => {
//   arrow.style.transform = 'rotate(180deg)';
//   arrow.style.translate = 'translateY(-50%)';
// });
// select.addEventListener('change', () => {console.log('bbb')});

function DropDown(el) {
  this.dd = el;
  this.placeholder = this.dd.children('span');
  this.opts = this.dd.find('ul.dropdown > li');
  this.val = '';
  this.index = -1;
  this.initEvents();
}
DropDown.prototype = {
  initEvents : function() {
    var obj = this;

    obj.dd.on('click', function(event){
      $(this).toggleClass('active');
      return false;
    });

    obj.opts.on('click',function(){
      var opt = $(this);
      $(".active-opt").removeClass("active-opt");
      opt.addClass('active-opt');
      obj.val = opt.text();
      obj.index = opt.index();
      // obj.placeholder.text(obj.val);
      $('#select-input').val(opt.text());
    });
  },
  getValue : function() {
    return this.val;
  },
  getIndex : function() {
    return this.index;
  }
}

$(function() {

  var dd = new DropDown( $('#dd') );

  $(document).click(function() {
    // all dropdowns
    $('.wrapper-dropdown').removeClass('active');
  });

});