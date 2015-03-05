angular.module('app.controllers', ['app.services'])
.controller('NavCtrl', function($scope, $http, $state) {

	$scope.logout = function() {

		$http.get('/logout')
		.success(function(res) {
			console.log(res + "logout success");
			$state.go('login');
		})
		.error(function(err) {
			console.log(err + "logout error");
		});
	};
})
.controller('LoginCtrl', function($scope, $http, Validate) {


	$scope.submit = function(login) {
		//post to auth/local
		$scope.error = Validate.credentials(user);

		$scope.error = {
			identifier: '',
			password: ''
		};

		$scope.credentials = {
			identifier: '',
			password: ''
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

	//post auth/local/register

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
.controller('AssignmentsCtrl', function($scope, $http) {
	$scope.assignment = {
		name: '',
		dueDate: '',
		url: ''
	};

	$scope.submit = function(assignment) {


		$http.post('/assignment', assignment)
		.success(function(res) {
			console.log(res + "server success");
		})
		.error(function(err) {
			console.log(err);
		});

	};

})
.controller('SubmissionCtrl', function($scope, $http) {
	$scope.submission = [];


	$http.get('/assignment?sort=id DESC', assignment)
	.success(function(res) {
		$scope.submission = assignment;
		console.log(res);
	})
	.error(function(err) {
		console.log(err);
	});

});



