'use strict';

/* Controllers */
var evasApp = angular.module('evasApp', []);

evasApp.controller('evasProgramsCtr', function($scope, $http) {
	$scope.title = 'Программы';
	$http.get('js/json/programs.json').success(function(data, status, headers,  config){
		$scope.programs = data;
	});
});
