function SearchResultsController(IngredientsService) {
    var ctrl = this;
    
    IngredientsService.getIngredients().then(function(ingredients){
        ctrl.data = ingredients;
        console.log("Done");
        console.log(ingredients);
    });
}

angular
  .module('components.search')
  .controller('SearchResultsController', SearchResultsController);