
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
})()
