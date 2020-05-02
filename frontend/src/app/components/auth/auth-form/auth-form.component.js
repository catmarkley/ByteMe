const authForm = {
  bindings: {
    user: '<',
    button: '@',
    message: '@',
    onSubmit: "&"
  },
  templateUrl: './auth-form.html',
  controller: ($state) => {
      const ctrl = this;
      ctrl.submitForm = () => {
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
