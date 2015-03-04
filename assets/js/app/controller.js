angular.module('app.controllers', ['app.services'])
.controller('LoginCtrl', function($scope, $http, Validate) {


	$scope.submit = function(user) {

		$scope.error = Validate.credentials(user);

		var loginUser = {
			identifier: identifier,
			password: password
		};

		if(!Validate.hasError($scope.error)) {

			$http.post('/auth/local/login', loginUser)
			.succcess(function(res) {
				console.log('success' + res);
			})
			.error(function(err) {
				console.log('error' + err);
			});

		}

	};

})
.controller('RegisterCtrl', function($scope, $http) {


	$scope.submit = function(user) {

		var registerUser = {
			name: name,
			identifier: identifier,
			password: password
		};

		if('no errors') {

			$http.post('/auth/local/register', registerUser)
			.succcess(function(res) {
				if(res.sucess) {
					$state.go('home');
				}
			})
			.error(function(err) {
				console.log('error' + err);
			});

		}

	};
})
.controller('HomeCtrl', function() {

});
