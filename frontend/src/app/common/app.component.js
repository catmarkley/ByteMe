var app = {
  templateUrl: './app.html',
  controller: 'AppController'
};

angular
  .module('common')
  .component('app', app)
  .config(function ($stateProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $stateProvider
      .state('app', {
        url: '/app',
        data: {
          requiredAuth: false
        },
        component: 'app'
      })
  });
