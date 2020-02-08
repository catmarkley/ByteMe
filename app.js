angular.module('app', ['ngMaterial', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('')

    $routeProvider
        .when('/recipe', {
            templateUrl: 'pages/recipe.html',
            controller: 'RecipeController'
        })
        .otherwise({
            templateUrl: 'pages/recipe.html',
            controller: 'RecipeController'
        })
})

// Inline Annotation
angular.module('app').controller('RecipeController', ['$scope', 'recipeService', function ($scope, $recipeService) {
    
    recipeService.getIngredients().then(function(results){
        console.log($scope.ingredients)
    })
    
}]);

// Explicit dependency injection
angular.module('app').controller('RecipeController', ['$scope', '$log', 'recipeService', function($scope, $log, recipeService){
    
    recipeService.getIngredients().then(function(ingredients){
        $scope.ingredients = ingredients
        console.log(ingredients)
    })
    
}])

// data service
angular.module('app').service('recipeService', ['$http', function($http){
    this.getIngredients = function(){
        return $http.get('/ingredients.json')
    }
}]);

// Single Responsibility Principle (SRP)

// Separation of Concerns (SOC)

// Don't Repeat Yourself (DRY)

// Consistent Naming

// Clean code leads to:
// Easier onboarding for new team members (or future self)
// Easier debugging
// Easier to maintain
