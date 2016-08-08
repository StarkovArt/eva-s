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
	.when('/js/json/:id', {
		templateUrl: 'tepmlates/programs-datail.html',
		controller: 'evasProgramsDatailCtr'
	})
	.otherwise('/', {
		redirectTo: '/',
	})
}])

evasApp.controller('evasProgramsCtr', function($scope, $http, $location) {
	$scope.title = 'Программы';
	$scope.review = 'Детский развивающий центр “Eva’s TinyLand” разработал ряд программ, которые помогут ребенку развиваться гармонично. Мы предлагаем различные направления в соответствии с возрастом ребенка. Здесь вы можете ознакомиться с программами нашего центра.'
	$http.get('js/json/programs.json').success(function(data, status, headers,  config){
		$scope.programs = data;
	});
});

evasApp.controller('evasProgramsDatailCtr', function($scope, $http, $location, $routeParams) {
	$scope.id = $routeParams.id;
	var url = 'js/json/details/'+$routeParams.id+'.json';
	$http.get(url).success(function(data){
		$scope.program = data;
	})
});

evasApp.controller('homeContactsCtr', function($scope, $http, $location) {
	$scope.title = 'Контакты';
});

evasApp.controller('evasHomeCtr', function($scope, $http, $location) {
});

evasApp.controller('evasGalaryCtr', function($scope, $http, $location) {
	$scope.title = 'Галерея';
});

evasApp.controller('evasAboutCtr', function($scope, $http, $location) {
	$scope.title = 'О нас';
});

evasApp.controller('evasContactsCtr', function($scope, $http, $location) {
	$scope.title = 'Контакты';
});

evasApp.controller('evasTeachersCtr', function($scope, $http, $location){
    $scope.title = 'Наши педагоги';
        $http.get('js/json/teachers.json').success(function(data, status, headers,  config){
		$scope.teachers = data;
	});
});
