var searchResults = {
  bindings: {
      data: '<'
  },
  templateUrl: './search-results.html',
  controller: 'SearchResultsController'
};

angular
  .module('components.search')
  .component('searchResults', searchResults)
  .config(function ($stateProvider){
      $stateProvider
        .state('searchResults', {
          parent: 'app',
          url: 'searchResults',
          component: 'searchResults',
          resolve: {
            data: function (IngredientsService){
              return IngredientsService.getIngredients();
            }
          }
        })
  });
