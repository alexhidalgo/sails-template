angular.module('app', ['app.controllers', 'ui.router'])
.config(function($stateProvider) {
	$stateProvider
	.state('register', {
		url: '/register',
		templateUrl: 'templates/register.html',
		controller: 'RegisterCtrl'
	})
	.state('login', {
		url: '/login',
		templateUrl: 'templates/login.html',
		controller: 'LoginCtrl'
	});
});
