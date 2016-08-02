'use strict';

/* Controllers */
var evasApp = angular.module('evasApp', ['ngRoute']);
evasApp.config(['$routeProvider', function($routeProvide){
	$routeProvide
	.when('/', {
		templateUrl: 'tepmlates/home.html',
		controller: 'homeContactsCtr'
	})
	.when('/about', {
		templateUrl: 'tepmlates/about.html',
		controller: 'evasAboutCtr'
	})
	.when('/programs', {
		templateUrl: 'tepmlates/programs.html',
		controller: 'evasProgramsCtr'
	})
	.when('/galary', {
		templateUrl: 'tepmlates/galarey.html',
		controller: 'evasGalaryCtr'
	})
	.when('/contacts', {
		templateUrl: 'tepmlates/contacts.html',
		controller: 'evasContactsCtr'
	})
	.otherwise('/', {
		redirectTo: '/',
	})
}])

evasApp.controller('evasProgramsCtr', function($scope, $http, $location) {
	$scope.title = 'Программы';
	$http.get('js/json/programs.json').success(function(data, status, headers,  config){
		$scope.programs = data;
	});
});


evasApp.controller('homeContactsCtr', function($scope, $http, $location) {
});
evasApp.controller('evasHomeCtr', function($scope, $http, $location) {
});

evasApp.controller('evasGalaryCtr', function($scope, $http, $location) {
});

evasApp.controller('evasAboutCtr', function($scope, $http, $location) {
});

evasApp.controller('evasContactsCtr', function($scope, $http, $location) {
});
