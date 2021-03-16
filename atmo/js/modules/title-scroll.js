(function () {
  function Ascroll() {
    if (document.documentElement.clientWidth > 768) {
      var P = document.querySelector('.header').getBoundingClientRect().height;
      containers.forEach((item, j) => {
        if (containers[j].getBoundingClientRect().top - P <= 0 && containers[j].getBoundingClientRect().bottom - P - titles[j].getBoundingClientRect().height  >= 0) {
          titles[j].style.position = 'fixed';
          titles[j].style.top = P + 'px';
        } else {
          if (containers[j].getBoundingClientRect().bottom - P  - titles[j].getBoundingClientRect().height < 0) {
            titles[j].style.position = 'absolute';
            titles[j].style.top = `calc(100% - ${titles[j].getBoundingClientRect().height}px)`;
          } else {
            titles[j].style.position = 'absolute';
            titles[j].style.top = '0';
          }
        }
      });
    } else {
      titles.forEach((item) => {
        item.style.position = 'relative';
        item.style.top = '0';
      });

    }
  }

  var titles = Array.from(document.querySelectorAll('.js-scrolled-title'));
  var containers = Array.from(document.querySelectorAll('.js-scrolled-container'));

  if (titles && titles.length > 0 && containers && containers.length > 0) {
    window.addEventListener('resize', Ascroll);
    window.addEventListener('scroll', Ascroll, false);
    document.body.addEventListener('scroll', Ascroll, false);
  }
})
();