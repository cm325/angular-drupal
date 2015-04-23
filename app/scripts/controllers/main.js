'use strict';

/**
 * @ngdoc function
 * @name angularDrupalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDrupalApp
 */
angular.module('angularDrupalApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
