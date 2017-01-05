import angular from 'angular';
import uiRouter from 'angular-ui-router';

import cardsModule from './submodules/accessmemories/cardsModule.js';

import routesConfig from './routerConfig.js';

const accessMemoriesApp = angular.module('accessMemoriesApp',
  [
    cardsModule,
    uiRouter
  ]
).config(routesConfig);

export default accessMemoriesApp.name;
