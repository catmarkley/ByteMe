function AppController($state) {
  var ctrl = this;
  //ctrl.user = AuthService.getUser();

 /**
  * @ngdoc method
  * @name AppController#logout
  *
  * @description Logout :)
  */
  /*
  ctrl.logout = function () {
    AuthService.logout().then(function () {
      $state.go('auth.login');
    });
  };
  */
}

angular
  .module('common')
  .controller('AppController', AppController);
