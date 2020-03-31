function init($uiRouter){
  var Visualizer = window['ui-router-visualizer'].Visualizer
  var pluginInstance = $uiRouter.plugin(Visualizer)

  Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
  Parse.initialize(
    'iZiDYYLMqMc3t1Yihj8EL8qmFAUjGtkqMgYdWC9a', // This is your Application ID
    'IeoiJQf5Mea49dKK1riPBKsLNPfFTLXN43t5zRNr' // This is your Javascript key
  );
}

angular
  .module('common')
  .run(init)
