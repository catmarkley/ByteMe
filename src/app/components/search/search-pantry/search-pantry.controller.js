function SearchPantryController(PantryModel){
  var ctrl = this;

  ctrl.$onInit = function () {
    // The pantry service is called to populate the pantry list
    //PantryModel.getByUser(Parse.User.current()).then(function (results){
    PantryModel.getById('Kpzyh36xrV').then(function (results){
      ctrl.pantryList = results;
      console.log('hello',results);
    });
  }
}

angular
  .module('components.search')
  .controller('SearchPantryController', SearchPantryController);
