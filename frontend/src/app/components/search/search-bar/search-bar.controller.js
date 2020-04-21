function SearchBarController(FoodModel, PantryModel, IngredientsService, $state) {
  var ctrl = this;

  ctrl.$onInit = function () {
    // Initializes the text in the search box
    ctrl.searchText = '';
    ctrl.searchRecipeText = '';
    ctrl.searchAmount = undefined;
    ctrl.searchUnit = '';
    var result;
    ctrl.foodList = [];
    ctrl.userId = 'ODSERISQ1h';
    FoodModel.getAllFood().then(function(results){
      for (var i = 0; i < results.length; i++){
        result = results[i]['name'];
        ctrl.foodList.push(result);
      }
    });
  }

  ctrl.addIngredient = function (searchText, searchAmount, searchUnit) {
    ctrl.onAdd({
      $event: {
        text: searchText,
        amount: searchAmount,
        unit: searchUnit
      }
    });
  }

  ctrl.findRecipe = function (searchRecipeText) {
    console.log("in findRecipe");
    ctrl.onSearch({
      $event: {
        recipeText: searchRecipeText
      }


    });
  }
}

angular
  .module('components.search')
  .controller('SearchBarController', SearchBarController);
