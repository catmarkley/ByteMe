function RecipeIngredientsController(PantryModel, IngredientsModel, RecipesModel, $state) {
    var ctrl = this;
    var recipeId = $state.params.id;
    console.log(recipeId);
    ctrl.ingredients = [];
    ctrl.name = '';
    ctrl.pantry = [];
    
  ctrl.$onInit = function () {

    // Get the recipe object
    RecipesModel.getById(recipeId).then(function(recipe){
        console.log('Here is the recipe: ', recipe);
        ctrl.name = recipe.name;
        IngredientsModel.getByRecipe(recipe).then(function(results){
            console.log('Here is the ingredients result: ', results);
            for (var i = 0; i < results.length; i++){
                ctrl.ingredients.push(results[i].attributes.food.attributes.name)
            }
        })
    });
    
    // Get the pantry
    var result;
    PantryModel.getByUser('ODSERISQ1h').then(function (results) {
      for(var i=0; i < results.length; i++){
        //console.log(results[i]['attributes']['food']['attributes']['name']);
        result = results[i]['attributes']['food']['attributes']['name'];
        ctrl.pantry.push(result)
      }
    });

  }
}

angular
  .module('components.recipe')
  .controller('RecipeIngredientsController', RecipeIngredientsController);
