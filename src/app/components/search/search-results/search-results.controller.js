function SearchResultsController(RecipesModel, IngredientsService, $state) {
    var ctrl = this;

    // Grab the ingredient parameter from the current page url
    var searchIngredient = $state.params.ingredient;

    ctrl.$onInit = function () {
      // When the page loads, call the ingredients service and populate the recipe list
      ctrl.recipeId = '';
      ctrl.recipes = [];
      RecipesModel.getAllRecipes().then(function(recipes){
        var recipe = {}
        for (var i = 0; i < recipes.length; i++){
          recipe = {}
          recipe["id"] = recipes[i]["attributes"]["id"]
          recipe["name"] = recipes[i]["attributes"]["name"]
          recipe["imgUrl"] = recipes[i]["attributes"]["imgUrl"]
          recipe["recipeUrl"] = recipes[i]["attributes"]["recipeUrl"]
          recipe["servingSize"] = recipes[i]["attributes"]["servingSize"]
          //console.log(recipes[i]["attributes"]);
          ctrl.recipes.push(recipe)
          //ctrl.recipes.push(recipes[i]["attributes"]);
        }
      })
    }


    ctrl.goToRecipe = function(event){
      console.log('going to recipe');
      $state.go('recipe', {
        id: event.recipeId
      });
    }

}

angular
  .module('components.search')
  .controller('SearchResultsController', SearchResultsController);
