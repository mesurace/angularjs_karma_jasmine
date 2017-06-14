var app=angular.module('myApp',[]);
app.controller('CalculatorController', function CalculatorController($scope){
$scope.z=0;
$scope.sum=function(){
$scope.z=$scope.x + $scope.y;
};

$scope.diff=function(){
	$scope.z=$scope.x - $scope.y;
};

});