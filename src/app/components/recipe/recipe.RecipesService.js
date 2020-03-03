function RecipesService($http){
    this.getRecipes = function(){
      //console.log($http.get('/json/recipes.json'))
      return $http.get('/json/recipes.json')
    }
};

angular
  .module('components.recipe')
  .service('RecipesService', RecipesService);
