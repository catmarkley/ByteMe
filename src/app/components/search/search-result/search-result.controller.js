function SearchResultController(IngredientsService, $state) {
    var ctrl = this;

    ctrl.goToRecipe = function (event) {
      console.log("Clicked Go to Recipe!");
      $state.go('recipe', {
        id: ctrl.recipe.id
      });
    }

}

angular
  .module('components.search')
  .controller('SearchResultController', SearchResultController);
