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
        //console.log('foods', ctrl.foodList)
      });

    }
    ctrl.addIngr = function(event, searchText, searchAmount, searchUnit){
      // Adds the text from the input box into the pantry using the ingredient service
      //IngredientsService.addToPantry(searchText);
        PantryModel.addToPantry(searchText, searchAmount, searchUnit);
        //SearchPantryController.ctrl.pantryList.push(searchText);
        $state.go('search',{
          controller: 'SearchPantryController',
          text: searchText
        })
    }

    ctrl.findRecipe = function(event, searchRecipeText){
      // Redirects to the results state (url: search/:ingredient)
      // This state displays results based on what is in the search box
      $state.go('results', {
        ingredient: searchRecipeText
      });
    }

}

angular
  .module('components.search')
  .controller('SearchBarController', SearchBarController);
