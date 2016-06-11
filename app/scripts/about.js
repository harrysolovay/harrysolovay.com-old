'use strict';

var about = angular.module('app.about', ['ngRoute']);

about.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/about', {
    templateUrl: 'partials/about.html',
    controller: 'AboutController'
  });
  
}]);

about.controller('AboutController', ['$rootScope', function($rootScope) {
	$rootScope.type = '';
	$rootScope.currentView = 'About';
}]);