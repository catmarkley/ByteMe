function SearchBarController() {
    var ctrl = this;
    ctrl.searchText = '';
}

angular
  .module('components.search')
  .controller('SearchBarController', SearchBarController);