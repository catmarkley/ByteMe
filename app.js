angular.module('app', ['ngMaterial', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('')

    $routeProvider
        .when('/ingredients', {
            templateUrl: 'pages/ingredients.html',
            controller: 'IngredientsController'
        })
        .when('/recipe/:ingredient', {
            templateUrl: 'pages/recipe.html',
            controller: 'RecipeController'
        })
        .when('/groceries/:recipe/:ingredient', {
            templateUrl: 'pages/groceries.html',
            controller: 'GroceriesController'
        })
        .otherwise({
            templateUrl: 'pages/ingredients.html',
            controller: 'IngredientsController'
        })
})

//Ingredients Controller
angular.module('app').controller('IngredientsController', ['$scope', '$log', 'ingredientsService', function($scope, $log, ingredientsService){
    
    ingredientsService.getIngredients().then(function(ingredients){
        $scope.ingredients = ingredients
        console.log(ingredients)
    })
}])

//Recipe Controller
angular.module('app').controller('RecipeController', ['$scope', '$log', 'ingredientsService', '$routeParams', function($scope, $log, ingredientsService, $routeParams){
    $scope.ingredient = $routeParams.ingredient
    $scope.recipes = ingredientsService.findRecipes($scope.ingredient)
}])

//Grocery List Controller
angular.module('app').controller('GroceriesController', ['$scope', '$log', 'ingredientsService', '$routeParams', function($scope, $log, ingredientsService, $routeParams){
    $scope.ingredient = $routeParams.ingredient
    $scope.recipe = $routeParams.recipe
    console.log($scope.ingredient)
    console.log($scope.recipe)
    $scope.groceryList = null
    
    ingredientsService.getIngredients().then(function(data){
        $scope.rec = ingredientsService.findRecipe($scope.ingredient, $scope.recipe, data)
    })
    
}])

//Data service
angular.module('app').service('ingredientsService', ['$http', function($http){
    var ingr = {}
    this.getIngredients = function(){
        return ingr = $http.get('/ingredients.json')
    }
    
    this.findRecipes = function(ingredient){
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
    
    this.findRecipe = function(ingred, recipe, data){
        for(idx in data.data){
            foodType = data.data[idx]
            for(idx2 in foodType.items){
                ing = foodType.items[idx2]
                if(ing.name == ingred){
                    console.log("Found ingredient: " + ing.name)
                    for(idx3 in ing.recipes){
                        rec = ing.recipes[idx3]
                        if(rec.name == recipe){
                            console.log("Found Recipe!: " + rec.name)  
                            return rec
                        }
                    }
                }
            }
        }
    }
    
}]);