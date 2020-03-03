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
  .config(function ($stateProvider){
    $stateProvider
      .state('search', {
        parent: 'app',
        redirectTo: 'results',
        url: '/search',
        component: 'searchBar'
      })
});
