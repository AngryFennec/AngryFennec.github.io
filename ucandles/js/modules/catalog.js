'use strict';

(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var filter = document.querySelector('.catalog-filter');
  if (!filter) {
    return;
  }

  if (windowWidth > LAPTOP_WIDTH) {
    var closeFilter = function () {
      var activeContent = filter.querySelector('[data-content="catalog-content"].active');
      var activeTab = filter.querySelector('[data-toggle="catalog-tabs"].active-tab');
      if (activeContent && activeTab) {
        activeContent.classList.remove('active');
        activeTab.classList.remove('active-tab');
      }
    };

    var documentKeypressHandler = function (evt) {
      if (evt.keyCode === 27) {
        closeFilter();
      }
    };

    document.addEventListener('keydown', documentKeypressHandler);

    var tabs = filter.querySelectorAll('[data-toggle="catalog-tabs"]');

    if (!tabs.length) {
      return;
    }

    Array.prototype.forEach.call(tabs, function (tab) {
      tab.addEventListener('click', function (evt) {
        evt.preventDefault();
        evt.stopPropagation();

        var thisTarget = evt.target;
        var id = thisTarget.getAttribute('data-target');
        var content = document.querySelector('[data-content="catalog-content"]' + id);
        var activeContent = filter.querySelector('[data-content="catalog-content"].active');
        var activeTab = filter.querySelector('[data-toggle="catalog-tabs"].active-tab');

        tab.classList.add('active-tab');

        if (activeTab) {
          activeTab.classList.remove('active-tab');
        } else {
          tab.classList.add('active-tab');
        }

        content.classList.toggle('active');
        if (activeContent && activeContent !== content) {
          activeContent.classList.remove('active');
        }

      });
    });

    var dropdowns = filter.querySelectorAll('.catalog-filter__dropdown-container');
    var forms = filter.querySelectorAll('.catalog-filter__form');

    if (!dropdowns.length && !forms.length) {
      return;
    }

    document.addEventListener('click', function (evt) {
      if (evt.target.tagName !== 'INPUT' && evt.target.tagName !== 'LABEL' && !evt.target.classList.contains('catalog-filter__dropdown-container') && !evt.target.classList.contains('catalog-filter__form')) {
        closeFilter();
      }
    });

    var sortName = filter.querySelector('[data-target="#sort-target"]');

    var sortForm = filter.querySelector('.js-sort-form');
    if (!sortForm) {
      return;
    }
    var inputs = sortForm.querySelectorAll('input[type="radio"]');

    sortForm.addEventListener('change', function () {
      if (!inputs.length) {
        return;
      }
      inputs.forEach(function (input) {
        if (input.checked) {
          sortName.textContent = input.nextElementSibling.textContent;
        }
      });
    });
  }

  if (windowWidth <= LAPTOP_WIDTH) {
    var filterBtn = filter.querySelector('.js-filter-open');

    if (filterBtn) {
      filterBtn.addEventListener('click', function () {
        filter.classList.toggle('open');

        var sortContent = filter.querySelector('.catalog-filter__dropdown-container--sort-mobile');

        var sortTab = filter.querySelector('[data-target="#sort-target-mobile"]');

        if (!sortContent && !sortTab) {
          return;
        }

        if (sortContent.classList.contains('active')) {
          sortContent.classList.remove('active');
        }

        if (sortTab.classList.contains('active-tab')) {
          sortTab.classList.remove('active-tab');
        }
      });
    }

    var filterCloseBtn = filter.querySelector('.js-filter-close');

    if (filterCloseBtn) {
      filterCloseBtn.addEventListener('click', function () {
        if (filter.classList.contains('open')) {
          filter.classList.remove('open');
        }
      });
    }

    var mobileTabs = filter.querySelectorAll('[data-toggle="catalog-tabs-mobile"]');

    if (!mobileTabs.length) {
      return;
    }

    Array.prototype.forEach.call(mobileTabs, function (tab) {
      tab.addEventListener('click', function (evt) {
        evt.preventDefault();
        evt.stopPropagation();

        var thisTarget = evt.target;
        var id = thisTarget.getAttribute('data-target');
        var content = document.querySelector('[data-content="catalog-content"]' + id);
        var activeContent = filter.querySelector('[data-content="catalog-content"].active');
        var activeTab = filter.querySelector('[data-toggle="catalog-tabs-mobile"].active-tab');

        tab.classList.add('active-tab');

        if (activeTab) {
          activeTab.classList.remove('active-tab');
        } else {
          tab.classList.add('active-tab');
        }

        content.classList.toggle('active');
        if (activeContent && activeContent !== content) {
          activeContent.classList.remove('active');
        }

      });
    });

    var sortNameMobile = filter.querySelector('[data-target="#sort-target-mobile"]');

    var sortFormMobile = filter.querySelector('.js-sort-form-mobile');
    if (!sortFormMobile) {
      return;
    }
    var mobileInputs = sortFormMobile.querySelectorAll('input[type="radio"]');

    sortFormMobile.addEventListener('change', function () {
      if (!mobileInputs.length) {
        return;
      }
      mobileInputs.forEach(function (input) {
        if (input.checked) {
          sortNameMobile.textContent = input.nextElementSibling.textContent;
        }
      });
    });

  }
})();