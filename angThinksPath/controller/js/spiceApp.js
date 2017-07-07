var myApp = angular.module('spicyApp', []);

myApp.controller('SpicyController', ['$scope', function($scope) {
	//$scope.customSpice = 'wasabi';
	$scope.spice = 'very';
	$scope.spiceFactor = 'depends On Spice';

	$scope.chiliSpicy = function() {
		$scope.spice = 'chili';
	};

	$scope.jalapenoSpicy = function() {
		$scope.spice = 'jalapeno';
	};

	$scope.isSpicy = function() {
		if($scope.spice == "chili"){
			$scope.spiceFactor = 'depends On ' + $scope.spice + ' Spice' ;
		} else if($scope.spice == 'jalapeno') {
			$scope.spiceFactor = 'depends on ' + $scope.spice + ' spicyyyyyyyy';
 		}
	}
}]);