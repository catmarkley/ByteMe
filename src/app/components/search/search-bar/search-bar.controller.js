function SearchBarController(IngredientsService, $state) {
    var ctrl = this;

    ctrl.$onInit = function () {
      ctrl.searchText = '';
    }

    ctrl.addIngr = function(event, searchText){
      IngredientsService.addToPantry(searchText);
    }

    ctrl.findRecipe = function(event, searchText){
      $state.go('results', {
        ingredient: searchText
      });
    }


}

angular
  .module('components.search')
  .controller('SearchBarController', SearchBarController);
