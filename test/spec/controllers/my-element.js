'use strict';

describe('Controller: MyElementCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var MyElementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyElementCtrl = $controller('MyElementCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyElementCtrl.awesomeThings.length).toBe(3);
  });
});
