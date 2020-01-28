angular.module('app', ['ngMaterial', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('')

    $routeProvider
        .when('/home', {
            templateUrl: 'pages/main.html',
            controller: 'MainController'
        })
        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'second'
        })
        .otherwise({
            templateUrl: 'pages/main.html',
            controller: 'MainController'
        })
})

// Inline Annotation
angular.module('app').controller('second', ['$scope', function ($scope) {

    // TODO: MOVE JSON DATA SOURCE TO A SERVICE ()
    const data = {
        american: ['pizza', 'burgers', 'hotdogs'],
        desserts: ['ice cream', 'waffles']
    }
    $scope.data = data;
}]);

// Explicit dependency injection
function MainController($scope) {
    const data = {
        american: ['pizza', 'burgers', 'hotdogs'],
        desserts: ['ice cream', 'waffles']
    }
    $scope.data = data;
}
MainController.$inject = ['$scope']
angular.module('app').controller('MainController', MainController)

// Single Responsibility Principle (SRP)

// Separation of Concerns (SOC)

// Don't Repeat Yourself (DRY)

// Consistent Naming

// Clean code leads to:
// Easier onboarding for new team members (or future self)
// Easier debugging
// Easier to maintain
