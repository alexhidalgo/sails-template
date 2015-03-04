angular.module('app.controllers', [])
.controller('LoginCtrl', function($scope) {


// $scope.emailCheck = function(identifier) {
// 	console.log(identifier);
// };

// $scope.passwordCheck = function(password) {
// 	console.log(password);
// };

$scope.submit = function(identifier, password) {

	var loginUser = {
		identifier: identifier,
		password: password
	};
	console.log(loginUser);
};

})
.controller('RegisterCtrl', function($scope) {
	// $scope.username = "";
	// $scope.identifier = "";
	// $scope.password = "";





	$scope.submit = function(username, identifier, password) {

		var registerUser = {
			username: username,
			identifier: identifier,
			password: password
		};
		console.log(registerUser);
	};


});
