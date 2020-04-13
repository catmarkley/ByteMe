function SearchResultController(IngredientsService, $state) {
    var ctrl = this;

    // When the 'Go To Recipe' button is clicked, send the event to the parent
    // The parent, searchResults, deals with the actual navigation
    ctrl.goToRecipe = function(){
        ctrl.onNavigate({
            $event: {
                recipeId: ctrl.recipe.id
            }
        });
    };

}

angular
  .module('components.search')
  .controller('SearchResultController', SearchResultController);
