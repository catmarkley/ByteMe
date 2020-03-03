function SearchResultsController(IngredientsService, $state) {
    var ctrl = this;

    // Grab the ingredient parameter from the current page url
    var searchIngredient = $state.params.ingredient;

    ctrl.$onInit = function () {
      // When the page loads, call the ingredients service and populate the recipe list
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
