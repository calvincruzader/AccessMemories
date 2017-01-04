import angular from 'angular';
import uiRouter from 'angular-ui-router';

import accessMemoriesModule from './submodules/accessmemories/accessMemoriesModule.js';

import routes from './routerConfig.js';

const AccessMemoryApp = angular.module('accessMemoriesApp',
  [
    accessMemoriesModule,
    uiRouter
  ]
).config(routes);

export default AccessMemoryApp.name;
