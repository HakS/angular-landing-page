'use strict';

describe('Controller: MyElementControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var MyElementControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyElementControllerCtrl = $controller('MyElementControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyElementControllerCtrl.awesomeThings.length).toBe(3);
  });
});
