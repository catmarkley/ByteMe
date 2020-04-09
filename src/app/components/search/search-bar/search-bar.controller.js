function SearchBarController(FoodModel, $state) {
    var ctrl = this;

    ctrl.$onInit = function () {
      // Initializes the text in the search box
      ctrl.searchText = '';
      ctrl.foodList = FoodModel.getAllFood().then(console.log('hello', ctrl.foodList['$$state'];


    }
    ctrl.addIngr = function(event, searchText){
      // Adds the text from the input box into the pantry using the ingredient service
      //IngredientsService.addToPantry(searchText);
    }

    ctrl.findRecipe = function(event, searchText){
      // Redirects to the results state (url: search/:ingredient)
      // This state displays results based on what is in the search box
      $state.go('results', {
        ingredient: searchText
      });
    }

}

angular
  .module('components.search')
  .controller('SearchBarController', SearchBarController);
