'use strict';

/**
 * @ngdoc service
 * @name angularApp.eventService
 * @description
 * # eventService
 * Service in the angularApp.
 */
angular.module('angularApp')
  .service('eventService',["$resource", function ($resource) {
    return $resource('../data/eventos.json',null,null);
  }]);
