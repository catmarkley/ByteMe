function AuthService(Parse) {
    var auth = Parse.User;
    var authData = null;
    function storeAuthData(response) {
       authData = response;
       return authData;
    }
    //function onSignIn() {
       //authData = user;
       //return auth.$requireSignIn();
      // if(auth.authenticated())
  //  }
    function clearAuthData() {
       authData = null;
    }
    this.login = function (user) {
      return auth
        .logIn(user.username, user.password)
        .then(storeAuthData);
    };
    this.register = function (user) {
      console.log(user)
      var attributes = {"name":user.name, "email":user.email}
       return auth
         .signUp(user.username, user.password, attributes)
         .then(storeAuthData);
    };
    this.logout = function () {
      return auth
        .logOut()
        .then(clearAuthData);
    };
    // this.requireAuthentication = function () {
    //   return auth
    //     .$waitForSignIn().then(onSignIn);
    // };
    this.isAuthenticated = function () {
       return !!authData;
    };
    this.getUser = function () {
      if (authData) {
        return authData;
      }
   };
}

angular
.module('components.auth')
.service('AuthService', AuthService)
