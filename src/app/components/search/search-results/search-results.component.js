var searchResults = {
  bindings: {
      data: '<'
  },
  templateUrl: './search-results.html',
  controller: 'SearchResultsController'
};

angular
  .module('components.search')
  .component('searchResults', searchResults);