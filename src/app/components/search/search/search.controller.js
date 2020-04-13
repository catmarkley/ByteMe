function SearchController(FoodModel, PantryModel, IngredientsService, $state) {
    var ctrl = this;

    ctrl.$onInit = function () {
      var result;
      ctrl.pantryList = [];
      PantryModel.getByUser('ODSERISQ1h').then(function (results) {
        for(var i=0; i < results.length; i++){
          result = results[i]['attributes']['food']['attributes']['name'];
          ctrl.pantryList.push(result)
        }
      });
    }
    ctrl.addIngredient = function(event){
      // Adds the text from the input box into the pantry using the ingredient service
        PantryModel.addToPantry(event.text, event.amount, event.unit);
        ctrl.pantryList.push(event.text);
        $state.go('search',{
          controller: 'SearchPantryController',
          text: event.text
        })
    }

    ctrl.findRecipe = function(event){
      console.log("event:", event)
      // Redirects to the results state (url: search/:ingredient)
      // This state displays results based on what is in the search box
      $state.go('results', {
        ingredient: event.recipeText
      });
    }

}

angular
  .module('components.search')
  .controller('SearchController', SearchController);
