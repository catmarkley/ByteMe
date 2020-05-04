const authRegister = {
  templateUrl: './auth-register.html',
  controller: function($state, AuthService) {
    let ctrl = this
    ctrl.$onInit = function(){
      ctrl.error = null;
      ctrl.user = {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
      }
    }
    ctrl.creatUser = (event) => {
      AuthService.signUp(event.user)
      .then(function () {
        $state.go('login');
      }, function (reason) {
        ctrl.error = reason.message;
      });
    }
  }
}

angular
  .module('components.auth')
  .component('authRegister', authRegister)
  .config(($stateProvider) => {
    $stateProvider.state('auth.register', {
      url: '/register',
      component: 'authRegister'
    })
  })
