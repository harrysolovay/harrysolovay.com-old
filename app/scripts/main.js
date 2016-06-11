'use strict';





require('./lib/modernizr-custom.min.js');

require('../polymer/webcomponentsjs/webcomponents.min.js');

var WebFont = require('webfontloader');
WebFont.load({ typekit : { id : 'scn0ojn' } });





var // dependencies ...

	angular = require('angular'),
	ngRoute = require('angular-route'),
	ngMessages = require('angular-messages');

require('./about.js');
require('./work.js');
require('./contact.js');





var app = angular.module('app', [
  'ngRoute',
  'ngMessages',
  'app.about',
  'app.work',
  'app.contact'
]);




app.run(['$route', function($route) {
	$route.reload();
}]);




app.directive('autofocus', [function() {
	return {
		restrict : 'A',
		link : function(scope, element) {
			element[0].focus();
		}
	}
}]);





app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.otherwise({redirectTo: '/about'});
}]);