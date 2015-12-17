'use strict';

/**
* @ngdoc function
* @name angularApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the angularApp
*/
angular.module('angularApp')
.controller('MainCtrl',["eventService", function (eventService) {
  var main = this;
  main.eventList = [];
  eventService.query().$promise.then(function(result){
    main.eventList = result;
  },function(result){
    console.error(result);
  });

}]);
