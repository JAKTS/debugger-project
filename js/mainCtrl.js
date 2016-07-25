angular.module('calculator', [])
.controller('mainCtrl', function($scope) {

  $scope.numbers = [];

  $scope.sum = function(a, b) {
    $scope.answer = a + b;
  }


})
