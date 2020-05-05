angular
  .module('components.auth', [
    'ui.router',
    'ngParse'
  ])
    .run(function ($transitions, $state, AuthService) {
      $transitions.onStart({
        to: 'auth.*'
      }, function () {
        if (AuthService.isAuthenticated()) {
          return $state.target('app');
        }
      });
    });
