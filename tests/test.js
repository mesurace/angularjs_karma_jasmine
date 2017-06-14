describe("calculator",function(){
	beforeEach(module('myApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    }));

    describe('sum', function () {
		it('1 + 1 should equal 2', function () {
			var $scope = {};
			var controller = $controller('CalculatorController', { $scope: $scope });
			$scope.x = 1;
			$scope.y = 2;
			$scope.sum();
			expect($scope.z).toBe(3);
		});	
	});

	describe('difference', function(){

		it('2-1 should be equal to 1', function(){

			var $scope = {};
			var controller = $controller('CalculatorController', { $scope: $scope });

			$scope.x=2;
			$scope.y=1;
			$scope.diff();
			expect($scope.z).toBe(1);


		});


	});

});