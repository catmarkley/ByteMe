function SearchResultController(IngredientsService, $state) {
    var ctrl = this;

    // When the 'Go To Recipe' button is clicked, send the event to the parent
    ctrl.goToRecipe = function(){
        //ctrl.onNavigate({
        //    $event: {
        //        recipeId: ctrl.recipe.id
        //    }
        $state.go('recipe', {
          recipeId: ctrl.recipe.id
        })
        //});
    };

}

angular
  .module('components.search')
  .controller('SearchResultController', SearchResultController);
