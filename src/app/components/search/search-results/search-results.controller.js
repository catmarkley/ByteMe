function SearchResultsController(IngredientsService, $state) {
    var ctrl = this;

    var searchIngredient = $state.params.ingredient;

    ctrl.$onInit = function () {
      ctrl.recipeId = '';
      IngredientsService.getResults().then(function(recipes){
        recipes = IngredientsService.formatResults(recipes, searchIngredient)
        ctrl.recipes = recipes;
      })
    }
}

angular
  .module('components.search')
  .controller('SearchResultsController', SearchResultsController);
