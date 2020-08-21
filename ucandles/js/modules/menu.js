'use strict';
(function () {
  var headerBlock = document.querySelector('.header');
  if (!headerBlock) {
    return;
  }

  if (window.matchMedia('(min-width: 1025px)').matches) {
    var links = headerBlock.querySelectorAll('[data-toggle="site-nav"]');
    var contents = headerBlock.querySelectorAll('[data-content="header-dropdown"]');
    if (!links.length && !contents.length) {
      return;
    }

    links.forEach(function (link) {
      link.addEventListener('mouseenter', function (evt) {
        evt.preventDefault();
        var thisTarget = evt.target;
        var id = thisTarget.getAttribute('data-target');
        var content = headerBlock.querySelector('[data-content="header-dropdown"]' + id);
        var activeContent = headerBlock.querySelector('[data-content="header-dropdown"].is-show');

        content.classList.add('is-show');
        link.classList.add('active');
        if (activeContent && activeContent !== content) {
          activeContent.classList.remove('is-show');
        }
      });

      link.addEventListener('mouseleave', function (evt) {
        evt.preventDefault();
        var thisTarget = evt.target;
        var id = thisTarget.getAttribute('data-target');
        var content = headerBlock.querySelector('[data-content="header-dropdown"]' + id);
        content.classList.remove('is-show');
        link.classList.remove('active');
      });
    });

    contents.forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        var id = el.getAttribute('id');
        var link = headerBlock.querySelector('[data-target="#' + id + '"');
        el.classList.add('is-show');
        link.classList.add('active');
      });
      el.addEventListener('mouseleave', function () {
        var id = el.getAttribute('id');
        var link = headerBlock.querySelector('[data-target="#' + id + '"');
        el.classList.remove('is-show');
        link.classList.remove('active');
      });
    });
  }

  if (window.matchMedia('(max-width: 1024px)').matches) {
    var mobileLinks = headerBlock.querySelectorAll('[data-toggle-mobile="mobile-nav"]');
    var mobileContents = headerBlock.querySelectorAll('[data-content="mobile-dropdown"]');
    var mobileBackLinks = headerBlock.querySelectorAll('[data-toggle-back="mobile-back"]');
    var mobileWrap = headerBlock.querySelector('.header__mobile-menu');
    if (!mobileLinks.length && !mobileContents.length && !mobileBackLinks && !mobileWrap) {
      return;
    }

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function (evt) {
        evt.preventDefault();
        var thisTarget = evt.target;
        var id = thisTarget.getAttribute('data-target-mobile');
        var content = headerBlock.querySelector('[data-content="mobile-dropdown"]' + id);
        var activeContent = headerBlock.querySelector('[data-content="mobile-dropdown"].is-show');

        content.classList.add('is-show');
        mobileWrap.classList.add('active');

        if (activeContent && activeContent !== content) {
          activeContent.classList.remove('is-show');
        }
      });
    });

    mobileBackLinks.forEach(function (link) {
      link.addEventListener('click', function (evt) {
        evt.preventDefault();
        var thisTarget = evt.target;
        var id = thisTarget.getAttribute('data-target-mobile');
        var content = headerBlock.querySelector('[data-content="mobile-dropdown"]' + id);
        var activeContent = headerBlock.querySelector('[data-content="mobile-dropdown"].is-show');

        content.classList.add('is-show');

        if (activeContent && activeContent !== content) {
          activeContent.classList.remove('is-show');
        }
      });
    });

    var linkCatalog = headerBlock.querySelector('.js-back-menu');

    if (linkCatalog) {
      linkCatalog.addEventListener('click', function (evt) {
        evt.preventDefault();
        mobileWrap.classList.remove('active');
      });
    }

  }

})();