const authRegister = {
  templateUrl: './auth-register.html',
  controller: function($state, AuthService) {
    let ctrl = this
    ctrl.$onInit = function(){
      ctrl.error = null;
      ctrl.user = {
        name: '',
        email: '',
        username: '',
        password: ''
      }
    }
    ctrl.createUser = function (event){
      AuthService.register(event.user)
      .then(function () {
        $state.go('auth.login');
      }, function (reason) {
        ctrl.error = reason.message;
        console.log(ctrl.error)
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
