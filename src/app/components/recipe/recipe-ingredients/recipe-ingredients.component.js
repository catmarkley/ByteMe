var recipeIngredients = {
  bindings: {
    recipeId: '='
  },
  templateUrl: './recipe-ingredients.html',
  controller: 'RecipeIngredientsController'
};

angular
  .module('components.recipe')
  .component('recipeIngredients', recipeIngredients)
  .config(function ($stateProvider){
    $stateProvider
      .state('recipe', {
        parent: 'app',
        url: '/recipe/:id',
        component: 'recipeIngredients',
        params: {
          id: null
        }
      })
});
