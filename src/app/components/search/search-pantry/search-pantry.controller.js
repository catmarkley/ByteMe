function SearchPantryController(PantryModel){
  'ngInject';
  var ctrl = this;

  ctrl.$onInit = function () {
    // The pantry service is called to populate the pantry list
    PantryModel.getByUser('Emma').then(function (results){
      ctrl.pantryList = results;
      console.log('hello',pantry);
    });
  }
}

SearchPantryController.$inject = ["PantryModel"];

angular
  .module('components.search')
  .controller('SearchPantryController', SearchPantryController);
