'use strict';

/**
 * @ngdoc function
 * @name angularDrupalApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularDrupalApp
 */
angular.module('angularDrupalApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
