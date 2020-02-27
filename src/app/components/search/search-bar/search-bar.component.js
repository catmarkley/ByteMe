var searchBar = {
  templateUrl: './search-bar.html',
  controller: 'SearchBarController'
};

angular
  .module('components.search')
  .component('searchBar', searchBar);