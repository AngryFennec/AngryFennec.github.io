
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