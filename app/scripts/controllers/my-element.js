'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MyElementCtrl
 * @description
 * # MyElementCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MyElementCtrl', function () {
    var me = this;
    me.someAlert = someAlert;
    me.changeColor = changeColor;
    me.color = "#FFF";

    var color = "#FFF";

    function someAlert() {
      alert('HEY!!');
    }

    function changeColor() {
      me.color = '#'+Math.random().toString(16).substr(-6);
    }

  });
