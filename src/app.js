(function () {

angular.module('SimpleFormsApp',[]);

angular.module('SimpleFormsApp')
.controller('RegistrationController', RegistrationController);

RegistrationController.inject = '$scope';
function RegistrationController($scope) {
  var reg = this;
  $scope.maxLen = 10;

  reg.submit = function () {
    reg.completed = true;
  };
}

})();
