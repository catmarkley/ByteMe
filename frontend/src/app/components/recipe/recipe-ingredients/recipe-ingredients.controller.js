function RecipeIngredientsController(PantryModel, IngredientsModel, RecipesModel, AuthService, $state, $http) {
    var ctrl = this;
    var recipeId = $state.params.id;
    console.log(recipeId);
    ctrl.ingredients = [];
    ctrl.name = '';
    ctrl.pantry = [];
    ctrl.amount = {};
    ctrl.recipeUrl= '';

  ctrl.$onInit = function () {

    RecipesModel.getById(recipeId).then(function(recipe){
        console.log('Here is the recipe: ', recipe);
        ctrl.name = recipe.name;
        ctrl.recipeUrl = recipe.recipeUrl;
        IngredientsModel.getByRecipe(recipe).then(function(results){
            console.log('Here is the ingredients result: ', results);
            for (var i = 0; i < results.length; i++){
                ctrl.ingredients.push(results[i].attributes.food.attributes.name)
                ctrl.amount[results[i].attributes.food.attributes.name] = {
                  'amount': results[i].attributes.amount.toString(),
                  'unit' : results[i].attributes.unit
                }
            }

        })
    });

    var result;
    PantryModel.getByUser('ODSERISQ1h').then(function (results) {
      for(var i=0; i < results.length; i++){
        //console.log(results[i]['attributes']['food']['attributes']['name']);
        result = results[i]['attributes']['food']['attributes']['name'];
        ctrl.pantry.push(result)
      }
    });

  }
  ctrl.goToEmail = function(){
    var grocery = document.getElementsByClassName('ingr-failure')
    var groceryList = {}
    var sendData = {}
    groceryList['recipename'] = document.getElementsByClassName('recipe-name')[0].innerText
    groceryList['subject'] = "Your Grocery List for " + document.getElementsByClassName('recipe-name')[0].innerText
    groceryList['food'] = []
    for(var i =0; i < grocery.length; i++){
      var food = {}
      food['name'] = grocery[i].innerText
      groceryList['food'].push(food)
    }
    sendData['groceries']= groceryList
    sendData['email'] = AuthService.getUser().email
    console.log('groceryList', groceryList)
    var req = {
      method: 'POST',
      url: 'http://localhost:1338/email',
      data: sendData
    }

    $http(req).then(function(data){
      console.log('data', data); 
    });
  };

  ctrl.logout = function(){
    AuthService.logout()
    .then(function () {
      $state.go('auth.login');
    }, function (reason) {
      ctrl.error = reason.message;
    });
  };
}

angular
  .module('components.recipe')
  .controller('RecipeIngredientsController', RecipeIngredientsController);
