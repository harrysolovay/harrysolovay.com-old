'use strict';

var work = angular.module('app.work', ['ngRoute']);

work.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/work/:type', {
    templateUrl: 'partials/work.html',
    controller: 'WorkController'
  });
  
  $routeProvider.when('/work/:type/:id', {
    templateUrl: 'partials/work.html',
    controller: 'WorkController'
  });
  
}]);

work.controller('WorkController', ['$rootScope', '$scope', '$routeParams', function($rootScope, $scope, $routeParams) {

	$scope.type = $routeParams.type;
	$rootScope.type = $scope.type;
	$scope.currentWorkId = $routeParams.id;
	
	$scope.projects = [
	
		{
			id : 0,
			title : 'Blue Tree',
			href : 'http://bluetreeny.bigcartel.com',
			folder : 'blue-tree'
		},
	
		{
			id : 1,
			title : 'Sinusitis Solutions',
			href : 'http://www.sinusitis-solutions.com',
			folder : 'sinusitis-solutions'
		},
		
		{
			id : 2,
			title : 'Steve Luber',
			href : 'http://steveluber.com',
			folder : 'steve-luber'
		},
		
		{
			id : 3,
			title : 'Solovay Music',
			href : 'http://solovaymusic.com',
			folder : 'solovay-music'
		},
		
		{
			id : 4,
			title : 'Oasis',
			href : '#/work/projects/4',
			folder : 'oasis'
		},
		
		{
			id : 5,
			title : 'Cube Solve Art',
			href : '#/work/projects/5',
			folder : 'cube-solve-art'
		},
		
		{
			id : 6,
			title : 'York Bergin-Pugh',
			href : 'http://www.ybp.me',
			folder : 'york-bergin-pugh'
		}
	
	];

	$scope.drawing = [
	
		{
			id : 0,
			title : 'Crosshatched iPhone',
			folder : 'crosshatched-iphone'
		},
	
		{
			id : 1,
			title : 'Crystals',
			folder : 'crystals'
		},
		
		{
			id : 2,
			title : 'Dimensions',
			folder : 'dimensions'
		},
		
		{
			id : 3,
			title : 'Google Doodle',
			folder : 'google-doodle'
		},
		
		{
			id : 4,
			title : 'Passageways',
			folder : 'passageways'
		},
		
		{
			id : 5,
			title : 'Tablets',
			folder : 'tablets'
		},
		
		{
			id : 6,
			title : 'The Cube',
			folder : 'the-cube'
		},
		
		{
			id : 7,
			title : 'The Real Representation',
			folder : 'the-real-representation'
		},
		
		{
			id : 8,
			title : 'The Structure',
			folder : 'the-structure'
		}
	
	];
	
	$scope.work = ($scope.type == 'drawing') ? $scope.drawing : ($scope.type == 'projects') ? $scope.projects : 'uh oh';

	$rootScope.currentView = $scope.type;

}]);