'use strict';

describe('Controller: MyelementcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var MyelementcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyelementcontrollerCtrl = $controller('MyelementcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyelementcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
