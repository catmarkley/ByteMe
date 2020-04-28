var searchPantry = {
  templateUrl: './search-pantry.html',
  controller: 'SearchPantryController',
  bindings: {
    pantryList: '<'
  }
};

angular
  .module('components.search')
  .component('searchPantry', searchPantry);
