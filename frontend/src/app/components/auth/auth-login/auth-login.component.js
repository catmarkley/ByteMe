const authLogin = {
  templateUrl: './auth-login.html',
  controller: function ($state, AuthService){
    const ctrl = this
    ctrl.$onInit = () => {
      ctrl.user = {
        username: '',
        password: ''
      }
    }
    ctrl.loginUser = (event) => {
      AuthService.login(event.user)
      .then(function () {
        $state.go('search');
      }, function (reason) {
        ctrl.error = reason.message;
      });
    }
  }
}

angular
  .module('components.auth')
  .component('authLogin', authLogin)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
    .state('auth',{
      redirectTo: 'auth.login',
      url: '/auth',
      template: '<div ui-view></div>'
    })
    .state('auth.login', {
      url: '/login',
      component: 'authLogin'
    })
    $urlRouterProvider.otherwise('/auth/login')

  })
