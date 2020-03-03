function SearchResultController(IngredientsService, $state) {
    var ctrl = this;

    // If the 'Go To Recipe' button for this recipe is clicked, go to its recipe page
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
