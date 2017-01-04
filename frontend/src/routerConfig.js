
function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/',
      template: "<h1>THIS IS THE HOME PAGE</h1>",
    });
}

export default routerConfig;
