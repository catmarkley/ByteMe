function SearchPantryController(PantryModel){
  var ctrl = this;

  /*ctrl.$onInit = function () {
    // The pantry service is called to populate the pantry list
    //PantryModel.getByUser(Parse.User.current()).then(function (results){
    //var result;
  }
  ctrl.$onChanges = function (changes) {
    //console.log("changes: ", changes);
  }
  this.addToPantry = function(ingred) {
    if (ctrl.pantryList.indexOf(ingred)== -1){
      ctrl.pantryList.push(ingred);
    }
  }*/
}

angular
  .module('components.search')
  .controller('SearchPantryController', SearchPantryController);
