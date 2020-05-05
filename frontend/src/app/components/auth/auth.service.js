function AuthService(Parse) {
    var auth = Parse.User;
    var authData = null;
    function storeAuthData(response) {
       authData = response;
       return authData;
    }
    function onSignIn() {
       if(auth.authenticated()){
         return authData
       }
       else {
         return null
       }
    }
    function clearAuthData() {
       authData = null;
    }
    /**
    * @name login
    * @methodOf AuthService
    * @description Takes in a User in order to login
    * @param {object=} [user] This parameter is used to identify a user
    * @returns {Promise} Returns authentication promise
    */
    this.login = function (user) {
      return auth
        .logIn(user.username, user.password)
        .then(storeAuthData);
    };

    /**
    * @name register
    * @methodOf AuthService
    * @description Takes in a User in order to register
    * @param {object=} [user] This parameter is used to identify a user
    * @returns {Promise} Returns authentication promise
    */
    this.register = function (user) {
      console.log(user)
      var attributes = {"name":user.name, "email":user.email}
       return auth
         .signUp(user.username, user.password, attributes)
         .then(storeAuthData);
    };

    /**
    * @name logout
    * @methodOf AuthService
    * @description Logs out
    * @returns {Promise} Returns authentication promise
    */
    this.logout = function () {
      return auth
        .logOut()
        .then(clearAuthData);
    };

    /**
    * @name requireAuthentication
    * @methodOf AuthService
    * @description Require authentication to navigate
    * @returns {Promise} Returns authentication promise
    */
    this.requireAuthentication = function () {
      return new Promise ((resolve, reject) => {
        !!onSignIn() ? resolve() : reject()
      })
    };

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
