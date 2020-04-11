var searchResult = {
  bindings: {
    recipe: '<',
    onNavigate: '&'
  },
  templateUrl: './search-result.html',
  controller: 'SearchResultController'
};

angular
  .module('components.search')
  .component('searchResult', searchResult);
