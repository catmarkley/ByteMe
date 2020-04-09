function init(ParseProvider){
  ParseProvider.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
  ParseProvider.initialize(
    'iZiDYYLMqMc3t1Yihj8EL8qmFAUjGtkqMgYdWC9a', // This is your Application ID
    'IeoiJQf5Mea49dKK1riPBKsLNPfFTLXN43t5zRNr' // This is your Javascript key
  );
}
angular
  .module('common')
  .config(init)
