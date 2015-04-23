'use strict';

/**
 * @ngdoc overview
 * @name angularDrupalApp
 * @description
 * # angularDrupalApp
 *
 * Main module of the application.
 */
angular
  .module('angularDrupalApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
