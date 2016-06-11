'use strict';

var contact = angular.module('app.contact', ['ngRoute']);

contact.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/contact', {
    templateUrl: 'partials/contact.html',
    controller: 'ContactController'
  });
  
}]);

contact.controller('ContactController', ['$scope', function($scope) {
	
	$scope.reset = function() {
	
		$scope.submission.theName = '';
		$scope.submission.theEmail = '';
		$scope.submission.theMessage = '';
		$scope.submission.theSendUserACopy = false;
	
		$scope.submission.setUntouched();
		$scope.submission.$setPristine();
		
	}
	
	$scope.submit = function() {
	
		/* if($scope.submission.$valid) {
			console.log({
				'name' : $scope.submissionName,
				'email' : $scope.submissionEmail,
				'message' : $scope.submissionMessage,
				'sendUserACopy' : $scope.submissionSendUserACopy
			});
		} */
		
	}
	
}]);