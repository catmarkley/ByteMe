const authForm = {
  bindings: {
    user: '<',
    button: '@',
    message: '@',
    onSubmit: "&"
  },
  templateUrl: './auth-form.html',
  controller: function($state) {
      const ctrl = this;
      ctrl.submitForm = function(){
        ctrl.onSubmit({
          $event: {
            user: ctrl.user
          }
        })
      }
  }
}

angular
  .module('components.auth')
  .component('authForm', authForm);
