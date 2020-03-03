function SearchResultsController(IngredientsService, $state) {
    var ctrl = this;

    var searchIngredient = $state.params.ingredient;

    ctrl.$onInit = function () {
      ctrl.recipeId = '';
      IngredientsService.getResults().then(function(recipes){
        console.log('ctrl rec1:', recipes)
        recipes = IngredientsService.formatResults(recipes, searchIngredient)
        console.log('ctrl rec2:', recipes)
        ctrl.recipes = recipes;
      })
    }
}

angular
  .module('components.search')
  .controller('SearchResultsController', SearchResultsController);
