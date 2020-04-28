function SearchResultsController(RecipesModel, IngredientsModel, $state) {
    var ctrl = this;

    // Grab the ingredient parameter from the current page url
    var searchIngredient = $state.params.ingredient;

    ctrl.$onInit = function () {
      // When the page loads, call the ingredients service and populate the recipe list
      console.log("search Ingredient is: ",searchIngredient);
      ctrl.recipes = [];
      if(searchIngredient==null) {
        RecipesModel.getAllRecipes().then(function(recipes){
          var recipe = {}
          for (var i = 0; i < recipes.length; i++){
            recipe = {}
            recipe["id"] = recipes[i]["id"]
            recipe["name"] = recipes[i]["attributes"]["name"]
            recipe["imgUrl"] = recipes[i]["attributes"]["imgUrl"]
            recipe["recipeUrl"] = recipes[i]["attributes"]["recipeUrl"]
            recipe["servingSize"] = recipes[i]["attributes"]["servingSize"]
            ctrl.recipes.push(recipe)
          }
        })
      }
      else {
        IngredientsModel.getRecipesByFood(searchIngredient).then(function(recipes){
          var recipe = {}
          for (var i = 0; i < recipes.length; i++){
            recipe = {}
            recipe["id"] = recipes[i]["attributes"]['recipe']["id"]
            recipe["name"] = recipes[i]["attributes"]['recipe']['attributes']["name"]
            recipe["imgUrl"] = recipes[i]["attributes"]['recipe']['attributes']["imgUrl"]
            recipe["recipeUrl"] = recipes[i]["attributes"]['recipe']['attributes']["recipeUrl"]
            recipe["servingSize"] = recipes[i]["attributes"]['recipe']['attributes']["servingSize"]
            ctrl.recipes.push(recipe)
          }
        })
      }
    }

    ctrl.goToRecipe = function(event){
      console.log('going to recipe');
      console.log(event.recipeId);
      $state.go('recipe', {
        id: event.recipeId
      });
    }

}

angular
  .module('components.search')
  .controller('SearchResultsController', SearchResultsController);
