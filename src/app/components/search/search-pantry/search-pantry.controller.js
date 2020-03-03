function SearchPantryController(IngredientsService){
  var ctrl = this;
  var pantry = IngredientsService.getPantry();
  ctrl.pantryList = pantry;
}

angular
  .module('components.search')
  .controller('SearchPantryController', SearchPantryController);
