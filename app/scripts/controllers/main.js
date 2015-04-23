'use strict';

/**
 * @ngdoc function
 * @name angularDrupalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDrupalApp
 */
angular.module('angularDrupalApp')
  .controller('MainCtrl', function ($scope, Stuff) {
    $scope.stories = Stuff.stories;

    $scope.author = function(authorId) {
      console.log(authorId);
      return _.findWhere(Stuff.authors, { uid: authorId }).name;
    }
  });
