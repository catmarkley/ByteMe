function SearchPantryController(PantryModel){
  var ctrl = this;

  ctrl.$onInit = function () {
    // The pantry service is called to populate the pantry list
    //PantryModel.getByUser(Parse.User.current()).then(function (results){
    var result;
    ctrl.pantryList = [];
    PantryModel.getByUser('ODSERISQ1h').then(function (results) {
      for(var i=0; i < results.length; i++){
        //console.log(results[i]['attributes']['food']['attributes']['name']);
        result = results[i]['attributes']['food']['attributes']['name'];
        ctrl.pantryList.push(result)
      }
    });
  }

  /*this.addToPantry = function(ingred) {
    if (ctrl.pantryList.indexOf(ingred)== -1){
      ctrl.pantryList.push(ingred);
    }
  }*/
}

angular
  .module('components.search')
  .controller('SearchPantryController', SearchPantryController);
