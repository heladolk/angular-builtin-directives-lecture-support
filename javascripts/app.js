angular.module('myApp',[]).controller('myController',function($scope){
    $scope.view = {};
    $scope.fruits = ['apple', 'banana', 'peach'];
    $scope.view.show = true;
    $scope.add = function(fruit) {
        $scope.fruits.push(fruit);
        $scope.fruit = "";
    };
    $scope.toggle = function(){
        $scope.view.show = !($scope.view.show);
    };
});
