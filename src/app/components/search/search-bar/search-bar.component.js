var searchBar = {
  bindings: {
    searchText: '='
  },
  templateUrl: './search-bar.html',
  controller: 'SearchBarController'
};

angular
  .module('components.search')
  .component('searchBar', searchBar)
  .config(function ($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('search', {
        parent: 'app',
        redirectTo: 'results',
        url: '/search',
        component: 'searchBar'
      })
    $urlRouterProvider.otherwise('/app/search')
});
