function SearchPantryController(IngredientsService){
  var ctrl = this;

  ctrl.$onInit = function () {
    // The pantry service is called to populate the pantry list
    var pantry = PantryModel.getByUser('Emma');
    console.log('hello',pantry);
    ctrl.pantryList = pantry;
  }


}

angular
  .module('components.search')
  .controller('SearchPantryController', SearchPantryController);
