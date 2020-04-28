var searchResults = {
  templateUrl: './search-results.html',
  controller: 'SearchResultsController'
};

angular
  .module('components.search')
  .component('searchResults', searchResults)
  .config(function ($stateProvider){
    $stateProvider
      .state('results', {
        parent: 'search',
        url: '/:ingredient',
        component: 'searchResults',
        params: {
          ingredient: null
        }
      })
});
