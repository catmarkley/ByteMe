const authLogin = {
  templateUrl: '/auth-login.html',
  controller: ($state, AuthService) => {
    const ctrl = this
    ctrl.$onInit = () => {
      ctrl.user = {
        email: '',
        password: ''
      }
    }
    ctrl.loginUser = (event) => {
      console.log('event', event)
    }
  }
}


angular
  .module('components.auth')
  .component('auth-login', authLogin)
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
