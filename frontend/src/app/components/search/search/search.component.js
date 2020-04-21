var search = {
  templateUrl: './search.html',
  controller: 'SearchController'
};

angular
  .module('components.search')
  .component('search', search)
  .config(function ($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('search', {
        parent: 'app',
        redirectTo: 'results',
        url: '/search',
        component: 'search'
      })
    $urlRouterProvider.otherwise('/app/search')
});
