function RecipeIngredientsController(RecipesService, IngredientsService, $state) {
  var ctrl = this;
  var recipeId = $state.params.id;
  console.log(recipeId);

  ctrl.$onInit = function () {
    var data = RecipesService.getRecipes();
    var pantry = IngredientsService.getPantry();
    console.log(pantry);
    console.log(data);
    var ingredients = [];
    var i;
    for(i in data){
      if(data[i]["id"] == recipeId){
        ingredients = data[i];
      }
    }
    console.log(ingredients['name']);
    var name;
    name = ingredients['name'];
    var ingr;
    ingredients = ingredients['ingredients'];
    var x;
    var ingredient = [];
    for(x in ingredients){
      ingredient.push(ingredients[x]['name']);
      //ingredient.push(ingredients['name'])
    }
    //console.log(ingredient);
    //for(ingr in ingredients['ingredients']['name']){
    //  ingredient.push(ingr)
    //}
    console.log(ingredient);
    ctrl.ingredients = ingredient;
    ctrl.name = name;
    ctrl.pantry = pantry;

  }
}

angular
  .module('components.recipe')
  .controller('RecipeIngredientsController', RecipeIngredientsController);
