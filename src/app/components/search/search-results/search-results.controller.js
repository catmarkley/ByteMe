function SearchResultsController(IngredientsService) {
    var ctrl = this;

    ctrl.$onInit = function () {
      ctrl.data = IngredientsService.getIngredients();
      console.log("Done");
      console.log(ctrl.data);
    }

}

angular
  .module('components.search')
  .controller('SearchResultsController', SearchResultsController);
