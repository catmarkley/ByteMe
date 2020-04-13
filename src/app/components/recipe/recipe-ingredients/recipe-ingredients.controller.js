function RecipeIngredientsController(IngredientsModel, RecipesModel, RecipesService, IngredientsService, $state) {
    var ctrl = this;
    var recipeId = $state.params.id;
    console.log(recipeId);
    ctrl.ingredients = [];
    ctrl.name = '';
    
  ctrl.$onInit = function () {
    // Get the pantry list
    //var pantry = IngredientsService.getPantry()


    // Get the recipe object
    RecipesModel.getById(recipeId).then(function(recipe){
        console.log('Here is the recipe: ', recipe);
        ctrl.name = recipe.name;
        IngredientsModel.getByRecipe(recipe).then(function(results){
            console.log('Here is the ingredients result: ', results);
            for (var i = 0; i < results.length; i++){
                ctrl.ingredients.push(results[i].attributes.food.attributes.name)
            }
            console.log(ctrl.ingredients)
        })
    });
    
    
    
    /*// Get the list of all recipes via HTTP
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
    })*/
  }
}

angular
  .module('components.recipe')
  .controller('RecipeIngredientsController', RecipeIngredientsController);
