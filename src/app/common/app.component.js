var app = {
  templateUrl: './app.html',
  controller: 'AppController'
};

angular
  .module('common')
  .component('app', app)
  .config(function ($stateProvider) {
    $stateProvider
      .state('app', {
        redirectTo: 'inventory',
        url: '/app',
        data: {
          requiredAuth: false
        },
        component: 'app'
      })
  });
