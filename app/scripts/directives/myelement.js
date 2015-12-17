'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:myElement
 * @description
 * # myElement
 */
angular.module('angularApp')
  .directive('myElement', function () {
    return {
      controller:'MyElementCtrl',
      controllerAs: 'me',
      bindToController: true,
      scope:{
        evento: '='
      },
      templateUrl: "../views/card.html",
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
