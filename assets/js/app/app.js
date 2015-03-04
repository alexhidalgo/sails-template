angular.module('app', ['app.controllers', 'ui.router'])
.config(function($stateProvider) {
	$stateProvider
	.state('register', {
		url: '/register',
		templateUrl: 'templates/register.html',
		controller: 'RegisterCtrl'
	})
	.state('login', {
		url: '/',
		templateUrl: 'templates/login.html',
		controller: 'LoginCtrl'
	})
	.state('home', {
		url: '/home',
		templateUrl: 'templates/home.html',
		controller: 'HomeCtrl'
	});
});
