angular
  .module('components.auth', [
    'ui.router',
    'ngParse'
  ])
  .run(function ($transitions, $state, AuthService) {
      $transitions.onStart({
    to: function (state) {
      return !!(state.data && state.data.requiredAuth);
    }
  }, function() {
    return AuthService
      .requireAuthentication()
      .catch(function () {
        return $state.target('auth.login');
      });
    });
    $transitions.onStart({
        to: 'auth.*'
      }, function () {
        if (AuthService.isAuthenticated()) {
          return $state.target('app');
        }
      });
  });
