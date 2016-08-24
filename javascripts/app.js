angular.module('myApp',[]).controller('myController',function($scope){
  $scope.fruits = ['apple', 'banana', 'peach'];
  $scope.show = true;
  $scope.add = function(fruit) {
      $scope.fruits.push(fruit);
      $scope.fruit = "";
  };
  $scope.toggle = function(){
      $scope.show = !($scope.show);
  };
});
