angular.module('app', ['ngMaterial', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('')

    $routeProvider
        .when('/ingredients', {
            templateUrl: 'pages/ingredients.html',
            controller: 'IngredientsController'
        })
        .when('/search', {
            templateUrl: 'pages/search.html',
            controller: 'SearchController'
        })
        .when('/recipe/:ingredient', {
            templateUrl: 'pages/recipe.html',
            controller: 'RecipeController'
        })
        .otherwise({
            templateUrl: 'pages/search.html',
            controller: 'SearchController'
        })
})

//Ingredients Controller
angular.module('app').controller('IngredientsController', ['$scope', '$log', 'ingredientsService', function($scope, $log, ingredientsService){
    
    ingredientsService.getIngredients().then(function(ingredients){
        $scope.ingredients = ingredients
        console.log(ingredients)
    })
}])

//Search Controller
angular.module('app').controller('SearchController', ['$scope', '$log', 'ingredientsService', function($scope, $log, ingredientsService){
    
    $scope.searchtext = '';
    
    ingredientsService.getIngredients().then(function(ingredients){
        $scope.ingredients = ingredients
        console.log(ingredients)
    })
}])

//Recipe Controller
angular.module('app').controller('RecipeController', ['$scope', '$log', 'ingredientsService', '$routeParams', function($scope, $log, ingredientsService, $routeParams){
    $scope.ingredient = $routeParams.ingredient
    $scope.recipes = ingredientsService.findRecipe($scope.ingredient)
}])

//Data service
angular.module('app').service('ingredientsService', ['$http', function($http){
    var ingr = {}
    this.getIngredients = function(){
        return ingr = $http.get('/ingredients.json')
    }
    
    this.findRecipe = function(ingredient){
        recipes = []
        ingr = ingr.$$state.value.data
        for(foodidx in ingr){
            for(igx in ingr[foodidx].items){
                ingred = ingr[foodidx].items[igx]
                if(ingredient.includes(ingred.name)){
                    recipes.push(ingred)
                }
            }
        }
        return recipes
    }
    
}]);