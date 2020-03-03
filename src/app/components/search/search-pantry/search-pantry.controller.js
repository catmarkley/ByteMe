function SearchPantryController(IngredientsService){
  var ctrl = this;

  // The pantry service is called to populate the pantry list
  var pantry = IngredientsService.getPantry();
  ctrl.pantryList = pantry;
}

angular
  .module('components.search')
  .controller('SearchPantryController', SearchPantryController);
