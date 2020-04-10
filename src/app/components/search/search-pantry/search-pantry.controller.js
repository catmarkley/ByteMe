function SearchPantryController(PantryModel){
  var ctrl = this;

  ctrl.$onInit = function () {
    // The pantry service is called to populate the pantry list
    //PantryModel.getByUser(Parse.User.current()).then(function (results){
    var result;
    ctrl.pantryList = [];
    PantryModel.getByUser('ODSERISQ1h').then(function (results) {
      for(var i=0; i < results.length; i++){
        result = results[i]['attributes']['food']['attributes']['name'];
        ctrl.pantryList.push(result)
      }
      console.log('hello',ctrl.pantryList);
    });
  }
}

angular
  .module('components.search')
  .controller('SearchPantryController', SearchPantryController);
