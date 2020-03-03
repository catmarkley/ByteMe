function SearchResultsController(IngredientsService, $state) {
    var ctrl = this;

    var searchIngredient = $state.params.ingredient;

    ctrl.$onInit = function () {
      ctrl.recipeId = '';
      var recipes = IngredientsService.getResults(searchIngredient);
      ctrl.recipes = recipes;
    }
}

angular
  .module('components.search')
  .controller('SearchResultsController', SearchResultsController);
