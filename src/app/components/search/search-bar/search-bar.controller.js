function SearchBarController($state) {
    var ctrl = this;

    ctrl.$onInit = function () {
      ctrl.searchText = '';
    }

    ctrl.addIngr = function(event){
      console.log("Clicked Add!")
    }

    ctrl.findRecipe = function(event, searchText){
      console.log("Clicked Find Recipe!")
      $state.go('results', {
        ingredient: searchText
      });
    }


}

angular
  .module('components.search')
  .controller('SearchBarController', SearchBarController);