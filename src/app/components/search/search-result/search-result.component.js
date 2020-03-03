var searchResult = {
  bindings: {
    recipe: '<',
  },
  templateUrl: './search-result.html',
  controller: 'SearchResultController'
};

angular
  .module('components.search')
  .component('searchResult', searchResult);
