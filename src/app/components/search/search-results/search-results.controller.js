function SearchResultsController(IngredientsService, $state) {
    var ctrl = this;
  
    var searchIngredient = $state.params.ingredient;

    ctrl.$onInit = function () {
      var data = IngredientsService.getIngredients();
      //TODO: tranfer the below code into the Ingredients Service
      console.log("Done");
      console.log(data);
      var recipes = []
      var categoryIdx;
      var ingrIdx;
      var recipeIdx;
      for(categoryIdx in data){
        var ingrs = data[categoryIdx].items
        for(ingrIdx in ingrs){
          if(searchIngredient == null || (searchIngredient != null && ingrs[ingrIdx].name.toLowerCase() == searchIngredient.toLowerCase())){
            for(recipeIdx in ingrs[ingrIdx].recipes){
              var recipe = ingrs[ingrIdx].recipes[recipeIdx];
              recipes.push(recipe)
            }
          }
        }
      }
      ctrl.recipes = recipes;
    }

}

angular
  .module('components.search')
  .controller('SearchResultsController', SearchResultsController);
