angular.module('oe.errors').controller('ErrorsController',['$scope', 'Global', function($scope, Global){
	$scope.global = Global;

	$scope.find = function(){
		console.log('find');
	};
}]);