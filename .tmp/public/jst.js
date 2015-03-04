this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller="HomeCtrl">\n\t<h1>Home</h1>\n</div>\n';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller=\'LoginCtrl\'>\n\t<h1>Login</h1>\n\t<form novalidate name="loginForm" method="post">\n\n\t\t<input required type="text" name="inputIdentifier" placeholder="email" ng-model="identifier">\n\t\t<span class="alert"\n\t\tng-show="submitted && loginForm.inputIdentifier.$invalid ||\n\t\tloginForm.inputIdentifier.$invalid && loginForm.inputIdentifier.$dirty">\n\t\tEmail cannot be left empty</span>\n\n\t\t<span class="alert" ng-show="identifier.indexOf(\'@\') === -1 && loginForm.inputIdentifier.$dirty">Email must include the @ symbol</span>\n\n\t\t<input required type="text" name="inputPassword" placeholder="password" ng-model="password">\n\t\t<span class="alert"\n\t\tng-show="submitted && loginForm.inputPassword.$invalid\n\t\t||loginForm.inputPassword.$invalid && loginForm.inputPassword.$dirty">\n\t\tPassword cannot be left empty</span>\n\n\t\t<button ng-click="submit(identifier, password);submitted=true" type="submit">Submit</button>\n\n\t</form>\n\n\t<a ui-sref="register">Don\'t have an account yet? SignUp!</a>\n\n</div>\n';

}
return __p
};

this["JST"]["assets/templates/register.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller=\'RegisterCtrl\'>\n\t<h1>Register</h1>\n\n\t<form novalidate name="loginForm" method="post">\n\n\t\t<input required type="text" name="inputIdentifier" placeholder="username" ng-model="user.name">\n\n\t\t<span class="alert"\n\t\tng-show="error">\n\t\tUsername cannot be left empty</span>\n\n\n\n\t\t<input required type="text" name="input" placeholder="email" ng-model="user.identifier">\n\t\t<span class="alert"\n\t\tng-show="error">\n\t\tEmail cannot be left empty</span>\n\t\t<span class="alert" ng-show="">Email must include the @ symbol</span>\n\n\t\t<input required type="text" name="inputPassword" placeholder="password" ng-model="user.password">\n\t\t<span class="alert" ng-show="error">Password cannot be left empty</span>\n\n\t\t<button ng-click="submit(user)" type="submit">Submit</button>\n\t</form>\n\n\t<a ui-sref="login">Already have an account? Login!</a>\n</div>\n';

}
return __p
};