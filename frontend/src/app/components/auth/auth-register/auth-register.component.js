const authRegister = {
  templateUrl: '/auth-register.html',
  controller: ($state, AuthService) => {
    const ctrl = this
    ctrl.$onInit = () => {
      ctrl.error = null;
      ctrl.user = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
    ctrl.creatUser = (event) => {
      console.log('event', event)
    }
  }
}


angular
  .module('components.auth')
  .component('auth-register', authRegister)
  .config(($stateProvider) => {
    $stateProvider.state('auth.register', {
      url: '/register',
      component: 'authRegister'
    })
  })
