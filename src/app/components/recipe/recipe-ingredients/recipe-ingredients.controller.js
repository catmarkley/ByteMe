function RecipeIngredientsController(RecipesService, IngredientsService, $state) {
  var ctrl = this;
  var recipeId = $state.params.id;
  console.log(recipeId);

  ctrl.$onInit = function () {
    // Get the pantry list
    var pantry = IngredientsService.getPantry()


    // Get the list of all recipes via HTTP
    RecipesService.getRecipes().then(function(recipes){
      recipes = recipes.data
      var ingredients = [];
      var i;

      // Iterate over all recipes
      for(i in recipes){
        if(recipes[i]["id"] == recipeId){
          ingredients = recipes[i];
        }
      }
      var name;
      name = ingredients['name'];
      var ingr;
      ingredients = ingredients['ingredients'];
      var x;
      var ingredient = [];
      // Add name of ingredients to ingredients list
      for(x in ingredients){
        ingredient.push(ingredients[x]['name']);
      }

      console.log(ingredient);
      ctrl.ingredients = ingredient;
      ctrl.name = name;
      ctrl.pantry = pantry;
    })
  }
}

angular
  .module('components.recipe')
  .controller('RecipeIngredientsController', RecipeIngredientsController);
